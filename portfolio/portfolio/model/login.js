import mongoose from "mongoose";

const {Schema} = mongoose;

const loginSchema = new Schema({
    email: String,
    password: String
})

export default mongoose.model("Login", loginSchema);