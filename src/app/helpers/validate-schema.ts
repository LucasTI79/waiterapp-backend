import { ZodSchema, ZodError } from 'zod';
import { ErrorSchema, ValidationSchemaError } from '../errors/validation-schema.error';

export const validatorSchema = <T>(schema: ZodSchema, payload: T) => {
  try {
    schema.parse(payload);
    return payload;
  } catch (error) {
    const typedError = error as ZodError;
    const errors: ErrorSchema[] = [];

    typedError.errors.forEach(({ path: field, message }) => {
      errors.push({
        field,
        message,
      });
    });

    throw new ValidationSchemaError('ERROR_SCHEMA', errors);
  }
};
