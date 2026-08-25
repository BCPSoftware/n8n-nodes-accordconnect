# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2026-08-25

### Added

- **Allergen** resource, with Get and List operations. Allergens can be filtered by code, name, description and qualifier. Like every resource, availability depends on your Accord licence.
- A `CHANGELOG.md`, now included in the package, so you can see what changed between versions without reading commits.

### Changed

- Regenerated from Accord Connect spec v430.002.0007.

## [1.2.0] - 2026-08-24

### Changed

- Advanced Filter operators are stored as word tokens (`equal`, `gt`, `gte`, `lt`, `lte`, `notEqual`) instead of the bare symbols. n8n will not hold `=` as an option value, so selecting **Equals (=)** cleared the dropdown and showed a validation warning. Queries are unchanged, and filters saved with the old symbol values keep working.

## [1.1.1] - 2026-08-24

### Fixed

- An unlicensed Accord API module now reports itself as a licensing problem rather than n8n's generic "Your request is invalid or could not be processed by the service". The response body moved when the node adopted `httpRequestWithAuthentication`, so the detection added in 1.0.0 had stopped matching.

## [1.1.0] - 2026-08-24

### Added

- `usableAsTool`, so the node can be used by AI Agent nodes.
- A credential test on **Accord Connect API**, so credentials can be verified from the credential editor without running a workflow.

### Changed

- Requests authenticate through the credential rather than a hand-built `Basic` header, using `httpRequestWithAuthentication`.
- Node inputs and outputs use `NodeConnectionTypes.Main`.

### Removed

- The **Accord Secret API** credential. Nothing referenced it — the webhook trigger reads its secret from a node parameter — so it could never have been used.
- The `preinstall` lifecycle script, which is not permitted in community node packages.

## [1.0.0] - 2026-08-24

### Fixed

- **Every input item is now processed.** The node read all of its parameters at input index 0 and issued a single request, silently discarding the rest. A node fed 10 items made 1 call.
- Unlicensed Accord API modules are reported as a licensing problem, naming the resource, instead of a validation error.
- The `Base URL` credential is documented with an example, and a trailing slash no longer produces a doubled path separator.

### Added

- `pairedItem` on output, so n8n can trace each result back to the input item that produced it.
- `continueOnFail` support: a failing item records an error and the run continues.

### Changed

- **Breaking:** list operations issue one request per input item rather than one per execution. This is correct n8n behaviour, but a workflow feeding many items into a list operation will now make many calls.

## [0.1.1] - 2026-08-24

### Fixed

- `repository.url` uses the canonical `git+https://` form, removing a warning on every publish.

## [0.1.0] - 2026-08-21

First public release.

### Added

- **Accord Connect** node covering 35 resources with create, read, update and list operations, generated from the Accord Connect OpenAPI specification.
- **Accord Webhook (Verify)** trigger, which verifies the `X-Signature-256` HMAC on incoming Accord webhooks.
- PDF download for invoices and statements, as binary data or base64.
- `includeLines` for purchase orders, claims, promotions and mix-and-match schemes, fetching line items in a single call.
- Advanced, common and raw filter modes, field selection, and pagination.

[unreleased]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v0.1.1...v1.0.0
[0.1.1]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/BCPSoftware/n8n-nodes-accordconnect/releases/tag/v0.1.0
