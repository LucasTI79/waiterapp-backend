import { Request, Response } from 'express';
import { validatorSchema } from '../../helpers/validate-schema';
import { Order } from '../../models/Order';
import { CreateOrderRequest, CreateOrderSchema } from './validations/CreateOrderSchema';

export async function createOrder(req: Request<unknown, unknown, CreateOrderRequest>, res: Response){
  const { table, products } = validatorSchema(CreateOrderSchema, req.body);
  const orders = await Order.create({
    table,
    products
  });
  res.json(orders);
}
