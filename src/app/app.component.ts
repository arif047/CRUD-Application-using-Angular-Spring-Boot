import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  constructor(){
    setTimeout(() => {
      this.title = "New Title of Todo Write";
    }, 2000);
  }
}
