// src/middleware/error.middleware.ts
import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";
import { errorResponse } from "../utils/apiResponse";

function errorMiddleware(
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    console.error('[ERROR]', error);

    res.status(status).json(errorResponse(message));
}

export default errorMiddleware;
