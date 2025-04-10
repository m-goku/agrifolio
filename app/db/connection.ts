import mongoose from "mongoose";
import { logger } from "../services/loggerService";

export async function  connectDB(){
    try {
        const connection = await  mongoose.connect("mongodb+srv://WWdrXxvJ:sp2hSUUNBBwOgsAb@eu-central-1.2dfzz.mongodb.net/agrifolio-zFSE")
         logger.info("DB Connected")
         return true
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}