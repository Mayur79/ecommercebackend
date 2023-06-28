import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL;
        const conn = await mongoose.connect(url);
        console.log(`Database connected successfully at ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error is MongoDb ${error}`);
    }
}

export default connectDB;