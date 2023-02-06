import { Request, Response } from 'express';
import { validatorSchema } from '../../helpers/validate-schema';
import { Order } from '../../models/Order';
import { ChangeStatusRequest, ChangeStatusSchema } from './validations/ChangeStatusSchema';
import { ChangeOrderStatusParams } from './validations/orderInput';

export async function changeOrderStatus(req: Request<ChangeOrderStatusParams, unknown, ChangeStatusRequest>, res: Response){
  const { orderId } = req.params;
  const { status } = validatorSchema(ChangeStatusSchema, req.body);
  await Order.findByIdAndUpdate(orderId, {status});
  res.sendStatus(204);
}
