let employee1 = {}
employee1.id = '1'
employee1.firstname = 'Laura'
employee1.lastName = 'Leamari'
employee1.salary = '5000'
employee1.raiseSalary = function(percent) {
  this.salary += (this.salary * percent);
  console.log(`o novo salario do ${this.id} é ${this.salary}`)
}

let employee2 = {}
employee2.id = '2'
employee2.firstname = 'Vinicius'
employee2.lastName = 'Garritano'
employee2.salary = '7520'
employee2.raiseSalary = function(percent) {
  this.salary += (this.salary * percent);
  console.log(`o novo salario do ${this.id} é ${this.salary}`)
}

employee1.raiseSalary(0.10)
employee2.raiseSalary(0.10)
