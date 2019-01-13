import mongoose from 'mongoose'
import userSchema, { user_Interface } from '../schemas/User';

const User = mongoose.model<user_Interface>('User', userSchema)
export default User