Dados primitivos no js -> number, string, boolean

Objetos Literais:
dados nao primitivos no js -> armazana várias coleções de dados, sao objetos literais, onde colocamos propriedades dentro das chaves.
Não pode criar variavel com o mesmo nome!

Exemplo:
// let animal = {
//   type: 'cachorro',
//   name: 'penelope',
//   age: '5',
//   hobbies: ['brincar', 'latir', 'dormir'],
//   'can I have': true
// }

outro jeito de fazer (na aula vamos usar assim pra entender o desenvolvimento das coisas)

let animal = {}
animal.type = 'cachorro'
animal.name = 'penelope'
animal['can I have'] = true
....

console.log(animal.name)
console.log(animal['name'])

não pode ter palavras com nomes de propriedades reservadas do javascript


// Mais uma info

Posso passar uma função que ja existe

function eat(){
  console.log('animal esta comendo')
}

animal.eat = eat

animal.eat() --- só vou executar aqui de fato

// Mais uma info

usando o this

let animal = {}
animal.type = 'cachorro'
animal.age = '5'
animal.name = 'penelope'
animal['can I have'] = true
animal.eat = function eat(){
  console.log(`animal chamado ${this.type} tem a idade de ${this.age}`)
}

animal.eat()

// Mais uma info

