const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Employee = sequelize.define('Employees', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

module.exports = Employee