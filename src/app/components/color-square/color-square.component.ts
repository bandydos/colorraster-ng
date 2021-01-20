import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-square',
  templateUrl: './color-square.component.html',
  styleUrls: ['./color-square.component.css']
})
export class ColorSquareComponent implements OnInit {

  @Input() bgColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
