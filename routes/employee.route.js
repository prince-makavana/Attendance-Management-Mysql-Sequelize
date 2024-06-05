const { fetchEmployee, createEmployee } = require('../controllers/employee.controller')

const employeeRoute = require('express').Router()

employeeRoute.get('/employee', fetchEmployee)
employeeRoute.post('/employee', createEmployee)

module.exports = employeeRoute