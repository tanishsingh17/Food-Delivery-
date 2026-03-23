import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/FoodRoutes.js'
import userRouter from './routes/UserRoutes.js'
import "dotenv/config.js"
import cartRouter from './routes/CartRoutes.js'
import orderRouter from './routes/OrderRoutes.js'

//App config
const app = express()
const port = 4000 


//middleware
app.use(express.json())
app.use(cors())


//DB connection
connectDB();


//API endpoints
app.use("/api/food", foodRouter )
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req, res) => {
     res.send("API is working")
})

app.listen(port,() => {
    console.log(`Server started on http://localhost:${port}`)

})