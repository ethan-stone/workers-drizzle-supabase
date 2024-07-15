/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { createId } from '@paralleldrive/cuid2';
import { db } from './db';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

type Env = {
	DATABASE_URL: string;
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const client = postgres(env.DATABASE_URL);
		const db = drizzle(client, { schema });

		await db.insert(schema.users).values({
			id: createId(),
			name: createId(),
			createdAt: new Date(),
		});

		ctx.waitUntil(client.end());
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
