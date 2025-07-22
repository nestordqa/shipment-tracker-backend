// src/controllers/shipmentController.ts
import { Request, Response, NextFunction } from 'express';
import { Shipment } from '../models/shipment';
import HttpException from '../exceptions/HttpException';
import { successResponse } from '../utils/apiResponse';

export const getShipments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shipments = await Shipment.findAll();
        res.status(200).json(successResponse(shipments));
    } catch (err) {
        next(new HttpException(500, 'Error fetching shipments'));
    }
};

export const createShipment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { trackingCode, origin, destination } = req.body;

    if (
        !trackingCode || typeof trackingCode !== 'string' || trackingCode.trim() === '' ||
        !origin || typeof origin !== 'string' || origin.trim() === '' ||
        !destination || typeof destination !== 'string' || destination.trim() === ''
    ) {
        return next(new HttpException(400, 'Todos los campos son obligatorios y deben ser strings no vacíos.'));
    }

        const newShipment = await Shipment.create({ trackingCode, origin, destination });
        res.status(201).json(successResponse(newShipment, 'Shipment created successfully'));
    } catch (err) {
        next(new HttpException(500, 'Error creating shipment'));
    }
};
