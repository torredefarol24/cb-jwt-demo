import authRouter from '../routes/auth_routes'
import userRouter from '../routes/user_routes'

const routeSetup = (app: any) => {
    app.use("/auth", authRouter)
    app.use("/users", userRouter)
}

export default routeSetup