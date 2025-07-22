module.exports = {
    development: {
        username: 'sa',
        password: 'YourStrong!Passw0rd',
        database: 'ShipmentDB',
        host: 'localhost',
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: false,
                trustServerCertificate: true,
            }
        },
        port: 1433
    }
};
