import dotenv from "dotenv";
import process from "process";
dotenv.config();

export const PORT = process.env.PORT || 9002;
