import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from '../chat-room.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {





  message: FormControl = new FormControl()

  title = 'ChatRoom';

  messages = []

  constructor(
    private chatRoomService: ChatRoomService
  ) {


  }
  ngOnInit(): void {
    this.chatRoomService.roomStream().received().subscribe(message => {
      this.messages.push(message)
      console.log(message)
    })


  }



  send() {
    const message = {
      content: this.message.value,
      author: sessionStorage.getItem('username')
    }

    this.chatRoomService.sendMessage(message).subscribe(x => console.log(x))
    this.message.setValue('')
  }



  firstLetter(username: string) {
    return username.charAt(0)

  }

  logOut() {
    sessionStorage.clear()
    history.back()
  }

}

