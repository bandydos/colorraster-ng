import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor: string;

  // add event value to bgColor
  onNewhexval(newHexval: string): void {
    this.bgColor = newHexval;
  }
}
