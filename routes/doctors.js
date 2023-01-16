const express = require('express')
const router = express.Router()
const { doctors } = require('../models')
//const { patient } = require('../models')
const bcrypt = require('bcrypt')
//const {validateToken} = require('../middlewares/AuthMiddleware')

//const {sign, decode } = require('jsonwebtoken')

//Doctor
router.get("/", async(req, res)=>{
    const listOfDoctors = await doctors.findAll()
    res.json(listOfDoctors)
})
router.get('/byId/:docId',async (req, res)=>{
  const docId = req.params.docId
  const specificDoctor = await doctors.findByPk(docId);
  res.json(specificDoctor)
})
// router.post("/", validateToken, async (req, res) => {
router.post("/",  async (req, res) => { 
    const {doctorName, doctorSpecialization, doctorExperience, doctorEmail, doctorPassword} = req.body
    bcrypt.hash(doctorPassword,10).then((hash)=>{
      doctors.create({
        doctorName: doctorName,
        doctorSpecialization: doctorSpecialization,
        doctorExperience: doctorExperience,
        doctorEmail: doctorEmail,
        doctorPassword: hash
      })
      res.json("Successfully Registered")
    })

    // const doctor = req.body;
    // await doctors.create(doctor);
    // res.json(doctor);
  });module.exports = router