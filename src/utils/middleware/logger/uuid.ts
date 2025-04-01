import  crypto from 'crypto';
import { NextFunction } from 'express';
import { IRequest, IResponse } from '../../interfaces/express';

/**
 * Set UUID v4
 * @param {Request} req Express request
 * @param {Response} res Express response
 * @param {function} next Express next function
 */
export const setUUID = (req: IRequest, res: IResponse, next: NextFunction) => {
  req.uuid = crypto.randomUUID(); // Set UUID v4
  next();
}

/**
 * Logging UUID v4
 * @param {Request} req Express request
 * @param {Response} res Express response
 * @param {function} next Express next function
 */
export const loggingUUID = (req: IRequest, res: IResponse, next: NextFunction) => {
  // Inyect uuid into logger
  req.logger = {
    info: (message) => req.winston?.info(
      `[${req.uuid}] - ${typeof message === 'object' ? JSON.stringify(message) : message}`),
    warn: (message) => req.winston?.warn(
      `[${req.uuid}] - ${typeof message === 'object' ? JSON.stringify(message) : message}`),
    error: (message) => req.winston?.error(
      `[${req.uuid}] - ${typeof message === 'object' ? JSON.stringify(message) : message}`),
    debug: (message) => req.winston?.debug(
      `[${req.uuid}] - ${typeof message === 'object' ? JSON.stringify(message) : message}`),
  };
  next();
}