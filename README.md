# AutoReach

An innovative email marketing and outreach automation platform built with Next.js that streamlines your outreach campaigns and makes connecting with prospects easier than ever before.

## Features

- **Email Campaign Management**: Create, schedule, and manage automated email outreach campaigns
- **Contact Management**: Organize and segment your contacts for targeted outreach
- **Analytics Dashboard**: Track email performance, open rates, and engagement metrics
- **Template Builder**: Design beautiful, responsive email templates
- **Automation Workflows**: Set up automated follow-up sequences
- **Integration Ready**: Connect with popular CRM and marketing tools

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kk120306/AutoReach.git
cd AutoReach
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your configuration:
```
DATABASE_URL="your-database-connection-string"
NEXT_PUBLIC_API_URL="your-api-url"
# Add other required environment variables
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
AutoReach/
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   ├── lib/         # Utility functions and configurations
│   └── styles/      # Global styles
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Usage

1. **Create a Campaign**: Navigate to the campaigns section and create a new email outreach campaign
2. **Add Contacts**: Import or manually add contacts to your campaign
3. **Design Your Email**: Use the template builder to create your email
4. **Schedule & Send**: Set up your sending schedule or send immediately
5. **Track Performance**: Monitor your campaign analytics in real-time

## Deployment

The easiest way to deploy your AutoReach application is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy!
