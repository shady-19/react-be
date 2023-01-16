const express = require('express')
const router = express.Router()
// const { doctors } = require('../models')
// const { patient } = require('../models')
const { appointments } =require('../models')

router.get('/:doctorDoctorId',async (req, res)=>{
    const doctorDoctorId = req.params.doctorDoctorId
    const specificAppointment = await appointments.findAll({where:{ doctorDoctorId: doctorDoctorId}});
    res.json(specificAppointment)
})

router.get('/',async (req, res)=>{
    const doctorDoctorId = req.params.doctorDoctorId
    const specificAppointment = await appointments.findAll();
    res.json(specificAppointment)
})

router.post('/', async(req, res)=>{
    const appointment = req.body
    await appointments.create(appointment)
    res.json(appointment)
})


module.exports = router