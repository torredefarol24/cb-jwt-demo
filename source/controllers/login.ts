import { Request, Response } from 'express'


const loginUser = (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "Login Successfull",
        data: []
    }

    return response.status(200).json(context)
}

export default loginUser