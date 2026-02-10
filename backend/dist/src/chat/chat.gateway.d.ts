import { Server } from "socket.io";
import { ChatService } from "./chat.service";
export declare class ChatGateway {
    private readonly chatService;
    server: Server;
    constructor(chatService: ChatService);
    handleConnection(client: any): Promise<void>;
    handleMessage(data: {
        sender: string;
        content: string;
    }): Promise<void>;
}
