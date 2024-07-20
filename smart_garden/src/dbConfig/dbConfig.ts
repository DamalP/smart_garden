import * as mongoose from "mongoose";
import {connection} from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        mongoose.connection.on('connected', () => {
            console.log("MongoDB connected successfully!")
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running! '+ err);
            process.exit();
        });

    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}