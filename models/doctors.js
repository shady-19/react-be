const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) =>{

    const doctors = sequelize.define("doctors",{
        doctorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        doctorName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doctorSpecialization: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doctorExperience: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doctorEmail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          doctorPassword: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    })

  doctors.associate = (models) =>{
    doctors.hasMany(models.appointments,{
      onDelete: "cascade"
    })
  }

    return doctors
}