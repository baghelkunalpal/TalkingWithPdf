<a name="readme-top"></a>

# Quill - The SaaS for Students

![Quill - The SaaS for Students](/.github/images/img_main.png "Quill - The SaaS for Students")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/quill?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/quill?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/quill?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/quill?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/issues "GitHub issues")
[![GitHub pull reUpload PDF files](https://flat.badgen.net/github/prs/sanidhyy/quill?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/quill/pulls "GitHub pull reUpload PDF files")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-quill.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
quill/
  |- prisma/
    |- schema.prisma
  |- public/
  |- src/
    |-- app/
        |--- _trpc/
        |--- api/
        |--- auth-callback/
        |--- dashboard/
        |--- pricing/
        |--- favicon.ico
        |--- globals.css
        |--- layout.tsx
        |--- page.tsx
    |-- components/
        |--- chat/
        |--- ui/
        |--- billing-form.tsx
        |--- dashboard.tsx
        |--- delete-user-modal.tsx
        |--- icons.tsx
        |--- max-width-wrapper.tsx
        |--- mobile-nav.tsx
        |--- navbar.tsx
        |--- pdf-fullscreen.tsx
        |--- pdf-renderer.tsx
        |--- providers.tsx
        |--- upgrade-button.tsx
        |--- upload-button.tsx
        |--- user-account-nav.tsx
    |-- config/
        |--- infinite-query.ts
        |--- links.ts
        |--- message.ts
        |--- stripe.ts
    |-- db/
        |--- index.ts
    |-- lib/
        |--- validators/
        |--- openai.ts
        |--- pinecone.ts
        |--- stripe.ts
        |--- uploadthing.ts
        |--- utils.ts
    |-- trpc/
        |--- index.ts
        |--- trpc.ts
    |-- types/
        |--- message.ts
    |-- middleware.ts
  |- .env
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# kinde keys and urls
KINDE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXX
KINDE_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
KINDE_ISSUER_URL=https://example.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<hostname>:<port>/quill?sslmode=require"

# uploadthing api key and app id
UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=xxxxxxxxxxx

# app base url
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# pinecone api key
PINECONE_API_KEY=xxxxxxxxxx-xxxxx-xxxx-xxxxxx-xxxxxxxxxxx

# openai api key
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# stripe secret key, price id and webhook secret
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_PRICE_ID=price_XXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


```

### 5. Next.js Telemetry

- **Environment Variable**: `NEXT_TELEMETRY_DISABLED=1`
- **Instructions**:
  - Open your Next.js project.
  - Locate the `.env` file.
  - Add or update the line `NEXT_TELEMETRY_DISABLED=1` to disable Next.js telemetry.

### 6. Kinde

- **Environment Variables**:
  - `KINDE_CLIENT_ID`
  - `KINDE_CLIENT_SECRET`
  - `KINDE_ISSUER_URL`
  - `KINDE_SITE_URL`
  - `KINDE_POST_LOGOUT_REDIRECT_URL`
  - `KINDE_POST_LOGIN_REDIRECT_URL`
- **Instructions**:
  - Visit [Kinde's website](https://example.kinde.com) and sign in to your account.
  - Navigate to your account settings or developer dashboard to find the API credentials.
  - Retrieve the following:
    - `KINDE_CLIENT_ID`
    - `KINDE_CLIENT_SECRET`
    - `KINDE_ISSUER_URL`
  - For redirect URLs:
    - `KINDE_SITE_URL`
    - `KINDE_POST_LOGOUT_REDIRECT_URL`
    - `KINDE_POST_LOGIN_REDIRECT_URL`

### 7. Neon Database URI

- **Environment Variable**: `DATABASE_URL="postgresql://<user>:<password>@<hostname>:<port>/quill?sslmode=require"`
- **Instructions**:
  - Access your PostgreSQL database management interface.
  - Locate the database connection details.
  - Construct the URI following the provided template and replace the placeholders with your actual database credentials.

### 8. Uploadthing

- **Environment Variables**:
  - `UPLOADTHING_SECRET`
  - `UPLOADTHING_APP_ID`
- **Instructions**:
  - Visit the Uploadthing developer dashboard or website.
  - Log in to your account and navigate to the API or application settings.
  - Retrieve `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID`.

### 9. App Base URL

- **Environment Variable**: `NEXT_PUBLIC_BASE_URL=http://localhost:3000`
- **Instructions**:
  - Simply set `NEXT_PUBLIC_BASE_URL=http://localhost:3000` in your `.env` file.

### 10. Pinecone API Key

- **Environment Variable**: `PINECONE_API_KEY=xxxxxxxxxx-xxxxx-xxxx-xxxxxx-xxxxxxxxxxx`
- **Instructions**:
  - Visit Pinecone's official website and log in to your account.
  - Navigate to the API or developer section to find your API key.
  - Retrieve `PINECONE_API_KEY`.

### 11. OpenAI API Key

- **Environment Variable**: `OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Instructions**:
  - Log in to your OpenAI account on the official website.
  - Navigate to the API or developer dashboard.
  - Retrieve your API key.

### 12. Stripe

- **Environment Variables**:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
  - `STRIPE_WEBHOOK_SECRET`
- **Instructions**:
  - Log in to your Stripe account.
  - Navigate to the API or developer section.
  - Retrieve the following:
    - `STRIPE_SECRET_KEY`
    - `STRIPE_PRICE_ID`
    - `STRIPE_WEBHOOK_SECRET`


