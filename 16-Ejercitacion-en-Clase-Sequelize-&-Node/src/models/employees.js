import { DataTypes } from 'sequelize';
import { sequelize } from '../conexion/connection.js';

const Employee = sequelize.define("Employee", {
  EmployeeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  LastName: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  FirstName: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  Title: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  TitleOfCourtesy: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  BirthDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  HireDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Address: {
    type: DataTypes.STRING(60),
    allowNull: true
  },
  City: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  Region: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  PostalCode: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  Country: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  HomePhone: {
    type: DataTypes.STRING(24),
    allowNull: true
  },
  Extension: {
    type: DataTypes.STRING(4),
    allowNull: true
  },
  Photo: {
    type: DataTypes.BLOB("long"), // longblob
    allowNull: true
  },
  Notes: {
    type: DataTypes.TEXT("long"), // longtext
    allowNull: true
  },
  ReportsTo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  PhotoPath: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: "employees",
  timestamps: false
});

export default Employee;