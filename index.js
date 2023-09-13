const express=require('express')
const route=require('./routing/category')
const cors=require('cors');
const port=5000;
const app=express();
app.use(cors({
    origin:"*"
}))
app.use('/',route);
app.listen(port,()=>{
    console.log(`server is running on port no: ${port}`);
})
