const express = require('express')
require('dotenv').config()

const employeeRoute = require('./routes/employee.route')
const attendanceRoute = require('./routes/attendance.route')

const app = express()
const port = process.env.PORT || 3030

app.use(express.json())
app.use(employeeRoute)
app.use(attendanceRoute)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})