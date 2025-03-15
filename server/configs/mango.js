import mangoose from "mongoose";

// connect to the MangoDb database

const connect = async ()=> {
    mangoose.connection.on('connected', ()=> console.log('Database Connected'))

    await mangoose.connect(`${process.env.MANGODB_URI}/lms`)
}

export default connect