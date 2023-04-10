const cliente = {
  nome: "Erick",
  idade: 36,
  cpf: "12345678911",
  email: "erick@email.com",
  fones: ["55922334455", "55966778899"],
  dependentes: [
    {
      nome: "Heitor",
      parentesco: "filho",
      idade: 6,
    },
  ],
};

cliente.dependentes.push({
  nome: "Samuel",
  parentesco: "filho",
  dataNac: "11/04/2022",
});

console.log(cliente);

const dependenteMaisNovo = cliente.dependentes.filter(
  (dependente) => dependente.dataNac === "11/04/2022"
);

console.log(dependenteMaisNovo);
console.log(dependenteMaisNovo[0].nome);
