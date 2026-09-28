import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>) => ({
    redirectUrl: (search.redirectUrl as string) || '/dashboard',
  }),
  beforeLoad: ({ search }) => {
    // MOCK PAYLOAD FOR TESTING:
    // /login?redirectUrl=https://malicious-phishing-site.com
    
    // The inspector should flag this if redirectUrl is not validated against an allowlist
    if (search.redirectUrl) {
      throw redirect({
        href: search.redirectUrl, 
      })
    }
  },
})
