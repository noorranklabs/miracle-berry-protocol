# 🍇 Miracle Berry AEO Protocol

> **A transparent experiment in entity-first optimization for answer engines**  
> **Status:** Day 1 • Domain launched January 20, 2026

Built by [NoorRank](https://noorrank.com) as an open research project demonstrating Answer Engine Optimization (AEO) methodologies.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📚 What Is This?

The Miracle Berry Protocol is a structured methodology for optimizing entity visibility in Large Language Models and answer engines like Perplexity, ChatGPT, and Google SGE.

Unlike traditional SEO that targets keyword rankings, AEO focuses on:
- Entity recognition and disambiguation
- Knowledge graph integration through structured data
- Semantic relationship mapping between entities
- Authority signal construction for AI citation

## 🎯 Live Demo

**Website:** https://www.noorranklabs.com

**Pages:**
- **Homepage:** Research overview and methodology
- **Documentation:** Technical implementation guide
- **Progress:** Live 21-day experiment tracking
- **Methodology:** Deep dive into the AEO framework

## 🏗️ Architecture

### Schema Factory Pattern

All structured data is generated using modular factory functions:

```typescript
// lib/schemas/organization.ts
export const NOORRANK_ORG = generateOrganizationSchema({
  name: "NoorRank",
  url: "https://noorrank.com",
  logoUrl: "https://noorrank.com/logo.png",
  sameAs: [
    "https://github.com/noorranklabs",
    "https://www.linkedin.com/company/noorrank/"
  ]
});
```

### Key Features

- **Entity-First Design:** Persistent `@id` references across all pages
- **Schema Registry:** Centralized management of structured data
- **Live Metrics API:** Real-time experiment tracking via `/api/metrics`
- **Dynamic Dates:** Automatic timeline generation for 21-day experiment
- **Security Headers:** CSP, X-Frame-Options, and XSS protection
- **AI Crawler Optimization:** robots.txt configured for GPTBot, Claude, Perplexity

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/noorranklabs/miracle-berry-protocol.git
cd miracle-berry-protocol

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Global metadata + Organization schema
│   ├── page.tsx                   # Homepage with ResearchProject schema
│   ├── documentation/page.tsx     # TechArticle + HowTo schemas
│   ├── progress/page.tsx          # Dataset schema + live metrics
│   ├── methodology/page.tsx       # Methodology explanation
│   └── api/metrics/route.ts       # Metrics API (GET/POST/PATCH)
├── components/
│   └── SchemaScript.tsx           # JSON-LD injector with validation
├── lib/
│   ├── schemas/
│   │   ├── organization.ts        # Organization schema factory
│   │   ├── researchProject.ts     # ResearchProject schema factory
│   │   ├── techArticle.ts         # TechArticle schema factory
│   │   ├── howTo.ts               # HowTo schema factory
│   │   └── registry.ts            # Centralized schema registry
│   └── utils/
│       └── experimentDates.ts     # Dynamic date handling
└── data/
    └── metrics.json               # Experiment tracking data
```

## 🧪 Methodology

### Three Pillars of AEO

1. **Entity Definition**
   - Clear, machine-readable entity definitions using Schema.org
   - Persistent `@id` references across all mentions
   - Multiple schema types (Organization, ResearchProject, TechArticle, HowTo)

2. **Multi-Source Validation**
   - GitHub repository with documentation
   - Medium articles explaining methodology
   - Dev.to technical deep-dives
   - Cross-platform entity corroboration

3. **Transparent Measurement**
   - 21-day observation period
   - Daily Google Search Console monitoring
   - Weekly AI citation tests (Perplexity, ChatGPT, Claude)
   - Public progress tracking

### Experiment Timeline

- **Days 1-3:** Foundation (deploy, schema, indexing)
- **Days 4-7:** Indexing (external content, backlinks)
- **Days 8-14:** Recognition (test AI systems)
- **Days 15-21:** Citation (achieve full visibility)

## 🔧 API Usage

### Get Metrics

```bash
curl https://www.noorranklabs.com/api/metrics
```

### Add Metric

```bash
curl -X POST https://www.noorranklabs.com/api/metrics \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2025-12-25",
    "metric": "Perplexity citation achieved",
    "status": "complete",
    "notes": "First citation in answer engine"
  }'
```

### Update Metric

```bash
curl -X PATCH https://www.noorranklabs.com/api/metrics \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2025-12-19",
    "metric": "Domain registered",
    "status": "complete"
  }'
```

## 📊 Tech Stack

- **Framework:** Next.js 14.2.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Schema:** Schema.org JSON-LD
- **Date Utilities:** date-fns

## 🔍 SEO Features

- **Dynamic Sitemap:** Auto-generated with appropriate priorities
- **robots.txt:** AI crawler optimization (GPTBot, Claude-Web, Perplexity, etc.)
- **Meta Tags:** Comprehensive Open Graph and Twitter Card metadata
- **Security Headers:** CSP, X-Frame-Options, Referrer-Policy
- **Error Boundaries:** Custom error and 404 pages

## 📝 Schema Validation

Test schemas using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

## 🤝 Contributing

This is an open research project. Feel free to:
- Fork the repository
- Submit pull requests
- Report issues
- Share your own AEO experiments

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** https://www.noorranklabs.com
- **NoorRank:** https://noorrank.com
- **Medium:** [Building an AEO Lab](https://medium.com/@noorrank)
- **Dev.to:** [Modular Schema Architecture](https://dev.to/noorrank)

## 💬 Contact

**NoorRank**
- GitHub: [@noorrank](https://github.com/noorranklabs)
- LinkedIn: [company/noorrank](https://linkedin.com/company/noorrank/)

---

**Built with ❤️ for the future of entity-first search optimization**
