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

  arr = [1, -1, 100, -100, 'reset'];

  ngOnInit(): void { }

  takeValue(num): void {
    this.bubbleUp.emit(num);
  }
}
