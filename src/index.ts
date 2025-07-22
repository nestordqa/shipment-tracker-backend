import express from 'express';
import cors from 'cors';
import { sequelize } from './database'; // ✅ usa el mismo sequelize
import shipmentRoutes from './routes/shipments';
import errorMiddleware from './middleware/error.middleware';
import { swaggerOptions } from './swagger/swaggerOptions';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
const port = process.env.PORT || 3000;

const specs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(express.json());

// Montar Swagger UI en /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/shipments', shipmentRoutes);

// Middleware errores genérico
app.use(errorMiddleware);

// ✅ Probar conexión y luego levantar el servidor
sequelize.authenticate()
    .then(() => {
        console.log('✅ DB connected');
        app.listen(port, () => {
            console.log(`🚀 Server on http://localhost:${port}`);
            console.log(`Swagger docs at http://localhost:${port}/api-docs`);
        });
    })
    .catch((err) => {
        console.error('❌ DB connection failed', err);
    });
