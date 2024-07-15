CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(40) PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL
);
