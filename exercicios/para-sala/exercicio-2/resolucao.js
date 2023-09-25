function generateId() {
  const crypto = require('crypto')
  const id = crypto.randomUUID()
  return id
}

function raiseSalary(percent) {
  this.salary += (this.salary * percent);
  console.log(`o novo salario é ${this.salary}`)
}

function Employee(firstName, lastName, salary){

  let employee = {}
  employee.id = generateId()
  employee.firstName = firstName
  employee.lastName = lastName
  employee.salary = salary
  employee.raiseSalary = raiseSalary;

  return employee
}


const employee1 = Employee('Laura', 'Leamari', 5000)
console.log(employee1)
console.log(employee1.raiseSalary(10));

const employee2 = Employee('Vinicius', 'Garritano', 7238)
console.log(employee2)
console.log(employee2.raiseSalary(10));

const employee3 = Employee('Carolina', 'Leamari', 3456)
console.log(employee3)
console.log(employee3.raiseSalary(10));