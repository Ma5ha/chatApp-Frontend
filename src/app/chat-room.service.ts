import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionCableService, Channel } from 'angular2-actioncable';

interface message {
  content: any
  author: any
}


@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  constructor(private httpClient: HttpClient, private cableService: ActionCableService,) {

  }

  sendMessage(message: message) {
    return this.httpClient.post('http://localhost:3000/messages', { message: message.content, author: message.author })
  }


  roomStream(): Channel {
    const channel: Channel = this.cableService
      .cable("ws://localhost:3000/cable")
      .channel('MessagesChannel');

    // Subscribe to incoming messages
    return channel
  }



}
