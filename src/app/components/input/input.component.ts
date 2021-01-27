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

  inputValue: '';

  ngOnInit(): void { }

  setInputValue(e): void {
    this.inputValue = e.target.value;
  }

  takeValue(): void {
      this.bubbleUp.emit(this.inputValue);
      this.inputValue = '';
  }
}
