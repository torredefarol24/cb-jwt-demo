import routes from '../routes'

const routeSetup = (app: any) => {
    app.use("/auth", routes.auth)
    app.use("/users", routes.users)
    app.use("/products", routes.products)
}

export default routeSetup