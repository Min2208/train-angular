import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  calculartor = '+';
  result: number;

  constructor() { }

  ngOnInit(): void {
  }


  calculartorNumber() {
    switch (this.calculartor) {
      case "+" :
        this.result = this.firstNumber + this.secondNumber;
        break;
      case "-" :
        this.result = this.firstNumber - this.secondNumber;
        break;
      case "*" :
        this.result = this.firstNumber * this.secondNumber;
        break;
      case "/" :
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }
}
