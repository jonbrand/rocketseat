const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

function verifyExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if(!customer){
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit') {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);


  console.log(balance)
  return balance;
}

// pegar saldo da conta
app.get("/balance", verifyExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const balance = getBalance(customer.statement);

  return response.status(200).json(balance);
})

// buscar extrato
app.get("/statement/", verifyExistsAccountCPF, (request, response) => {
  const { customer } = request;
  
  return response.status(201).json(customer.statement);
});

// buscar conta
app.get("/account", verifyExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.status(201).json(customer);
});

// buscar extrato por data
app.get("/statement/date", verifyExistsAccountCPF, (request, response) => {
  const { customer } = request;
  
  const { date } = request.query;
  
  const dateFormat = new Date(date + " 00:00");
  console.log(dateFormat)
  
  const statement = customer.statement.filter(
    (statement) =>
    statement.created_at.toDateString() ===
    new Date(dateFormat).toDateString()
    );
    console.log(statement)
    return response.status(200).json(statement);
  });
  
// criar uma conta
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if(customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!"});
  }

  customers.push({
    cpf,
    name,
    id:  uuidv4(),
    statement: []
  });

  return response.status(201).send();

});

// fazer deposito
app.post("/deposit", verifyExistsAccountCPF, (request, response) => {
  const { description, amount } = request.body;

  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

// fazer saque
app.post("/withdraw", verifyExistsAccountCPF, (request, response) => {
  const { amount } = request.body;

  const { customer } = request;
  
  const balance = getBalance(customer.statement);

  if(balance < amount) {
    return response.status(400).json({ error: "Insufficient founds!"})
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

// atualizar dados do cliente
app.put("/account", verifyExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  customer.name = name;

  return response.status(201).send();
});

// deletear conta
app.delete("/account", verifyExistsAccountCPF, (request, response) => {
  const { customer } = request;

  customers.splice(customer, 1);

  return response.status(200).json(customers);
})

app.listen(3333);