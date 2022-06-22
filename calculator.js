document.write(
    `A Basic Arithmetic Calculator
     OPERATORS ::
     For addition  (+)
     For subtraction (-)
     For Multiplication (*)
     For Division (/)`
);


let num1 = parseInt(prompt('First Number'))
let num2 = parseInt(prompt('Second Number'))
let operation = prompt('Choose Operation(+, -, *, /)')

if (operation == '+'){
  document.write('---------The result is ::', num1 + num2, '----------')
}
else if (operation == '-'){
  document.write('---------The result is ::', num1 - num2, '----------')
}
else if (operation == '*'){
  document.write('---------The result is ::', num1 * num2, '----------')
}
else if (operation == '/'){
  document.write('---------The result is ::', num1 / num2, '----------')
}
else{
  document.write('-------Invalid Input--------')
}
