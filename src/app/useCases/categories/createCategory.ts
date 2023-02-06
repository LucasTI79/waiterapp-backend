import { Request, Response } from 'express';
import { validatorSchema } from '../../helpers/validate-schema';
import { Category } from '../../models/Category';
import { CreateCategoryRequest, CreateCategorySchema } from './validations/createCategory';

export async function createCategory(req: Request<unknown, unknown, CreateCategoryRequest>, res: Response){
  try {
    const { body } = req;
    const { name, icon } = validatorSchema(CreateCategorySchema, body);
    const category = await Category.create({
      name,
      icon
    });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
