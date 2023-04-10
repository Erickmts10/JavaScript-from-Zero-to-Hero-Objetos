const cliente = {
  nome: "Erick",
  idade: 36,
  cpf: "12345678911",
  email: "erick@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((info) => console.log(cliente[info]));
