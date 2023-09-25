// Função construtora para HistoricoMedico
function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

// Método para adicionar uma nova vacina ao histórico médico
HistoricoMedico.prototype.vacinar = function(vacina) {
  this.vacinas.push(vacina);
};

// Método para adicionar uma nova consulta ao histórico médico
HistoricoMedico.prototype.consultar = function(data) {
  this.consultas.unshift(data);
};

// Função construtora para Gatos
function Gato(nome, idade, cor, castrado, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = historico;
}

// Método específico para Gatos
Gato.prototype.miar = function() {
  console.log(this.nome + " está miando.");
};

// Função construtora para Cachorros
function Cachorro(nome, idade, cor, castrado, raca, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = historico;
}

// Método específico para Cachorros
Cachorro.prototype.latir = function() {
  console.log(this.nome + " está latindo.");
};

// Função construtora para Animais Exóticos
function AnimalExotico(nome, idade, cor, especie, adulto, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = historico;
}

// Método específico para Animais Exóticos
AnimalExotico.prototype.ehAdulto = function() {
  if (this.especie === "hamster" && this.idade >= 2) {
      return true;
  } else if (this.especie === "papagaio" && this.idade >= 36) { // 3 anos em meses
      return true;
  } else if (this.especie === "calopsita" && this.idade >= 18) { // 18 meses
      return true;
  }
  return false;
};


// Criando um histórico médico
// var historicoPipoca = new HistoricoMedico();
// historicoPipoca.vacinar("V8");
// historicoPipoca.consultar("9/7/2023");

// // Criando um gato
// var pipoca = new Gato("Pipoca", 18, "branco", true, historicoPipoca);
// pipoca.miar();
// pipoca.historico.vacinar("V10");

// // Criando um cachorro
// var aslam = new Cachorro("Aslam", 42, "preto", false, "srd", new HistoricoMedico());
// aslam.latir();
// aslam.historico.consultar("13/1/2023");

// // Criando um animal exótico
// var iogurte = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster", true, new HistoricoMedico());
// if (iogurte.ehAdulto()) {
//     console.log(iogurte.nome + " é um adulto.");
// } else {
//     console.log(iogurte.nome + " não é um adulto.");
// }
