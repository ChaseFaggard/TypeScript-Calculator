var output = document.querySelector('.output');
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */
var num1;
var num2;
var Operators;
(function (Operators) {
    Operators[Operators["ADD"] = 0] = "ADD";
    Operators[Operators["SUBTRACT"] = 1] = "SUBTRACT";
    Operators[Operators["MULTIPLY"] = 2] = "MULTIPLY";
    Operators[Operators["DIVIDE"] = 3] = "DIVIDE";
})(Operators || (Operators = {}));
var operator;
document.querySelector('.calc').addEventListener('click', function (evt) {
    var button = evt.target;
    if (button.className.indexOf('num') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
        if (operator == undefined)
            num1 = Number(button.innerHTML);
        else
            num2 = Number(button.innerHTML);
    }
    if (button.className.indexOf('operator') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
        switch (button.innerHTML) {
            case '+':
                operator = Operators.ADD;
                break;
            case '-':
                operator = Operators.SUBTRACT;
                break;
            case '*':
                operator = Operators.MULTIPLY;
                break;
            case '/':
                operator = Operators.DIVIDE;
                break;
        }
    }
    if (button.className.indexOf('equal') !== -1) {
        console.log(button.innerHTML);
        var calculation = calculate(num1, num2, operator);
        output.value = calculation.toString();
        num1 = calculation;
    }
    output.value += ' ';
    /* create another condition to clear the value of the input when C is pressed*/
    if (button.className.indexOf('reset') !== -1) {
        output.value = '';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    }
});
//create a function that takes in 2 numbers and a string (operand)
function calculate(num1, num2, operator) {
    if (num1 == undefined || num2 == undefined || operator == undefined)
        return 0;
    switch (operator) {
        case Operators.ADD:
            return num1 + num2;
        case Operators.SUBTRACT:
            return num1 - num2;
        case Operators.MULTIPLY:
            return num1 * num2;
        case Operators.DIVIDE:
            return num1 / num2;
    }
}
