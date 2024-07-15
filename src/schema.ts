import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: varchar('id', { length: 40 }).primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	createdAt: timestamp('created_at', { mode: 'date' }).notNull(),
});
