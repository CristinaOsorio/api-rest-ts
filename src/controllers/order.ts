import { Request, Response } from "express"
import { getOrders } from "../services/order";
import { handleHttp } from "../utils/error.handle"

const getItems = async (req: Request, res: Response) => {
  try {
    res.send({
      data: "Esto solo lo pueden ver las personas con session."
    });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ORDERS');
  }
}

export { getItems }