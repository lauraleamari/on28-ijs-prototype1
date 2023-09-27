function Aluna(nome, matricula) {
  this.nome = nome,
  this.matricula = matricula,
  this.notas = []

  this.adicionarNota = function(nota){
    this.notas.push(nota)
  }
  this.calcularMedia = function(){
    // da profa
    if (this.notas.length === 0) {
      return 0
    }

    const total = this.notas.reduce((soma, nota) => soma + nota, 0)
    const media = (total / this.notas.length).toFixed(2)
    return media

    // meu jeito
    // if (this.notas.length === 0) {
    //   throw "Nenhuma nota disponível.";
    // }

    // let soma = 0;
    // for (let i = 0; i < this.notas.length; i++) {
    //   soma += this.notas[i];
    // }

    // let media = soma / this.notas.length;
    // return this.notas.push(media.toFixed(2));
  }

  this.exibirInformacoes = function() {
    console.log(`Nome: ${this.nome} - Matrícula: ${this.matricula} - Média: ${this.calcularMedia()}`)
  }
}

module.exports = { Aluna }
