const Employee = require("../models/employee")

const fetchEmployeeService = async () => {
    try {
        return Employee.findAll()
    } catch (error) {
        throw error
    }
}

const createEmployeeService = async (data) => {
    try {
        const createEmployeeRes = await Employee.create(data)
        return createEmployeeRes[0]
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchEmployeeService,
    createEmployeeService
}