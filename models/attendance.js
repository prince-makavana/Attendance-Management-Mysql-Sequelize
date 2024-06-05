const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");
const Employee = require("./employee");

const Attendances = sequelize.define('Attendances', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  empId: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  },
  timeIn: {
    type: Sequelize.TIME
  },
  timeOut: {
    type: Sequelize.TIME
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

Attendances.belongsTo(Employee, {
  foreignKey: 'empId',
  as: 'Employee',
})
module.exports = Attendances