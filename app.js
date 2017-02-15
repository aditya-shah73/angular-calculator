var app = angular.module("calculatorApp", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){
  this.resultValue = 0;
  this.buttonClicked = function(button){
    this.selectedOperation = button;
  }
  this.computedResult = function()
  {
    var num1 = parseInt(this.input1);
    var num2 = parseInt(this.input2);
    if(this.selectedOperation === '+')
    {
      this.resultValue = num1 + num2;
    }
    else if(selectedOperation === '-')
    {
      this.resultValue = num1 - num2;
    }
    else if(selectedOperation === '*')
    {
      this.resultValue = num1 * num2;
    }
    else if(selectedOperation === '/')
    {
      this.resultValue = num1 / num2;
    }
  }

}
