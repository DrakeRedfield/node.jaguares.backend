import { NextFunction } from "express";
import { IRequest, IResponse } from "../interfaces/express";
import { getDecodedPayloadJWT } from "../services/auth";
import { errorLoggerHandler } from "../services/error";

export const authAdminMiddleware = (req: IRequest, res: IResponse, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')?.[1];
  if (!token) return next();
  try {
    const decodedData = getDecodedPayloadJWT(token);
    req.user = decodedData as any;
  } catch (e) {
    errorLoggerHandler(e, {logStack: false, uuid: req.uuid})
  }
  next();
};
