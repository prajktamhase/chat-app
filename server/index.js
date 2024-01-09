import dotenv from "dotenv"
import express from "express"
import md5 from "md5"
import mongoose from "mongoose"
dotenv.config

import User from "./Models/User";

const app = express ();
app.use(express.json());

const connectDB = async ()=>{
    
}