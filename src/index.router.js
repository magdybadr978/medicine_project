import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import orderRouter from './modules/order/order.router.js'
import reviewsRouter from './modules/reviews/reviews.router.js'
import userRouter from './modules/user/user.router.js'
import { globalErrorHandling } from './utils/errorHandling.js'


const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
    app.use(`/auth`, authRouter)
    app.use(`/user`, userRouter)
    app.use(`/reviews`, reviewsRouter)
    app.use(`/order`, orderRouter)
  

    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(globalErrorHandling)

    connectDB()

}



export default initApp