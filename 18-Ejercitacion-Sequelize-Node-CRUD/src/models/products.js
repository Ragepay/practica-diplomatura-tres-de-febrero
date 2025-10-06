import { DataTypes } from 'sequelize';
import { sequelize } from '../conexion/connection.js';


const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  SupplierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  CategoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  QuantityPerUnit: {
    type: DataTypes.STRING(40),
    allowNull: false,
    defaultValue: '10 boxes x 20 bags'
  },
  UnitPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0.0
  },
  UnitsInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  UnitsOnOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  ReorderLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  Discontinued: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  tableName: 'products',
  timestamps: false
});

export default Product;






