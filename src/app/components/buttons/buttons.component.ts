import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input()
  result;

  @Output()
  bubbleUp = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // calculation(num): void {
  //   let newResult = this.result + num;
  //   if (newResult < 0) {
  //     newResult = 0;
  //   }
  //   this.bubbleUp.emit(newResult);
  // }

  takeValue(num): void {
    this.bubbleUp.emit(num);
  }
}
