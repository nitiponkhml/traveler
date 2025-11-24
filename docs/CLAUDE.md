# Project Coding Standards

> **IMPORTANT:** This project follows company-wide coding standards.
> All standards in `team-claude/docs/COMPANY_STANDARDS.md` are **MANDATORY**.

## 📚 Company Standards (REQUIRED)

**You MUST follow these company standards:** `../team-claude/docs/COMPANY_STANDARDS.md`

### Critical Rules (Enforced Automatically)

1. **Date Formatting:** ALL dates MUST display as `"12 JUL 25 7:39PM"`
   - Use: `<DateDisplay date={...} />`
   - Never show raw ISO dates

2. **Form Controls:** Select boxes with 10+ options MUST use autocomplete
   - < 10 options: `<Select>`
   - 10+ options: `<AutocompleteSelect>`

3. **Component Library:** MUST use `@company/ui` components
   - Never use raw HTML elements
   - Use design tokens, not arbitrary colors

4. **TypeScript:** Strict mode required
   - No `any` types
   - Explicit return types
   - Interfaces for objects

5. **API:** Follow REST conventions
   - Plural resources: `/users` not `/user`
   - Proper HTTP methods
   - Standard response format

---

## 🏗️ Project-Specific Information

### Tech Stack

<!-- Update this section for your project -->

- **Frontend:** [e.g., Next.js 15, React 18, TypeScript]
- **Backend:** [e.g., Node.js, Express, PostgreSQL]
- **Styling:** [e.g., Tailwind CSS, shadcn/ui]
- **State:** [e.g., Zustand, React Query]
- **Testing:** [e.g., Vitest, Playwright]

### Directory Structure

```
project-root/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/           # Shared UI components
│   │   └── features/     # Feature-specific components
│   ├── lib/              # Utilities
│   ├── hooks/            # Custom hooks
│   ├── services/         # API services
│   └── types/            # TypeScript types
├── public/               # Static assets
└── tests/                # Test files
```

### Working in this Project

When I ask you to:
- **"Add a feature"** → Work in `src/`
- **"Create a component"** → Add to `src/components/`
- **"Add an API route"** → Add to `src/app/api/`
- **"Update types"** → Add to `src/types/`

### Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build
npm run build

# Tests
npm test

# Linting
npm run lint

# Type check
npm run type-check
```

---

## 🎨 Project-Specific UI Rules

<!-- Add project-specific customizations here -->

### Color Scheme

- Primary: [Your brand color]
- Secondary: [Your secondary color]
- Use design tokens from `@company/ui`

### Spacing

- Card padding: `p-6`
- Modal padding: `p-4`
- Form field spacing: `space-y-4`

---

## 🔧 Project-Specific Conventions

<!-- Add any project-specific rules that extend company standards -->

### Example: Authentication

- Use `@/lib/auth` for authentication
- Protect routes with `withAuth` HOC
- Store tokens in `httpOnly` cookies

### Example: Data Fetching

- Use React Query for server state
- Cache time: 5 minutes
- Stale time: 1 minute

### Example: Error Handling

- Use `ErrorBoundary` component
- Log errors to Sentry
- Show user-friendly messages

---

## 📝 Commit Guidelines

Follow conventional commits:

```
feat(scope): add new feature
fix(scope): resolve bug
docs: update documentation
refactor(scope): improve code structure
test(scope): add tests
```

### Pre-commit Checks

Before committing, the following runs automatically:
- ✅ Linting
- ✅ Type checking
- ✅ Unit tests
- ✅ Company standards validation

---

## 🚀 Deployment

<!-- Add deployment information -->

- **Staging:** `main` branch auto-deploys
- **Production:** Create release tag
- **Environment:** See `.env.example`

---

## 📖 Additional Resources

- [Company Standards](../team-claude/docs/COMPANY_STANDARDS.md) ← **READ THIS**
- [API Documentation](./API.md)
- [Architecture Decisions](./ARCHITECTURE.md)

---

## ⚠️ Before You Start

1. ✅ Read company standards (../team-claude/docs/COMPANY_STANDARDS.md)
2. ✅ Install dependencies: `npm install`
3. ✅ Copy `.env.example` to `.env`
4. ✅ Run tests: `npm test`
5. ✅ Start dev server: `npm run dev`

---

## 🤖 Claude Instructions

When working on this project:

1. **ALWAYS** check company standards first
2. **ALWAYS** use `<DateDisplay>` for dates
3. **ALWAYS** use `<AutocompleteSelect>` for 10+ options
4. **ALWAYS** import from `@company/ui`
5. **ALWAYS** write TypeScript with strict types
6. **ALWAYS** write tests for new features
7. **ALWAYS** follow the directory structure above

### Before Committing

Run these checks:
```bash
npm run lint
npm run type-check
npm test
```

### Skills Available

- `standards-validator` - Check code against company standards
- `ui-component-generator` - Generate standard-compliant components
- `date-formatter` - Format dates correctly
- `conflict-resolver` - Resolve git conflicts

Use these skills to ensure compliance!

---

**Last Updated:** [Project creation date]
**Maintained By:** [Team name]
