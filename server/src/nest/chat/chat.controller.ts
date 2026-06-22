import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ChatService, ChatMessage } from './chat.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async handleChat(@Body('messages') messages: ChatMessage[]) {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return { response: 'Please send a valid message array.' };
    }
    const responseText = await this.chatService.processMessage(messages);
    return { response: responseText };
  }
}
