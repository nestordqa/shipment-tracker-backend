// src/models/shipment.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class Shipment extends Model {
  public id!: number;
  public trackingCode!: string;
  public origin!: string;
  public destination!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Shipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    trackingCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Shipments',
    timestamps: true,
  }
);
