function generateId() {
  const crypto = require('crypto')
  const id = crypto.randomUUID()
  return id
}

function raiseSalary(percent) {
  this.salary += (this.salary * percent);
  console.log(`o novo salario é ${this.salary}`)
}

function addBenefits(benefit) {
  this.benefits.push(benefit)
  console.log(`o benefício ${benefit} foi adicionado`)
}

function removeBenefits(benefit) {
  let index = this.benefits.indexOf(benefit)

  if(index === -1) {
    console.log('Benefício inválido')
  } else {
    this.benefits = this.benefits.filter(currentBenefit => currentBenefit !== benefit)
    console.log(`o benefício ${benefit} foi removido`)
  }
}

function listBenefits() {
  console.log(`os benefícios desse funcionário são ${this.benefits}`)
}

function Employee(firstName, lastName, salary){

  let employee = {}
  employee.id = generateId()
  employee.firstName = firstName
  employee.lastName = lastName
  employee.salary = salary
  employee.benefits = []; // todos os funcionarios que criar ja vem com array vazia

  employee.raiseSalary = raiseSalary;
  employee.addBenefits = addBenefits;
  employee.removeBenefits = removeBenefits;
  employee.listBenefits = listBenefits;

  return employee
}

module.exports = {Employee}