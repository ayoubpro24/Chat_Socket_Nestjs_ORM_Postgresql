import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "src/db/schema";
export declare class ChatService {
    private db;
    constructor(db: NodePgDatabase<typeof schema>);
    saveMessage(sender: string, content: string): Promise<{
        id: number;
        content: string;
        sender: string;
        createdAt: Date;
    }[]>;
    getMessage(): Promise<{
        id: number;
        content: string;
        sender: string;
        createdAt: Date;
    }[]>;
}
