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
    {
      nome: "Samuel",
      parentesco: "filho",
      dataNac: "11/04/2022",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}`;
  }
}

console.log(relatorio);
