const { createEmployeeService, fetchEmployeeService } = require("../services/employee.service")

const fetchEmployee = async (req, res) => {
    try {
        const fetchEmployeeRes = await fetchEmployeeService()
        res.status(200).json({ status: 200, data: fetchEmployeeRes })
    } catch (error) {
        console.log('==error==', error);
        res.status(error.status || 500).json({ error: error.message, data: {} })
    }
}

const createEmployee = async (req, res) => {
    try {
        const createEmployeeRes = await createEmployeeService(req.body)
        res.status(200).json({ status: 200, data: createEmployeeRes })
    } catch (error) {
        console.log('==error==', error);
        res.status(error.status || 500).json({ error: error.message, data: {} })
    }
}

module.exports = {
    fetchEmployee,
    createEmployee
}