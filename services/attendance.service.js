const { Sequelize, where } = require("sequelize")
const Attendances = require("../models/attendance")
const moment = require('moment')
const Employee = require("../models/employee")

const fetchAttendanceService = async (empId, weekCurrentOrPrev) => {
    try {
        const attendanceRes = await Attendances.findAll({
            include: [{
                model: Employee,
                as: 'Employee',
                required: false,
                where: {
                    id: empId
                }
            }],
            where: {
                empId,
                date: {
                    [Sequelize.Op.gte]: Sequelize.fn('DATE_SUB', new Date(), Sequelize.literal(`INTERVAL ${weekCurrentOrPrev + 1} WEEK`))
                },
            }
        })
        let totalHours = 0
        let totalMinutes = 0
        attendanceRes.forEach(att => {
            const moment1 = moment(att.timeIn, "HH:mm")
            const moment2 = moment(att.timeOut, "HH:mm")
            const duration = moment.duration(moment2.diff(moment1))
            totalHours += duration.hours()
            totalMinutes += duration.minutes()
        })
        return {
            Name: attendanceRes[0].Employee.name,
            totalHours: `${totalHours}:${totalMinutes}`
        }
    } catch (error) {
        throw error
    }
}

const insertAttendanceService = async (data) => {
    try {
        const insertAttendanceRes = await Attendances.create(data)
        return insertAttendanceRes[0]
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchAttendanceService,
    insertAttendanceService
}