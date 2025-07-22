import { Router } from 'express';
import { getShipments, createShipment } from '../controllers/shipmentController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Shipments
 *   description: Gestión de envíos
 */

/**
 * @swagger
 * /shipments:
 *   get:
 *     summary: Obtiene todos los envíos
 *     tags: [Shipments]
 *     responses:
 *       200:
 *         description: Lista de envíos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Shipment'
 *       500:
 *         description: Error del servidor
 */
router.get('/', getShipments);

/**
 * @swagger
 * /shipments:
 *   post:
 *     summary: Crea un nuevo envío
 *     tags: [Shipments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShipmentInput'
 *     responses:
 *       201:
 *         description: Envío creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shipment'
 *       400:
 *         description: Campos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/', createShipment);

export default router;
