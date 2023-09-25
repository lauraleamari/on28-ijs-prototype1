function Account(accountNumber, agencyNumber, balance) {
  let account = Object.create(Account.prototype)

  if (balance <= 0) {
    throw new Error("O montante inicial deve ser maior que zero.");
  }

  account.accountNumber = accountNumber
  account.agencyNumber = agencyNumber
  account.balance = balance

  return account //NUNCA ESQUECER DO RETURN
}

Account.prototype.credit = function credit(amount) {
  this.balance += amount;
  console.log(`Soma Valor do montante é ${this.balance}`)
}

Account.prototype.debit = function debit(amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    console.log(`Subitrai Valor do montante é ${this.balance}`)
  } else {
    throw("Saldo insuficiente para a operação.");
  }

}

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  // da professora
  if (this.balance >= amount) {
    this.balance -= amount;
    anotherAccount.balance += amount;

    console.log(`Transferência realizada com sucesso. Seu novo saldo é de ${this.balance}`)
  } else {
    throw("Saldo insuficiente para a transferência.");
  }


  // o que eu tinha feito que tb esta correto

  // this.debit(amount);
  // anotherAccount.credit(amount);

  // console.log(`Transferência de ${amount} realizada. Novo saldo da conta ${this.accountaccountNumber}: ${this.balance}`);
  // console.log(`Novo saldo da conta ${anotherAccount.accountaccountNumber}: ${anotherAccount.balance}`);
}

module.exports = { Account }