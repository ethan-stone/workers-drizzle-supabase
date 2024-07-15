import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config({
	path: './.dev.vars',
});

export default defineConfig({
	schema: './src/schema.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
});
