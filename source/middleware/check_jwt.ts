import * as JWT from 'jsonwebtoken'
import { jwtTokenSecret } from '../keys/jwt_secret'
import { Request, Response, NextFunction } from 'express'
import redisClient from '../bootstrap/redis'

const checkValidJWT = (request: Request, response: Response, next: NextFunction) => {
    var context: any = {
        success: false,
        message: "Auth Failed / No Authorization in Headers"
    }

    if (!request.headers.authorization) {
        return response.status(404).json(context)
    } else {

        var token = request.headers.authorization.split(" ")[1]

        if (!token) {
            context.message = "Token Missing"
            return response.status(404).json(context)
        }

        var decodedToken: any = JWT.verify(token, jwtTokenSecret)

        if (!decodedToken) {
            context.message = "Token Invalid"
            return response.status(401).json(context)
        }


        var redisCallBack = (error: any, data: any) => {
            if (error) {
                console.error("REDIS ERROR ", error)
            }

            if (data) {
                var currentToken = data
                if (token === currentToken) next()
                else {
                    context.message = "Auth Failed / Revoked Token"
                    return response.status(401).json(context)
                }

            } else {
                context.message = "Auth Failed / No Token for Current User"
                return response.status(404).json(context)
            }
        }

        redisClient.get(`${decodedToken.userId}`, redisCallBack)

    }
}


export default checkValidJWT