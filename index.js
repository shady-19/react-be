const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

 const db = require("./models");

//Routes

const doctorRoutes = require('./routes/doctors')
app.use('/doctors',doctorRoutes)

// const PatientRoutes = require('./routes/PatientRoute')
// app.use('/patients',PatientRoutes)

const AppointmentRoutes = require('./routes/appointments')
app.use('/appointments',AppointmentRoutes)


db.sequelize.sync().then(() => {
    app.listen(5001,()=>{
        console.log("Server listening on 5001")
    })
});