import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'ShipmentDB', 
    process.env.DB_USERNAME || 'sa', 
    process.env.DB_PASSWORD || 'YourStrong!Passw0rd', 
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mssql',
        port: 1433,
        dialectOptions: {
            options: {
                encrypt: false,
                trustServerCertificate: true,
            },
        },
    }
);
