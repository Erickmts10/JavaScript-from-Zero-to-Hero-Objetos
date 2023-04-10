function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}
const je = new ClientePoupanca("Je", "223344556677", "je@email.com", 100, 200);

console.log(je);

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

je.depositarPoup(30);

console.log(je.saldoPoup);
