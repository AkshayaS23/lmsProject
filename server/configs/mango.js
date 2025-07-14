import mongoose from "mongoose";

// connect to the MangoDb database

const connect = async ()=> {
    mongoose.connection.on('connected', ()=> console.log('Database Connected'))

    await mongoose.connect(`${process.env.MANGODB_URI}/lms`)
}

export default connect