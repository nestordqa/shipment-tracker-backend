export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: any;
}

export function successResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
    return {
        success: true,
        message,
        data,
    };
}

export function errorResponse(message = 'Internal server error', errors?: any): ApiResponse {
    return {
        success: false,
        message,
        errors,
    };
}
