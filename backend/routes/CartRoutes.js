import express from 'express'
import {addToCart, removeFromCart, getCart} from '../controllers/CartControllers.js'
import AuthMiddleware from '../middleware/Auth.js';

const cartRouter = express.Router();

cartRouter.post("/add", AuthMiddleware, addToCart)
cartRouter.post("/remove", AuthMiddleware, removeFromCart)
cartRouter.post("/get", AuthMiddleware, getCart)



export default cartRouter;