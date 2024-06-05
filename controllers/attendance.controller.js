const { fetchAttendanceService, insertAttendanceService } = require("../services/attendance.service")

const fetchAttendance = async (req, res) => {
    try {
        const empId = req.params.id
        const weekData = req.query.data || 'currentWeek'
        const weekCurrentOrPrev = weekData === 'currentWeek' ? 0 : 1
        const fetchAttendanceRes = await fetchAttendanceService(empId, weekCurrentOrPrev)
        res.status(200).json({ status: 200, data: fetchAttendanceRes })
    } catch (error) {
        console.log('==error==', error);
        res.status(error.status || 500).json({ error: error.message, data: {} })
    }
}

const insertAttendance = async (req, res) => {
    try {
        const createAttendanceRes = await insertAttendanceService(req.body)
        res.status(200).json({ status: 200, data: createAttendanceRes })
    } catch (error) {
        console.log('==error==', error);
        res.status(error.status || 500).json({ error: error.message, data: {} })
    }
}

module.exports = {
    fetchAttendance,
    insertAttendance
}