import { logger } from "./winston";

interface IErrorHandlerOptions {
  logStack?: boolean;
  uuid?: string;
}

export const errorLoggerHandler = (e: any, options?: IErrorHandlerOptions) => {
  const uuidStart = options?.uuid ? `[${options?.uuid}] `: '';
  if (typeof e === 'string') {
    logger.error(uuidStart + e);
  }
  if (e instanceof Error) {
    logger.error(uuidStart + e.message);
    if (e.stack && options?.logStack) logger.error(uuidStart + e.stack);
  }
};
