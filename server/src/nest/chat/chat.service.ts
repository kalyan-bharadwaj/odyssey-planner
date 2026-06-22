import { Injectable } from '@nestjs/common';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable()
export class ChatService {
  async processMessage(messages: ChatMessage[]): Promise<string> {
    const lastMessage = messages[messages.length - 1];
    const content = lastMessage.content.toLowerCase();

    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1000));

    // Simple heuristic responses
    if (content.includes('hello') || content.includes('hi')) {
      return 'Hello! I am your professional travel assistant. How can I help you plan your next adventure today?';
    }
    if (content.includes('flight') || content.includes('ticket')) {
      return 'I can help you keep track of your flight details. You can import your booking confirmations directly into the Trip Planner!';
    }
    if (content.includes('hotel') || content.includes('accommodation')) {
      return 'For accommodations, make sure to add them to your Reservations tab. Need ideas for where to stay?';
    }
    if (content.includes('weather')) {
      return 'I can fetch the current weather for your destinations! Just make sure your trip locations are set on the map.';
    }
    if (content.includes('pack') || content.includes('luggage')) {
      return "Don't forget your essentials! You can use the Packing List feature to organize your bags efficiently.";
    }
    if (content.includes('thank')) {
      return "You're very welcome! Let me know if you need anything else.";
    }

    return "That sounds exciting! As your travel assistant, I'm still learning. Try asking me about flights, hotels, packing, or the weather for your trip!";
  }
}
