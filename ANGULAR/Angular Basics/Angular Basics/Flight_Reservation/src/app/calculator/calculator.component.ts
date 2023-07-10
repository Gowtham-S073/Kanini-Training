import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result : string = '';

  appendToResult(value : string)
  {
    this.result += value;
  }
  
  calculate() {
    try {
      this.result = eval(this.result);
    } catch (e) {
      this.result = 'Error';
    }
  }

  clear() {
    this.result = '';
  }
}
