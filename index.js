require("dotenv").config();
console.log(process.env.MONGO_URL);
const express = require("express");
const mongoose = require("mongoose");

const {userRouter} = require("./Router/user");
const {courseRouter} = require("./Router/course");
const {adminRouter} = require("./Router/admin");

const app = express() ;
app.use(express.json());

app.use("/api/v1/user" , userRouter) ;
app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/course", courseRouter );

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening at the port 3000");
}
main()