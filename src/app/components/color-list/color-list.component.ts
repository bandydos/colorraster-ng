import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  // hex val to give to parent
  @Output() hexval = new EventEmitter<string>();

  constructor() { }

  // fire event
  public fireEvent(hval: string) {
    this.hexval.emit(hval);
  }

  // some colors
  colors = [
    {
      id: 4,
      colorname: "white",
      colorhex: "#FFFFFF",
    },
    {
      id: 5,
      colorname: "black",
      colorhex: "#000000",
    },
    {
      id: 1,
      colorname: "red",
      colorhex: "#FF0000",
    },
    {
      id: 2,
      colorname: "green",
      colorhex: "#00FF00",
    },
    {
      id: 3,
      colorname: "blue",
      colorhex: "#0000FF",
    },
    {
      id: 6,
      colorname: "orange",
      colorhex: "#FFA500",
    },

    {
      id: 7,
      colorname: "purple",
      colorhex: "#800080",
    },

    {
      id: 8,
      colorname: "brown",
      colorhex: "#964B00",
    },
  ]

  ngOnInit(): void {
  }

}
