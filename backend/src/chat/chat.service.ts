import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from 'src/db/db.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "src/db/schema"
import { desc } from 'drizzle-orm';

@Injectable()
export class ChatService {
    constructor(@Inject(DRIZZLE) private db: NodePgDatabase<typeof schema> ) {}

    async saveMessage(sender : string , content : string) {
        return await this.db.insert(schema.messages).values({sender, content}).returning();
    }

    async getMessage()
    {
        return await this.db.select().from(schema.messages).limit(50);
    }
}
