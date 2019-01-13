import { Request, Response } from 'express'
import User from '../../models/User'

const getAllUsers = (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "",
        data: null
    }

    User.find()
        .then(users => {
            if (users.length > 0) {
                context.message = "Users Found"
                context.data = users
            } else {
                context.data = []
                context.message = "There are no users in the database"
            }

            return response.status(200).json(context)
        })
        .catch(err => {
            context.success = false
            context.message = err
            return response.status(500).json(context)
        })
}

export default getAllUsers