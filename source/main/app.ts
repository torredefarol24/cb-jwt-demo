import express from 'express'
import routeSetup from '../bootstrap/routes'
import databaseSetup from '../bootstrap/database_setup'

class JWTDemoApp {
    public app: express.Application

    constructor() {
        this.app = express()
        this.setupAppRoutes(this.app)
        this.setupAppDatabase()
    }

    setupAppRoutes(appInstance: any) {
        routeSetup(appInstance)
    }

    setupAppDatabase() {
        databaseSetup
    }
}

const jwtDemoApp = new JWTDemoApp()
export default jwtDemoApp.app