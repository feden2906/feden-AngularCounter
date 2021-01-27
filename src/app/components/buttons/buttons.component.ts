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

  arr = [1, -1, 50, -50, 100, -100];

  ngOnInit(): void { }

  takeValue(num): void {
    this.bubbleUp.emit(num);
  }
}
