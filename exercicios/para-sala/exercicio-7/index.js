const { Account } = require('./resolucao');

luaraAccount = new Account(123, 0001, 10000, 1); //se nao usar o new, não vai dar certo
luaraAccount.credit(2000);
luaraAccount.debit(500);

outraconta = new Account(456, 0001, 100, 2);
luaraAccount.transferTo(outraconta, 1000);

maisUmaConta = new Account(456, 0001, 0, 2);
maisUmaConta.closeAccount();
console.log(maisUmaConta);
