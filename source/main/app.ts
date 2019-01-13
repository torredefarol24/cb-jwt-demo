import express from 'express'
import routeSetup from '../bootstrap/routes'
import databaseSetup from '../bootstrap/database'
import bodyParserSetup from '../bootstrap/body-parser'

class JWTDemoApp {
    public app: express.Application

    constructor() {
        this.app = express()
        this.setupBodyParser(this.app)
        this.setupAppRoutes(this.app)
        this.setupAppDatabase()
    }

    setupAppRoutes(app: any) {
        routeSetup(app)
    }

    setupAppDatabase() {
        databaseSetup
    }

    setupBodyParser(app: any) {
        bodyParserSetup(app)
    }
}

const jwtDemoApp = new JWTDemoApp()
export default jwtDemoApp.app