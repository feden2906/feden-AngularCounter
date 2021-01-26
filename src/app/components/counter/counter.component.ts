import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  result = 0;

  constructor() { }

  ngOnInit(): void { }

  getNewResult(num): void {
    this.result = num;
  }

}
