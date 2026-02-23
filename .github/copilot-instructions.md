# AI Coding Agent Instructions

## Project Architecture

This is a **Turbo-based monorepo** with three primary app layers and a shared type system:

```
authentication-form (root)
├── apps/
│   ├── authentication-app       (Next.js frontend, port 3000)
│   ├── dashboard-app            (Next.js frontend + i18n, port 3000)
│   ├── aws-auth-api             (AWS CDK + serverless backend)
│   └── aws-app-deployment       (AWS CDK deployment config)
├── packages/
│   ├── common-types             (Shared Zod schemas & TypeScript types)
│   └── common-components        (Shared React component library)
```

**Build System:** Use `yarn` + `turbo` for all builds/tests. Root scripts invoke workspace-wide commands.

- `yarn dev` - Start all dev servers
- `yarn build` - Build all apps/packages
- `yarn test` - Run all tests
- `yarn lint` - Lint all packages

## Critical Data Flow & Type Safety

**Type Contract:** All API contracts are defined in `packages/common-types/schemas/`:

- `schemas/auth.ts` - Zod schemas for sign-in, sign-up, password reset, recovery codes
- `schemas/user.ts` - User model schemas
- Form data in frontend **must** use the same schemas from common-types for validation

**Pattern:** Forms (e.g., `apps/authentication-app/lib/forms/Authentication/`) use:

```typescript
// Validation via Zod schema imported from common-types
import { signInSchema } from "@packages/common-types";
// Form handling via React Hook Form
useForm({ resolver: zodResolver(signInSchema) });
```

## Frontend Layer (Next.js)

**Environment Config:** Each app loads variables from `lib/constants/dotenv.ts`. Update these files, not raw `.env` files.

**API Integration:**

- `lib/config/axiosClient.ts` - Centralized Axios instance with `baseURL` from `process.env.API_URL`
- Data fetching via `@tanstack/react-query` with client defined in `lib/config/queryClient.ts`
- State management: `zustand` (example: `lib/store/user.ts`)

**Google OAuth:** Integrated via `@react-oauth/google` provider in `lib/forms/FormData.tsx` (client-side wrapper).

## Backend Layer (AWS Serverless)

**Infrastructure as Code (IaC):** `aws-auth-api` uses AWS CDK. Key files:

- `src/awsStack.ts` - Main stack defining API Gateway, Lambda functions, DynamoDB
- `src/lib/lambdas/*` - Individual Lambda functions (signIn, signUp, googleSignIn, etc.)
- `src/lib/dynamoDb/authTable/` - DynamoDB table configuration
- `src/lib/gateway/authAPI.ts` - API Gateway setup with CORS

**Lambda Environment:** All Lambdas receive common env vars via `AWS.LambdasProps`:

```typescript
{
  (STACK_NAME, SECRET_KEY, GOOGLE_CLIENT_ID, AUTH_APP_URL, DASHBOARD_APP_URL);
}
```

**Local Development:** Run `yarn dev` in `aws-auth-api` to start local API via `src/config/localApi.ts`.

## Key Conventions & Patterns

### Shared Types

- Import types/schemas from `@packages/common-types` in both frontend and backend
- Zod schemas serve as single source of truth for API contracts
- Avoid duplicating types; update `packages/common-types/` first, then consume

### Form Validation

- All forms use `react-hook-form` + `zodResolver` + Zod schemas
- Schemas defined in `packages/common-types/schemas/`
- Example: `signUpSchema` used in `authentication-app/lib/forms/Authentication/SignUp.tsx`

### File Organization

- **Config files:** `lib/config/` (axiosClient, queryClient, environment)
- **Constants:** `lib/constants/dotenv.ts` (single source for env vars)
- **Forms:** `lib/forms/{FeatureName}/` with `validation.ts` (imports from common-types)
- **Hooks:** `lib/hooks/` (custom hooks per app)
- **State:** `lib/store/` (Zustand stores)
- **Views/Components:** `lib/views/` (page components)

## Workspace-Specific Requirements

**Yarn Workspaces:** When adding dependencies:

- Shared code → `packages/*`
- App-specific → `apps/*/package.json`
- Use `yarn workspace @apps/authentication-app add <pkg>` for app-only deps

**No duplicate dependencies:** Always check if common libs are already in root or shared packages.

**Turbo Cache:** Build outputs in `turbo.json` point to `out/**`, `dist/**`, `cdk.out/**`. Dev tasks (`dev`) don't cache; build tasks do.

## Testing & Validation

- Unit tests in app directories (jest configured, see `aws-auth-api/jest.config.ts`)
- Zod validation happens at both form submission and API boundary
- Environment validation: Check `lib/constants/dotenv.ts` for required vars before deployment

## Cross-Component Communication

- **Frontend ↔ Backend:** Axios client calls API Gateway endpoints defined in `aws-auth-api/src/lib/gateway/`
- **Common Types:** Shared via monorepo references (`@packages/common-types`)
- **Component Library:** Imported from `@packages/common-components` in both Next.js apps

## Deployment

- Authentication app & Dashboard hosted on AWS (CloudFront URL in readme)
- CDK deployments via `aws-auth-api/package.json` scripts: `cdk-deploy`, `cdk-synt`
- Stack name: `dotenv.STACK_NAME` (e.g., `auth-api-dev`)
