const { fetchAttendance, insertAttendance } = require('../controllers/attendance.controller')

const attendanceRoute = require('express').Router()

/**
 * Get Attendance API Path
 * /attendance/:id?data=currentWeek
 * 
 * */
attendanceRoute.get('/attendance/:id', fetchAttendance)
attendanceRoute.post('/attendance', insertAttendance)

module.exports = attendanceRoute