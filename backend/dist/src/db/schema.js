"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.messages = (0, pg_core_1.pgTable)('messages', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    content: (0, pg_core_1.text)('content').notNull(),
    sender: (0, pg_core_1.text)('sender').notNull(),
    createdAt: (0, pg_core_1.timestamp)('createdAt').defaultNow().notNull(),
});
//# sourceMappingURL=schema.js.map