let firstNumber = Number(prompt('Digite o primeiro número'))
let secondNumber = Number(prompt('Digite o segundo nùmero'))

if (firstNumber == secondNumber) {
  alert("Os números que você digitou são iguais")
} else {
  alert("Os números que você digitou são diferentes")
}

alert('Soma: ' + (firstNumber + secondNumber))
alert('Subtração: ' + (firstNumber - secondNumber))
alert('Multiplicação: ' + (firstNumber * secondNumber))
alert('Divisão: ' + (firstNumber / secondNumber))
alert('Resto da divisão: ' + (firstNumber % secondNumber))

if ((firstNumber + secondNumber) % 2 == 0) {
  alert("A soma dos números é par")
} else {
  alert("A soma dos números é ímpar")
}