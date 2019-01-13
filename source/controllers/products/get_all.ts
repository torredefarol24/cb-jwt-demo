import { Request, Response } from 'express'

const dummyProducts = [
    {
        id: 1,
        name: "Prod1"
    },
    {
        id: 2,
        name: "Prod2"
    }
]

const getAllProducts = (request: Request, resposne: Response) => {
    var context = {
        success: true,
        message: 'Fetched Dummy Products',
        data: dummyProducts
    }
    return resposne.status(200).json(context)
}

export default getAllProducts