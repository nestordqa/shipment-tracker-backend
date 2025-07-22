import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shipment Tracker API',
            version: '1.0.0',
            description: 'API para gestionar envíos - Documentación generada con Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local de desarrollo',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
