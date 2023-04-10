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

function ofereceSeguros(obj) {
  const prospCliente = Object.keys(obj);
  if (prospCliente.includes("dependentes")) {
    console.log(`Oferta de Seguros para ${obj.nome}`);
  }
}
console.log(Object.values(cliente));
console.log(Object.entries(cliente));
ofereceSeguros;
cliente;
