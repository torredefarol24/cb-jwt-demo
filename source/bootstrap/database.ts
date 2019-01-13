import mongoose from 'mongoose'
import mongo_connection_url from '../keys/mongo_connection_str'

const connOptions = {
    useNewUrlParser: true
}

const connectToDB = mongoose.connect(mongo_connection_url, connOptions)
    .then(() => console.log("Mongo DB Connection Successful"))
    .catch(err => console.error(`Mongo Conn Error ${err}`))


export default connectToDB