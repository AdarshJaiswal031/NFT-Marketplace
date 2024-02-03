const express=require("express")
const app=express()
const bodyP=require("body-parser")
const {connectDB}=require("./connectToMongo")
const {ActiveItemModel}=require("./transferSchema")
app.use(bodyP.json())
// Middleware to allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace * with your specific domain if required
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
app.get("/activeItems",async (req,res)=>{
await connectDB();
const allData = await ActiveItemModel.find()
res.status(200);
res.send(allData)
})
app.listen(8000)