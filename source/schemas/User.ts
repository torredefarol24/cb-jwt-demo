import mongoose from 'mongoose'

interface user_Base_Interface {
    email: String,
    password: String,
    currentJWT: String
}

export interface user_Interface extends user_Base_Interface, mongoose.Document {

}



const userSchemaOptions = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    currentJWT: {
        type: String,
        default: null
    }
}

const collectionOptions = {
    collection: "user"
}

const userSchema = new mongoose.Schema(userSchemaOptions, collectionOptions)
export default userSchema