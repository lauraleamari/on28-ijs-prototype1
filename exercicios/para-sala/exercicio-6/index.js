const { Account } = require('./resolucao');

const luaraAccount = Account(123, 0001, 1000);
luaraAccount.credit(2000);
luaraAccount.debit(500);

const outraconta = Account(456, 0001, 100);

luaraAccount.transferTo(outraconta, 100000);