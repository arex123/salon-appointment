const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Customer = sequelize.define('customer',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photo:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Customer