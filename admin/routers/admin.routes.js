const router = require('express').Router();
const appointment = require('../../server/controllers/appointments.controller');
const department = require('../../server/controllers/departments.controller');

// compose login routes
router.get('/appointment', appointment.getAll);
router.get('/department', department.getAll);
router.put('/editAppointment/:appointmentId', appointment.update);

module.exports = router;
