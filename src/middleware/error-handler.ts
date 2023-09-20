import { StatusCodes } from "http-status-codes";
import CustomAPIError from "../errors/custom-api";
import { Express, Request, Response, NextFunction } from "express";
const errorHandlerMiddleware = (
    err: CustomAPIError,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    if (err instanceof CustomAPIError) {
        return res
            .status(err.statusCode ? err.statusCode : 400)
            .json({ msg: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;
