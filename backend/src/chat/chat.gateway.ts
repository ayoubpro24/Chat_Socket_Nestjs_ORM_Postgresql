import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from "@nestjs/websockets"; 
import { Server } from "socket.io";
import { Inject } from "@nestjs/common";
import { DRIZZLE } from "src/db/db.module";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "src/db/schema"

// in lib WebSocketGateway i use this bc i want run Socket io server with specief port but should use TCP [pool] not http server
// about SubscribeMesage is like event listener if client send packet then focus function to execute.
// MessageBody maybe help read data json to easy store in variable "thank you Payload"
// WebSocketServer this is root socket instant to help connect many person 
// so it creates a unique 'id' socket for each person but the WebSocketServer is the Manager of all of them.
// WebSocketserver is "Broadcast" like Megaphone
// Client (Socket.io) -> Gateway (@SubscribeMessage) -> Drizzle (Insert) -> Gateway (@WebSocketServer) -> All Clients (Broadcast)
// inject help to go internal map and check key "DRIZZLE" and the assign in this memory address , why if i dont use it should what type specief if i have many database 

@WebSocketGateway({
    cors: {origin : '*'}
})
export class ChatGateway {
    @WebSocketServer ()
    server : Server;
    
    constructor(@Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>) {}


    async handleConnection(client : any) {
        const history = await this.db.select().from(schema.messages).limit(50);
        client.emit('message_history', history);
    }
    @SubscribeMessage('send_message')
    async handleMessage(@MessageBody() data: {sender : string ; content : string})
    {
        const [newMessage] = await this.db.insert(schema.messages).values ({
            sender : data.sender,
            content : data.content,
        }).returning();
        console.log("[newMessage] : ", newMessage); // debug to see how its working if using destructuring Array 
        this.server.emit('reveived_message', newMessage);
    }
}

// Receive -> Save to DB -> Get ID back -> Broadcast.