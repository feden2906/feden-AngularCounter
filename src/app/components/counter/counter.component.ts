import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  result = 0;

  ngOnInit(): void { }

  setNewResult(num): void {

    if (!isNaN(+num) || num === 'reset') {
      let newResult = this.result + +num;

      if (newResult < 0 || num === 'reset') {
        newResult = 0;
      }
      this.result = newResult;
    }
  }

}
