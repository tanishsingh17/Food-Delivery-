import express from 'express'
import AuthMiddleware from '../middleware/Auth.js'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/OrderControllers.js'


const orderRouter = express.Router();

orderRouter.post("/place", AuthMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders",AuthMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)


export default orderRouter