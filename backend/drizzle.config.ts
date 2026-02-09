import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema : './src/db/schema.ts', // path to your schema file
    out : './drizzle',
    dialect : 'postgresql',
    dbCredentials : {
        url: 'postgres://postgres:password@localhost:5432/postgres', // your connection string
    },
});
