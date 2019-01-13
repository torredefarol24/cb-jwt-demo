import * as JWT from 'jsonwebtoken'
import { jwtTokenSecret, jwtRefreshSecret } from '../keys/jwt_secret'

export const createToken = (data: any) => {
    var signVals = {
        userId: data
    }

    var expireOpts = {
        expiresIn: 60 * 60 * 24 // 1 day
    }

    var result = JWT.sign(signVals, jwtTokenSecret, expireOpts)
    return result
}

export const createRefreshToken = (data: any) => {
    var signVals = {
        userId: data
    }

    var expireOpts = {
        expiresIn: 60 * 60 * 24 * 60 // 2 months
    }

    var result = JWT.sign(signVals, jwtRefreshSecret, expireOpts)
    return result
}