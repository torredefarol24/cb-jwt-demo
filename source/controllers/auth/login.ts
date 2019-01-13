import { Request, Response } from 'express'
import User from '../../models/User'

const loginUser = async (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "Login Successfull",
        data: null
    }

    var findByEmailOpts = {
        email: request.body.email
    }

    var foundUser = await User.find().where(findByEmailOpts)

    //No Time for Bcrypt.compare
    if (foundUser[0].password === request.body.password) {
        context.success = true
        context.message = "Auth Success"
        context.data = "generate_token_now"
        return response.status(200).json(context)
    } else {
        context.success = false
        context.message = "Auth Failed / Incorrect Password"
        return response.status(401).json(context)
    }
}

export default loginUser