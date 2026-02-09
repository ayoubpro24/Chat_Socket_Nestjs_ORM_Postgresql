import {Module, Global} from '@nestjs/common'
import {drizzle} from 'drizzle-orm/node-postgres'
import {Pool} from 'pg'
import * as schema from './schema' // this is method to can call file to can use in this current file.

export const DRIZZLE = 'DRIZZLE';

@Global()
@Module({
    providers: [{

        provide : DRIZZLE, 
        useFactory : () => {
            const pool = new Pool({connectionString : 'postgres://user:password@localhost:5432/chat_db'});
            return drizzle(pool , {schema});
            },
        }
    ],  
    exports:[DRIZZLE],
})
export class Dbmodule {}