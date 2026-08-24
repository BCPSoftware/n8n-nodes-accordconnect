# Production Deployment Guide

Complete guide for deploying n8n with Accord Connect integration in production environments.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Docker Deployment](#docker-deployment)
- [Security Configuration](#security-configuration)
- [Environment Variables](#environment-variables)
- [SSL/TLS Setup](#ssltls-setup)
- [Monitoring & Logging](#monitoring--logging)
- [Backup & Recovery](#backup--recovery)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)

## Overview

This guide covers production deployment using Docker Compose with:
- PostgreSQL database for persistence
- SSL/TLS termination
- Environment-based configuration
- Security best practices
- Monitoring and backup strategies

### Architecture

```
Internet → Reverse Proxy (nginx/Traefik) → n8n Container → PostgreSQL
                                          ↓
                              Accord Connect API
```

## Prerequisites

### System Requirements

**Minimum Specifications:**
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 20GB SSD
- **Network**: Stable internet connection

**Recommended Specifications:**
- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 50GB+ SSD with backup
- **Network**: High-speed internet with monitoring

### Software Requirements

```bash
# Docker & Docker Compose
docker --version          # 20.10+
docker-compose --version  # 1.29+

# System utilities
curl --version
openssl version
```

### Network Requirements

**Outbound Access:**
- Accord Connect API endpoints
- npm registry (for node packages)
- Docker Hub (for image updates)

**Inbound Access:**
- HTTPS (443) for n8n web interface
- HTTP (80) for SSL certificate challenges
- Custom ports for webhooks (if needed)

## Docker Deployment

### 1. Prepare Environment

**Create project directory:**
```bash
mkdir -p /opt/n8n-production
cd /opt/n8n-production
```

> Everything below is self-contained - the compose file and environment
> template are given in full further down, so there is nothing to clone.

### 2. Environment Configuration

**Create the environment file:**
```bash
touch .env && nano .env
```

**Required variables:**
```bash
# Security (REQUIRED - Generate unique values)
N8N_ENCRYPTION_KEY="your-32-character-encryption-key-here"
DB_POSTGRESDB_PASSWORD="strong-database-password"
POSTGRES_PASSWORD="strong-postgres-root-password"

# n8n Configuration
N8N_HOST="your-domain.com"
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://your-domain.com

# Authentication (Recommended)
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD="secure-admin-password"

# Database
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=postgres
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n

# Logging
N8N_LOG_LEVEL=info
N8N_LOG_OUTPUT=console,file

# Security Headers
N8N_SECURE_COOKIE=true
```

### 3. Generate Encryption Key

```bash
# Generate secure 32-character key
openssl rand -hex 16
# Example output: a1b2c3d4e5f6789012345678901234ab

# Or use this command
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### 4. Production Docker Compose

**Create `docker-compose.prod.yml`:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${DB_POSTGRESDB_DATABASE}
      POSTGRES_USER: ${DB_POSTGRESDB_USER}
      POSTGRES_PASSWORD: ${DB_POSTGRESDB_PASSWORD}
      POSTGRES_ROOT_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init:/docker-entrypoint-initdb.d
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_POSTGRESDB_USER} -d ${DB_POSTGRESDB_DATABASE}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - n8n-network

  n8n:
    image: n8nio/n8n:latest
    restart: unless-stopped
    environment:
      - N8N_DATABASE_TYPE=${DB_TYPE}
      - N8N_DATABASE_HOST=${DB_POSTGRESDB_HOST}
      - N8N_DATABASE_PORT=${DB_POSTGRESDB_PORT}
      - N8N_DATABASE_NAME=${DB_POSTGRESDB_DATABASE}
      - N8N_DATABASE_USER=${DB_POSTGRESDB_USER}
      - N8N_DATABASE_PASSWORD=${DB_POSTGRESDB_PASSWORD}
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - N8N_HOST=${N8N_HOST}
      - N8N_PORT=${N8N_PORT}
      - N8N_PROTOCOL=${N8N_PROTOCOL}
      - WEBHOOK_URL=${WEBHOOK_URL}
      - N8N_BASIC_AUTH_ACTIVE=${N8N_BASIC_AUTH_ACTIVE}
      - N8N_BASIC_AUTH_USER=${N8N_BASIC_AUTH_USER}
      - N8N_BASIC_AUTH_PASSWORD=${N8N_BASIC_AUTH_PASSWORD}
      - N8N_LOG_LEVEL=${N8N_LOG_LEVEL}
      - N8N_LOG_OUTPUT=${N8N_LOG_OUTPUT}
      - N8N_SECURE_COOKIE=${N8N_SECURE_COOKIE}
      - N8N_METRICS=true
    ports:
      - "127.0.0.1:5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
      - /opt/n8n-production/custom:/home/node/.n8n/custom
      - /opt/n8n-production/logs:/home/node/.n8n/logs
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "wget --no-verbose --tries=1 --spider http://localhost:5678/healthz || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - n8n-network

  nginx:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
      - ./logs/nginx:/var/log/nginx
    depends_on:
      - n8n
    networks:
      - n8n-network

volumes:
  postgres_data:
    driver: local
  n8n_data:
    driver: local

networks:
  n8n-network:
    driver: bridge
```

### 5. Install Accord Connect Node

**Create installation script:**
```bash
# scripts/install-nodes.sh
#!/bin/bash

echo "Installing Accord Connect node..."

# Create custom directory if it doesn't exist
mkdir -p /opt/n8n-production/custom

# Install the node package
cd /opt/n8n-production/custom
npm install n8n-nodes-accordconnect

# Verify installation
if [ -d "node_modules/n8n-nodes-accordconnect" ]; then
    echo "✅ Accord Connect node installed successfully"
else
    echo "❌ Installation failed"
    exit 1
fi
```

**Make executable and run:**
```bash
chmod +x scripts/install-nodes.sh
./scripts/install-nodes.sh
```

### 6. Start Services

```bash
# Start production stack
docker-compose -f docker-compose.prod.yml up -d

# Check status
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f n8n
```

## Security Configuration

### 1. Basic Authentication

**Enable in environment:**
```bash
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD="secure-password"
```

### 2. Advanced Authentication

**OAuth/LDAP Configuration:**
```bash
# LDAP Authentication
N8N_LDAP_ENABLED=true
N8N_LDAP_SERVER=ldaps://your-ldap-server.com
N8N_LDAP_PORT=636
N8N_LDAP_BINDING_DN="cn=admin,dc=company,dc=com"
N8N_LDAP_BINDING_PASSWORD="ldap-password"

# OAuth Configuration  
N8N_OAUTH_ENABLED=true
N8N_OAUTH_GOOGLE_CLIENT_ID="your-client-id"
N8N_OAUTH_GOOGLE_CLIENT_SECRET="your-client-secret"
```

### 3. Network Security

**Firewall Configuration:**
```bash
# UFW example
sudo ufw allow 22/tcp          # SSH
sudo ufw allow 80/tcp          # HTTP
sudo ufw allow 443/tcp         # HTTPS
sudo ufw --force enable

# Restrict database access
sudo ufw deny 5432/tcp
```

**Docker Network Isolation:**
```yaml
# In docker-compose.prod.yml
networks:
  n8n-network:
    driver: bridge
    internal: false    # Allow internet access
  db-network:
    driver: bridge  
    internal: true     # Database-only network
```

### 4. Secrets Management

**Use Docker Secrets:**
```yaml
# docker-compose.prod.yml
secrets:
  db_password:
    file: ./secrets/db_password.txt
  encryption_key:
    file: ./secrets/encryption_key.txt

services:
  n8n:
    secrets:
      - db_password
      - encryption_key
    environment:
      - N8N_DATABASE_PASSWORD_FILE=/run/secrets/db_password
      - N8N_ENCRYPTION_KEY_FILE=/run/secrets/encryption_key
```

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `N8N_ENCRYPTION_KEY` | 32-char encryption key | `a1b2c3...` |
| `DB_POSTGRESDB_PASSWORD` | Database password | `SecurePass123!` |
| `POSTGRES_PASSWORD` | Root DB password | `RootPass456!` |
| `N8N_HOST` | Your domain name | `n8n.company.com` |
| `WEBHOOK_URL` | Webhook base URL | `https://n8n.company.com` |

### Optional Security Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `N8N_BASIC_AUTH_ACTIVE` | false | Enable basic auth |
| `N8N_BASIC_AUTH_USER` | - | Basic auth username |
| `N8N_BASIC_AUTH_PASSWORD` | - | Basic auth password |
| `N8N_SECURE_COOKIE` | false | Use secure cookies |
| `N8N_COOKIE_SAME_SITE_POLICY` | lax | Cookie same-site policy |

### Performance Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `N8N_PAYLOAD_SIZE_MAX` | 16 | Max payload size (MB) |
| `N8N_METRICS` | false | Enable metrics endpoint |
| `EXECUTIONS_DATA_PRUNE` | true | Prune old execution data |
| `EXECUTIONS_DATA_MAX_AGE` | 168 | Max age in hours |

## SSL/TLS Setup

### 1. Let's Encrypt with Certbot

**Install Certbot:**
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

**Generate certificates:**
```bash
# Stop nginx temporarily
docker-compose -f docker-compose.prod.yml stop nginx

# Generate certificate
sudo certbot certonly --standalone \
  -d your-domain.com \
  --email admin@your-domain.com \
  --agree-tos \
  --no-eff-email

# Copy certificates
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./ssl/
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./ssl/
sudo chown $(id -u):$(id -g) ./ssl/*

# Restart nginx
docker-compose -f docker-compose.prod.yml start nginx
```

### 2. Nginx SSL Configuration

**Create `nginx.conf`:**
```nginx
events {
    worker_connections 1024;
}

http {
    upstream n8n {
        server n8n:5678;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

    server {
        listen 80;
        server_name your-domain.com;
        
        # Redirect to HTTPS
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name your-domain.com;

        # SSL Configuration
        ssl_certificate /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
        ssl_prefer_server_ciphers off;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        # Security Headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Frame-Options DENY always;
        add_header X-Content-Type-Options nosniff always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header Referrer-Policy strict-origin-when-cross-origin always;

        # Rate limiting
        limit_req zone=api burst=20 nodelay;

        # Proxy to n8n
        location / {
            proxy_pass http://n8n;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
            proxy_read_timeout 86400;
        }

        # Webhook endpoints - longer timeout
        location ~* ^/webhook/ {
            proxy_pass http://n8n;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_read_timeout 300;
            proxy_send_timeout 300;
        }
    }
}
```

### 3. Certificate Renewal

**Create renewal script:**
```bash
# scripts/renew-ssl.sh
#!/bin/bash

# Stop nginx
docker-compose -f docker-compose.prod.yml stop nginx

# Renew certificates
certbot renew --standalone

# Copy new certificates
cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./ssl/
cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./ssl/

# Restart nginx
docker-compose -f docker-compose.prod.yml start nginx

# Test configuration
docker-compose -f docker-compose.prod.yml exec nginx nginx -t
```

**Add to crontab:**
```bash
# Run monthly
0 0 1 * * /opt/n8n-production/scripts/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
```

## Monitoring & Logging

### 1. Application Monitoring

**Enable metrics:**
```bash
# In .env
N8N_METRICS=true
```

**Prometheus configuration:**
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'n8n'
    static_configs:
      - targets: ['localhost:5678']
    metrics_path: '/metrics'
```

### 2. Log Management

**Configure logging:**
```bash
# In .env
N8N_LOG_LEVEL=info
N8N_LOG_OUTPUT=console,file
```

**Log rotation:**
```bash
# /etc/logrotate.d/n8n
/opt/n8n-production/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    copytruncate
    postrotate
        docker-compose -f /opt/n8n-production/docker-compose.prod.yml restart n8n
    endscript
}
```

### 3. Health Checks

**Create monitoring script:**
```bash
#!/bin/bash
# scripts/health-check.sh

# Check n8n health
n8n_health=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5678/healthz)
if [ "$n8n_health" != "200" ]; then
    echo "❌ n8n health check failed: $n8n_health"
    exit 1
fi

# Check database
db_health=$(docker-compose -f docker-compose.prod.yml exec -T postgres pg_isready -U n8n)
if [[ $db_health != *"accepting connections"* ]]; then
    echo "❌ Database health check failed"
    exit 1
fi

echo "✅ All services healthy"
```

## Backup & Recovery

### 1. Database Backup

**Create backup script:**
```bash
#!/bin/bash
# scripts/backup-db.sh

BACKUP_DIR="/opt/n8n-production/backups"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="n8n_backup_$DATE.sql"

# Create backup directory
mkdir -p $BACKUP_DIR

# Dump database
docker-compose -f docker-compose.prod.yml exec -T postgres \
    pg_dump -U n8n -h localhost n8n > "$BACKUP_DIR/$BACKUP_FILE"

# Compress backup
gzip "$BACKUP_DIR/$BACKUP_FILE"

# Clean old backups (keep 30 days)
find $BACKUP_DIR -name "*.gz" -mtime +30 -delete

echo "✅ Backup completed: $BACKUP_FILE.gz"
```

### 2. Full System Backup

```bash
#!/bin/bash
# scripts/backup-full.sh

BACKUP_DIR="/opt/backups/n8n"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup volumes
docker run --rm \
    -v n8n-production_n8n_data:/data \
    -v $BACKUP_DIR:/backup \
    alpine tar czf /backup/n8n_data_$DATE.tar.gz /data

# Backup configuration
tar czf "$BACKUP_DIR/config_$DATE.tar.gz" \
    .env docker-compose.prod.yml nginx.conf ssl/

# Database backup
./scripts/backup-db.sh
```

### 3. Recovery Procedures

**Database Recovery:**
```bash
# Stop n8n
docker-compose -f docker-compose.prod.yml stop n8n

# Restore database
gunzip -c backups/n8n_backup_YYYYMMDD_HHMMSS.sql.gz | \
    docker-compose -f docker-compose.prod.yml exec -T postgres \
    psql -U n8n -d n8n

# Restart services
docker-compose -f docker-compose.prod.yml start n8n
```

**Full Recovery:**
```bash
# Extract data
cd /opt/n8n-production
tar xzf /opt/backups/n8n/n8n_data_YYYYMMDD_HHMMSS.tar.gz

# Extract configuration
tar xzf /opt/backups/n8n/config_YYYYMMDD_HHMMSS.tar.gz

# Restart stack
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```

## Maintenance

### 1. Updates

**Update n8n:**
```bash
# Pull latest image
docker-compose -f docker-compose.prod.yml pull n8n

# Stop and restart
docker-compose -f docker-compose.prod.yml stop n8n
docker-compose -f docker-compose.prod.yml up -d n8n
```

**Update Accord Connect node:**
```bash
cd /opt/n8n-production/custom
npm update n8n-nodes-accordconnect

# Restart n8n
docker-compose -f docker-compose.prod.yml restart n8n
```

### 2. Performance Optimization

**Database maintenance:**
```sql
-- Connect to database
\c n8n

-- Vacuum and analyze
VACUUM ANALYZE;

-- Check table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

**Clean old executions:**
```bash
# Configure automatic cleanup
N8N_EXECUTIONS_DATA_PRUNE=true
N8N_EXECUTIONS_DATA_MAX_AGE=168  # 7 days
```

### 3. Security Updates

**Regular security tasks:**
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker
sudo apt install docker-ce docker-compose-plugin

# Rotate passwords (quarterly)
./scripts/rotate-passwords.sh

# Review access logs
tail -f logs/nginx/access.log | grep -E "(40[0-9]|50[0-9])"
```

## Troubleshooting

### Common Production Issues

**Service Won't Start:**
```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs n8n

# Check resource usage
docker stats

# Check disk space
df -h
```

**Database Connection Issues:**
```bash
# Test database connection
docker-compose -f docker-compose.prod.yml exec postgres \
    psql -U n8n -d n8n -c "SELECT version();"

# Check database logs
docker-compose -f docker-compose.prod.yml logs postgres
```

**SSL Certificate Issues:**
```bash
# Test SSL configuration
openssl s_client -connect your-domain.com:443 -servername your-domain.com

# Check certificate expiry
openssl x509 -in ssl/fullchain.pem -text -noout | grep "Not After"

# Nginx configuration test
docker-compose -f docker-compose.prod.yml exec nginx nginx -t
```

**Performance Issues:**
```bash
# Check container resources
docker stats n8n-production_n8n_1

# Monitor database performance
docker-compose -f docker-compose.prod.yml exec postgres \
    psql -U n8n -d n8n -c "
        SELECT query, calls, total_time, rows, 100.0 * shared_blks_hit /
               nullif(shared_blks_hit + shared_blks_read, 0) AS hit_percent
        FROM pg_stat_statements
        ORDER BY total_time DESC LIMIT 10;"
```

### Support Resources

1. **Logs**: `/opt/n8n-production/logs/`
2. **Health checks**: `./scripts/health-check.sh`
3. **Documentation**: [Troubleshooting Guide](./TROUBLESHOOTING.md)
4. **Community**: [n8n Community Forum](https://community.n8n.io/)

---

**Next Steps:**
- [User Guide](./USER_GUIDE.md) - End-user documentation