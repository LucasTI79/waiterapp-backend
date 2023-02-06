import { Request, Response } from 'express';
import { validatorSchema } from '../../helpers/validate-schema';
import { Product } from '../../models/Product';
import { CreateProductRequest, CreateProductSchema } from './validations/createProduct';

export async function createProduct(req: Request<unknown, unknown, CreateProductRequest>, res: Response){
  try {
    const imagePath = req.file?.filename;

    const { name, description, price, category, ingredients } = validatorSchema(CreateProductSchema, {
      ...req.body,
      imagePath
    });

    const product = await Product.create({
      name,
      description,
      price,
      category,
      ingredients
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
