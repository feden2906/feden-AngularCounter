import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  result;
  @Output()
  bubbleUp = new EventEmitter();

  inputValue: number = null;

  constructor() { }

  ngOnInit(): void { }

  setInputValue(n): void {
    this.inputValue = +n.target.value;
  }

  setNewResult(): void {
    if (this.inputValue !== 0){
      this.bubbleUp.emit(this.inputValue+ this.result);
    }
  }
}
