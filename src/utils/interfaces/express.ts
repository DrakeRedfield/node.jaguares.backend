import { Request, Response } from "express";

export interface IRequest extends Request {
  uuid?: string;
  logger?: ILogger;
  winston?: ILogger;
  user?: {
    id: number;
    email: string;
    name: string;
    lastName: string;
  }
}

export interface IResponse extends Response {
}

interface ILogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  debug: (message: string) => void;
}
