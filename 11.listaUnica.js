const cliente = [
  {
    nome: "Erick",
    cpf: "12345678911",
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
  },
  {
    nome: "Jemima",
    cpf: "2222222222",
    dependentes: [
      {
        nome: "Samuel",
        parentesco: "filho",
        dataNac: "11/04/2022",
      },
    ],
  },
];

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);
