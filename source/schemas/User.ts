import mongoose from 'mongoose'

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
        required: true
    }
}

const userSchema = new mongoose.Schema(userSchemaOptions)
export default userSchema