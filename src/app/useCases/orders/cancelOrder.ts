import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { CancelOrderParams } from './validations/orderInput';

export async function cancelOrder(req: Request<CancelOrderParams>, res: Response){
  const { orderId } = req.params;
  await Order.findByIdAndDelete(orderId);
  res.sendStatus(204);
}
