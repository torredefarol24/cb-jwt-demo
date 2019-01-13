import mongoose from 'mongoose'
import mongo_connection_url from '../keys/mongo_connection_str'

const connOptions = {
    useNewUrlParser: true
}

const connectCallback = () => console.log("Mongo DB Connection Successful")
const errorCallback = (error: any) => console.error(`Mongo Conn Error ${error}`)

const connectToDB = mongoose.connect(mongo_connection_url, connOptions)
    .then(connectCallback)
    .catch(err => errorCallback(err))


export default connectToDB