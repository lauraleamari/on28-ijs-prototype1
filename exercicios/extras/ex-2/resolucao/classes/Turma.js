function Turma() {
  this.alunas = []

  this.adicionarAluna = function(aluna){
    this.alunas.push(aluna)
  }

  this.exibirListaAlunas = function() {
    // da profa
    this.alunas.forEach((aluna) => {
      console.log(`Nome: ${aluna.nome}, Matrícula: ${aluna.matricula}`)
    })


    // meu jeito
    // for (var i = 0; i < this.alunas.length; i++) {
    //   console.log(`Nome: ${this.alunas[i].nome}, Matrícula: ${this.alunas[i].matricula}`)
    // }
  }
}

module.exports = { Turma }