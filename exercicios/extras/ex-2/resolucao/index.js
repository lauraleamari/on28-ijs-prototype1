const { Aluna } = require('./classes/Aluna');
const { Turma } = require('./classes/Turma');

const aluna1 = new Aluna('Maria', '2021001');
aluna1.adicionarNota(8.5);
aluna1.adicionarNota(9.0);
aluna1.exibirInformacoes();

const aluna2 = new Aluna('Joana', '2021002');
aluna2.adicionarNota(7.8);
aluna2.adicionarNota(8.0);
aluna2.exibirInformacoes();

const aluna3 = new Aluna('Carolina', '20220201');
aluna2.adicionarNota(9.2);
aluna2.adicionarNota(7.9);
aluna2.exibirInformacoes();

const turmaA = new Turma();
turmaA.adicionarAluna(aluna1);
turmaA.adicionarAluna(aluna2);
turmaA.adicionarAluna(aluna3);

turmaA.exibirListaAlunas();
