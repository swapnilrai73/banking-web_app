# Security Policy

## 🚨 Security Incident Report

### Incident: Exposed Plaid Access Tokens (Resolved)

**Date:** 2025-11-14
**Severity:** HIGH
**Status:** MITIGATED

### What Happened

Three Plaid sandbox access tokens were hardcoded in `constants/index.ts` and committed to the git repository. The tokens followed the format `access-sandbox-[UUID]` and have been removed from the codebase.

These tokens originated from the upstream repository (adrianhajdin/banking) and were carried over during the fork.

**Note:** Actual token values have been redacted from this security report to prevent re-exposure.

### Remediation Steps Taken

✅ **Immediate Actions:**
1. Removed all hardcoded tokens from source code
2. Migrated to environment variable configuration
3. Updated `.gitignore` to properly exclude `.env` files
4. Updated `.env.example` with proper token placeholders
5. Committed security fixes to repository

### Required User Actions

**CRITICAL - You must complete these steps immediately:**

1. **Rotate All Plaid Tokens**
   - Go to: https://dashboard.plaid.com/team/keys
   - Revoke the three exposed sandbox tokens listed above
   - Generate new sandbox access tokens
   - Update your local `.env` file with new tokens

2. **Verify No Production Tokens Were Exposed**
   - Check if any production Plaid credentials were ever used
   - If yes, rotate ALL production credentials immediately

3. **Review Git History**
   - These tokens are in your git history
   - Consider using `git filter-branch` or BFG Repo-Cleaner to purge them
   - Force push if necessary (coordinate with team first)

4. **Set Up Local Environment**
   ```bash
   # Copy the example file
   cp .env.example .env

   # Add your NEW tokens to .env (NEVER commit this file!)
   nano .env
   ```

5. **Enable Secret Scanning**
   - Go to: Settings > Security > Secret scanning
   - Enable for this repository
   - Review any additional findings

### Prevention

**Going Forward:**
- ✅ Never commit `.env` files (now in `.gitignore`)
- ✅ Use environment variables for ALL secrets
- ✅ Review code before commits using `git diff`
- ✅ Enable GitHub secret scanning and push protection
- ✅ Use pre-commit hooks to scan for secrets

### Compliance Impact

**Plaid API Terms:**
- Access tokens must be stored securely and never committed to version control
- Exposed tokens should be revoked immediately
- This incident violates Plaid's security best practices

**Potential Risks:**
- Unauthorized access to sandbox banking data
- Possible account suspension if production tokens were exposed
- GDPR/PCI-DSS compliance violations if customer data accessed

## Reporting Security Issues

If you discover a security vulnerability, please email:
- **Email:** [Your contact email]
- **Response Time:** Within 24 hours

Please do NOT open public GitHub issues for security vulnerabilities.

## Security Best Practices

### For Developers

1. **Environment Variables**
   - Use `.env` files locally (gitignored)
   - Use platform environment variables in production (Vercel, Railway, etc.)
   - Never log or expose secrets in error messages

2. **API Keys Rotation**
   - Rotate all API keys quarterly
   - Rotate immediately after:
     - Team member departure
     - Suspected compromise
     - Any security incident

3. **Code Review**
   - Always review diffs before committing
   - Use tools like `git-secrets` or `trufflehog`
   - Enable pre-commit hooks

4. **Dependencies**
   - Regularly run `npm audit`
   - Keep dependencies updated
   - Review dependency security advisories

### For Production Deployments

1. **Vercel/Railway Environment Variables**
   ```bash
   # Set via dashboard or CLI
   vercel env add PLAID_SECRET production
   ```

2. **Secrets Management**
   - Use platform secret managers
   - Enable secret scanning
   - Use least-privilege access

3. **Monitoring**
   - Enable Sentry error tracking
   - Monitor API usage for anomalies
   - Set up alerts for failed auth attempts

## Security Checklist

Before deploying to production:

- [ ] All secrets moved to environment variables
- [ ] `.env` file is gitignored
- [ ] No secrets in git history
- [ ] Secret scanning enabled
- [ ] Sentry error tracking configured
- [ ] API rate limiting enabled
- [ ] HTTPS enforced
- [ ] Content Security Policy configured
- [ ] Dependency vulnerabilities resolved
- [ ] Authentication endpoints secured
- [ ] Input validation implemented
- [ ] SQL injection protection enabled
- [ ] XSS protection enabled
- [ ] CSRF protection enabled

## Affected Services

### Plaid
- **Dashboard:** https://dashboard.plaid.com
- **Documentation:** https://plaid.com/docs/
- **Support:** support@plaid.com

### Dwolla
- **Dashboard:** https://dashboard.dwolla.com
- **Documentation:** https://developers.dwolla.com

### Appwrite
- **Console:** https://cloud.appwrite.io
- **Documentation:** https://appwrite.io/docs

### Anthropic (Claude AI)
- **Console:** https://console.anthropic.com
- **Documentation:** https://docs.anthropic.com

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [Plaid Security Best Practices](https://plaid.com/docs/api/security/)
- [PCI DSS Compliance](https://www.pcisecuritystandards.org/)

---

**Last Updated:** 2025-11-14
**Next Review:** 2026-02-14 (Quarterly)
