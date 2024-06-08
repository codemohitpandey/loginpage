import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/";

mongoose.connect(url);

export default mongoose;

