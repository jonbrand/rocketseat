/*
  Sistema de gastos familiar

  [x] - Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

  [x] - Crie uma função que ira calcular o total de receitas e
  despesas e ira mostrar uma mensagem se a família esta com saldo
  positivo ou negativo, seguido do valor do saldo.

*/
let family = {
  incomes: [100, 100, 50],
  expenses: [100, 50, 200],
}

function sum(array) {
  let total = 0;

  for(let value of array) {
    total += value;
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;

  let balanceText = "negativo"

  if(itsOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo e ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()