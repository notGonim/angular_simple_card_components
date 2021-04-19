import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'nature',
      contnet: 'Here is a pic of biking',
    },
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      contnet: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nature',
      contnet: 'This is a pic of mountain',
    },
  ];
}
