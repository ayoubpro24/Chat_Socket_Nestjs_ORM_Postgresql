import { timestamp ,pgTable ,serial, text } from "drizzle-orm/pg-core"; // call pg is mean postgres sql to can use lib exist

export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    sender: text('sender').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
}); // this is method object literal to can created db with name and table.
