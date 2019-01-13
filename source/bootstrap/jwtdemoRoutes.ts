import authRouter from '../routes/authRoutes'

const routeSetup = (app: any) => {
    app.use("/auth", authRouter)
}

export default routeSetup