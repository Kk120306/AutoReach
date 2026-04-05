# AutoReach

An AI-driven social media automation platform designed to streamline Instagram engagement. Built with a modern serverless architecture on Next.js, AutoReach seamlessly processes Instagram webhooks to trigger intelligent, context-aware direct messages and comment replies powered by OpenAI.

---

## Core Capabilities

- **Intelligent Keyword Matching:** Real-time webhook architecture intercepts Instagram comments and direct messages to selectively trigger automated workflows based on target phrases.
- **Context-Aware AI Responses:** Integrates with OpenAI's GPT-4o models to parse conversation histories and generate highly contextualized, natural language replies.
- **Idempotent Webhook Processing:** Robust backend routing guarantees reliable message delivery and state synchronization across Meta's Graph API.
- **Secure Authentication & Billing:** Implements enterprise-grade identity management using Clerk, coupled with a frictionless subscription engine powered by Stripe.
- **Type-Safe Data Layer:** Leverages Prisma ORM paired with a serverless Neon PostgreSQL database to ensure rigid data integrity and high availability.

---

## Technical Stack

- **Framework:** Next.js 15 (App Router, Server Actions)
- **Language:** TypeScript (Strict Mode)
- **Database:** PostgreSQL (Neon Serverless) / Prisma ORM
- **Authentication:** Clerk
- **Payments:** Stripe
- **AI/LLM:** OpenAI API (gpt-4o)
- **Styling:** Tailwind CSS / Radix UI Primitives
- **Deployment:** Vercel (Edge Network / CI/CD pipeline integrated)

---

## System Architecture

```text
AutoReach/
├── prisma/               # Schema definitions and database migration state
├── public/               # Static assets and screenshot repository
├── src/
│   ├── actions/          # Server Actions defining core business logic
│   ├── app/              # Next.js App Router (Protected & Public boundaries)
│   │   └── api/          # Stateless route handlers (Webhook ingestion points)
│   ├── components/       # Reusable, accessible UI blocks
│   └── lib/              # SDK initializations (OpenAI, Prisma, Stripe)
├── .github/workflows/    # CI/CD pipelines enforcing static analysis tests
└── .env.example          # Security schema documentation
```

---

## Local Development Initialization

### 1. Repository Setup

Clone the repository and install dependencies natively via `pnpm`:

```bash
git clone https://github.com/Kk120306/AutoReach.git
cd AutoReach
pnpm install --frozen-lockfile
```

### 2. Environment Configuration

Copy the reference schema and populate it with your localized API keys:

```bash
cp .env.example .env
```

Ensure the following critical configurations are provided:
- `DATABASE_URL` (PostgreSQL connection string)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` & `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`
- `INSTAGRAM_CLIENT_ID` & `INSTAGRAM_CLIENT_SECRET`

### 3. Database Hydration

Initialize the Prisma schema and synchronize the client bindings:

```bash
pnpm prisma generate
pnpm prisma db push
```

### 4. Bootstrapping the Development Server

Start the local build environment:

```bash
pnpm dev
```

Navigate to `http://localhost:3000` to access the application.

---

## Ensuring Build Quality

The repository strictly enforces static analysis via GitHub actions. You can independently verify pipeline readiness prior to commit:

```bash
pnpm type-check
pnpm lint
pnpm build
```

---

