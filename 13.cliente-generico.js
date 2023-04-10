function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const Jemima = new Cliente("Jemima", "222233334444", "jemima@email.com", 111);

console.log(Jemima);
