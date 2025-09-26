# Template for a NextJS app with pnpm, tailwind, prisma, authjs, heroicons, zustand

## Setup:
### init auth
```
npx auth secret
```
creates a `AUTH_SECRET` environment variable

## Other environment variables:
```
AUTH_URL=http://localhost:3000
PRISMA_DATABASE_URL=
```

## Database information
when using prisma postgres database, make sure to use ``.$extends(withAccelerate());`` in your prisma.ts file. As well als ``import { PrismaClient } from "@prisma/client/edge";``
use the prisma+postgres URL for your database connection
Adjust accordingly to your needs
