export type DocStatus = 'draft' | 'published';
export type GeneratedBy = 'human' | 'ai' | 'perplexity';

export type DocMock = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    status: DocStatus;
    lastUpdated: string; // ISO string
    generatedBy: GeneratedBy;
    content: string; // markdown
};

export const DOCS: DocMock[] = [
    {
        id: 'doc_001',
        title: 'Getting Started',
        slug: 'getting-started',
        summary: 'Quick setup steps to access MAGI, create your first session, and understand the dashboard.',
        status: 'published',
        lastUpdated: '2026-02-01T10:20:00.000Z',
        generatedBy: 'human',
        content: `# Getting Started

Welcome to **MAGI**. This guide helps you go from *zero* to *working* in a few minutes.

---

## Step 1 — Sign in
Use email/password or Google login.

> Tip: If you’re using Google auth, your avatar and name are pulled automatically.

## Step 2 — Create your first token
Go to: **Dashboard → Tokens → Generate**

\`\`\`token
TKvEpJAp7WDzkXYvjI1EGPMGGo0uUO2pl9ohM5UTsM
\`\`\`

## Step 3 — Test your token
\`\`\`bash
curl -H "Authorization: Bearer <TOKEN>" \\
  https://api.magi.dev/v1/me
\`\`\`

## What you’ll see in the dashboard
| Section | What it does |
| --- | --- |
| Profile | Update name + verify email |
| Tokens | Generate tokens for sessions/services |
| Support | Talk to the MAGI team |
| Settings | Preferences + account options |

---

Need help? Go to **Support** and send a message.
`,
    },

    {
        id: 'doc_002',
        title: 'Auth Tokens: Generate & Rotate',
        slug: 'auth-tokens-generate-rotate',
        summary: 'How tokens work, how to rotate them safely, and common mistakes to avoid.',
        status: 'draft',
        lastUpdated: '2026-02-01T12:05:00.000Z',
        generatedBy: 'ai',
        content: `# Auth Tokens: Generate & Rotate

Tokens authenticate your MAGI sessions and services. Treat them like **passwords**.

---

## Generate a token
Go to **Dashboard → Tokens** and click **Generate**.

\`\`\`token
TKn9KQp2Xv9t0ZcHqJm0WcBzS9wq8uT2pL3mXnY7aB
\`\`\`

## Recommended rotation schedule
- **Personal projects:** every 30–60 days
- **Teams / production:** every 14–30 days
- **After exposure (leak):** rotate immediately

## Using a token in code
\`\`\`ts
const res = await fetch('/api/magi/session', {
  headers: {
    Authorization: \`Bearer \${process.env.MAGI_TOKEN}\`,
  },
});
\`\`\`

## Common mistakes
- Putting tokens in the client bundle (Next.js browser code) ❌
- Logging tokens in server logs ❌
- Sending tokens in URLs ❌

> Best practice: store tokens in server env vars only.

---

## Troubleshooting
If you get **401 Unauthorized**, check:
1. Token is correct
2. Token is not expired
3. You’re using \`Authorization: Bearer <token>\`
`,
    },

    {
        id: 'doc_003',
        title: 'Docs Editor Workflow (Admin)',
        slug: 'docs-editor-workflow-admin',
        summary: 'Admin flow for creating docs, saving drafts, previewing, and publishing safely.',
        status: 'published',
        lastUpdated: '2026-02-01T09:10:00.000Z',
        generatedBy: 'perplexity',
        content: `# Docs Editor Workflow (Admin)

This page is your control center for MAGI documentation.

---

## Create a new doc
Click **New Doc** then fill:

- **Title** (human readable)
- **Slug** (URL safe)
- **Summary** (shows in docs list + SEO)
- **Status** (Draft / Published)

### What is a slug?
A **slug** is the URL path part.  
Example:

- Title: \`How to Generate Tokens\`
- Slug: \`how-to-generate-tokens\`
- Public URL: \`/docs/how-to-generate-tokens\`

---

## Draft vs Published
- **Draft:** visible only to admins
- **Published:** visible publicly (or to members if you later gate docs)

> Microcopy: Documentation changes go live immediately once published.

---

## Markdown editing tips
### Headings
\`\`\`md
# Title
## Section
### Sub-section
\`\`\`

### Code blocks
\`\`\`md
\`\`\`bash
yarn prisma studio
\`\`\`
\`\`\`

### Tokens block (MAGI style)
\`\`\`md
\`\`\`token
YOUR_TOKEN_HERE
\`\`\`
\`\`\`

---

## Before publishing checklist
- Title looks clean
- Slug matches title
- Summary is short + clear
- Preview reads correctly
- No sensitive data in examples
`,
    },

    {
        id: 'doc_004',
        title: 'Profile: Update Name & Verify Email',
        slug: 'profile-update-name-verify-email',
        summary: 'How to update your profile name and securely change email with OTP verification.',
        status: 'draft',
        lastUpdated: '2026-02-01T13:40:00.000Z',
        generatedBy: 'human',
        content: `# Profile: Update Name & Verify Email

Your profile controls your identity and access.

---

## Update your full name
Go to **Dashboard → Profile → Account Details**  
Edit your name and click **Save**.

> Name must be at least 2 characters.

---

## Change email (OTP protected)
When you change your email, MAGI sends a **6-digit code** to the new email.

### Flow
1. Enter new email
2. Click **Save**
3. OTP modal appears
4. Enter the 6-digit code
5. Email updates after verification

---

## Why OTP matters
Email affects:
- Account recovery
- Login security
- Billing receipts

So we verify it first. No shortcuts.

---

## Troubleshooting
- Didn’t receive the code? Click **Resend**
- Wrong email? Close OTP modal and update again
`,
    },

    {
        id: 'doc_005',
        title: 'API Quick Reference',
        slug: 'api-quick-reference',
        summary: 'Copy-paste examples for common MAGI API calls, headers, and response shapes.',
        status: 'published',
        lastUpdated: '2026-02-01T08:30:00.000Z',
        generatedBy: 'ai',
        content: `# API Quick Reference

This doc is intentionally copy-paste friendly.

---

## Required header
\`\`\`http
Authorization: Bearer <TOKEN>
\`\`\`

\`\`\`token
TKX3sZpQ2mT8vA1kYpL9cZ0nWq7rT5uJ3hP8sN1xQd
\`\`\`

---

## Get current user
\`\`\`bash
curl -H "Authorization: Bearer <TOKEN>" \\
  https://api.magi.dev/v1/me
\`\`\`

### Example response
\`\`\`json
{
  "id": "usr_123",
  "email": "contact@magi.dev",
  "role": "member",
  "plan": "trial"
}
\`\`\`

---

## Create a doc (admin)
\`\`\`bash
curl -X POST https://api.magi.dev/v1/docs \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to Generate Tokens",
    "slug": "how-to-generate-tokens",
    "summary": "Guide on creating and managing tokens",
    "status": "draft",
    "content": "# How to Generate Tokens\\n\\n..."
  }'
\`\`\`

---

## Notes
- Never send tokens from browser code.
- Keep examples clean (no real secrets).
`,
    },
];