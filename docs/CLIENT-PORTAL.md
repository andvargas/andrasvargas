# Future Naplo client portal

Required follow-up, deferred from the first homepage build.

- Clients should log in and see what Andras is working on for their company, using the existing Naplo functionality.
- Current client-facing site: https://andras.webtechsupport.co.uk.
- Existing backend source: /Users/andras/Sites/api.andrasvargas.
- Current hosted API: https://api.webtechsupport.co.uk. The local folder name does not indicate a new live API hostname.
- The user is unsure whether the existing feature still works. No authenticated production tests or backend changes were made for this homepage.

## Findings from local code

- index.js mounts /activities and /auth.
- GET /activities/:companyId uses authClient middleware. It verifies a Bearer JWT, requires type=client and enforces companyId equality.
- activities.js reads naplo.timelogs, filtering activityType='Freelance Paid Job' and customer=companyId. It returns timelogs and docCount.
- /auth routes include HubSpot and magic-link flows. Trace the actual current frontend login flow before reusing it; route presence is not confirmation it works.
- Current CORS allowlist includes andras.webtechsupport.co.uk and localhost:3000/3001. The new production domain is not yet included.

## Integration work

1. Review the current frontend login and magic-link flow, token lifecycle and logout behaviour. Verify with an authorised test account and test data.
2. Confirm that recorded activities represent the status the client expects to see; do not promise live activity tracking without verifying it.
3. Add an isolated /client area to this Next.js app, with authenticated, uncached data and no secrets in browser bundles. Keep marketing pages independent of API availability.
4. Test missing, expired and invalid sessions, cross-company access rejection, empty activity lists and backend outages.
5. Review cookie/token handling, production origins and login callbacks with the backend. Preserve the existing client site until the replacement is verified.
6. Add the public client-login link when the flow works. Do not use a dummy login or fabricated activity data.

NEXT_PUBLIC_API_BASE_URL in .env.example records the current API address for later integration. It is not used by the homepage yet.
