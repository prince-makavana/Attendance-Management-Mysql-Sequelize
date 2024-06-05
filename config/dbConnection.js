const Sequelize = require('sequelize')
const dbConfig = require('./config.json')['development'];

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
)

module.exports = { sequelize }