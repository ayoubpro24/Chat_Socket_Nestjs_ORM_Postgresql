import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from 'src/db/db.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "src/db/schema"
import { desc } from 'drizzle-orm';

@Injectable()
export class ChatService {
    constructor(@Inject)
}
