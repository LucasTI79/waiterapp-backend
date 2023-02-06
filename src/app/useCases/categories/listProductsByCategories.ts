import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { ListProductsByCategoryParams } from './validations/categoryInput';

export async function listProductsByCategory(req: Request<ListProductsByCategoryParams>, res: Response){
  const products = await Product.find().where('category').equals(req.params.categoryId);
  res.json(products);
}
