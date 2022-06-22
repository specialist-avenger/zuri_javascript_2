console.log(
    `A Basic Arithmetic Calculator
     OPERATORS ::
     For addition ==        +
     For subtraction ==     -
     For Multiplication ==  *
     For Division ==        /`
);


let num1 = prompt('First Number')
let num2 = prompt('Second Number')
let operation = prompt('Choose Operation(+, -, *, /)')

if (operation == '+'){
  console.log('The result is ', num1 + num2)
}
else if (operation == '-'){
  console.log('The result is ', num1 - num2)
}
else if (operation == '*'){
  console.log('The result is ', num1 * num2)
}
else if (operation == '/'){
  console.log('The result is ', num1 / num2)
}
else{
  console.log('Invalid Input')
}