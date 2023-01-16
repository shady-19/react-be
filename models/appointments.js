module.exports = (sequelize, DataTypes) =>{

    const appointments = sequelize.define("appointments",{
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          mobile: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          time: {
            type: DataTypes.TIME,
            allowNull: false,
          },
    })
    return appointments
}