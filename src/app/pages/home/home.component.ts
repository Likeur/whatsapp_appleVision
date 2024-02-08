import { Component } from '@angular/core';
import { ChatListComponent } from '../../components/chat-list/chat-list.component';
import { ChatpreviewComponent } from '../../components/chatpreview/chatpreview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatListComponent, ChatpreviewComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
