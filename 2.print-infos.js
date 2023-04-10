const cliente = {
  nome: "Erick",
  idade: 36,
  cpf: "12345678911",
  email: "erick@email.com",
};

console.log(
  `Meu nome é ${cliente.nome} ,tenho ${
    cliente.idade
  } anos de idade, meu CPF:${cliente.cpf.substring(0, 3)}, meu e-mail ${
    cliente.email
  }`
);
