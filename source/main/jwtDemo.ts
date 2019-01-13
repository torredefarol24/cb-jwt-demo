import express from 'express'
import routeSetup from '../bootstrap/jwtdemoRoutes'

class JWTDemoApp {
    public app: express.Application

    constructor() {
        this.app = express()
        this.setupAppRoutes(this.app)
    }

    setupAppRoutes(appInstance: any) {
        routeSetup(appInstance)
    }
}

const jwtDemoApp = new JWTDemoApp()
export default jwtDemoApp.app