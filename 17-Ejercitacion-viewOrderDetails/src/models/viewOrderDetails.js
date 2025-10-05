import { DataTypes } from 'sequelize';
import { sequelize } from '../conexion/connection.js';

const ViewOrderDetails = sequelize.define('ViewOrderDetails', {
    OrderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ProductID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProductName: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    UnitPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    Quantity: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
    tableName: 'vistaorderdetails',
    timestamps: false,
});

export default ViewOrderDetails;
