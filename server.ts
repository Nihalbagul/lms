import { app } from "./app";
require("dotenv").config();
// create server here

app.listen(process.env.PORT,() =>{
    console.log(`Server is connected with the port ${process.env.PORT}`)
});