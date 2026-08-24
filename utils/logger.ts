import { Logger } from 'n8n-workflow';

/**
 * Simple logger wrapper that sanitizes sensitive data before logging
 */
export class AccordLogger {
    private logger: Logger;
    private context: string;

    constructor(logger: Logger, context: string) {
        this.logger = logger;
        this.context = context;
    }

    debug(message: string, data?: any) {
        this.logger.debug(`[${this.context}] ${message}`, this.sanitizeData(data));
    }

    info(message: string, data?: any) {
        this.logger.info(`[${this.context}] ${message}`, this.sanitizeData(data));
    }

    warn(message: string, data?: any) {
        this.logger.warn(`[${this.context}] ${message}`, this.sanitizeData(data));
    }

    error(message: string, error?: Error, data?: any) {
        const sanitizedData = this.sanitizeData(data);
        const meta: any = { ...sanitizedData };
        if (error) {
            meta.error = error.message;
            meta.stack = error.stack;
        }
        this.logger.error(`[${this.context}] ${message}`, meta);
    }

    /**
     * Sanitize sensitive data from logs
     */
    private sanitizeData(data: any): any {
        if (!data) return data;
        
        // Handle primitive types
        if (typeof data !== 'object') return data;
        
        // Handle arrays
        if (Array.isArray(data)) {
            return data.map(item => this.sanitizeData(item));
        }
        
        // Handle objects - create shallow copy and sanitize
        const sanitized = { ...data };
        
        // Sanitize object properties
        for (const [key, value] of Object.entries(sanitized)) {
            if (this.isSensitiveField(key)) {
                sanitized[key] = '[REDACTED]';
            } else if (typeof value === 'object' && value !== null) {
                sanitized[key] = this.sanitizeData(value);
            }
        }
        
        // Sanitize common sensitive headers
        const sensitiveHeaders = [
            'authorization', 'cookie', 'x-api-key', 'x-auth-token'
        ];
        
        for (const header of sensitiveHeaders) {
            if (sanitized[header]) {
                sanitized[header] = '[REDACTED]';
            }
            // Also check lowercase versions
            if (sanitized[header.toLowerCase()]) {
                sanitized[header.toLowerCase()] = '[REDACTED]';
            }
        }
        
        return sanitized;
    }

    /**
     * Check if field contains sensitive data
     */
    private isSensitiveField(fieldName: string): boolean {
        const sensitiveFields = [
            'password', 'token', 'secret', 'key', 'authorization',
            'auth', 'credential', 'pass', 'pwd', 'apikey',
            'sessionid', 'jwt', 'bearer'
        ];
        
        return sensitiveFields.some(field => 
            fieldName.toLowerCase().includes(field)
        );
    }
}

/**
 * Factory function to create logger instances
 */
export function createLogger(logger: Logger, context: string): AccordLogger {
    return new AccordLogger(logger, context);
}