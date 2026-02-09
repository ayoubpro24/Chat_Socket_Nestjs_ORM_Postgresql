CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"sender" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
