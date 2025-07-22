/**
 * @swagger
 * components:
 *   schemas:
 *     Shipment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         trackingCode:
 *           type: string
 *           example: "TRACK123"
 *         origin:
 *           type: string
 *           example: "Lima"
 *         destination:
 *           type: string
 *           example: "Bogotá"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     ShipmentInput:
 *       type: object
 *       required:
 *         - trackingCode
 *         - origin
 *         - destination
 *       properties:
 *         trackingCode:
 *           type: string
 *           example: "TRACK123"
 *         origin:
 *           type: string
 *           example: "Lima"
 *         destination:
 *           type: string
 *           example: "Bogotá"
 */
