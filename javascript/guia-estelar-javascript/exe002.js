/*
  Sistema de gastos familiar

  [x] - Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

  [x] - Crie uma função que ira calcular o total de receitas e
  despesas e ira mostrar uma mensagem se a família esta com saldo
  positivo ou negativo, seguido do valor do saldo.

*/
let familyEconomy = {
  revenues: [100, 100, 50],
  expenses: [100, 50, 25],
}

function familyEconomyCalculation () {
  let sumRevenues = 0;
  let sumExpenses = 0;

  for(let i = 0; i < familyEconomy.revenues.length; i++) {
    sumRevenues += familyEconomy.revenues[i];
    sumExpenses += familyEconomy.expenses[i];
  }

  let balance = sumRevenues - sumExpenses;

  if(balance < 0) {
    console.log("Saldo Negativo")
  } else {
    console.log("Saldo Positivo")
  }

  console.log(sumRevenues)
  console.log(sumExpenses)
  console.log(balance)
}

familyEconomyCalculation()