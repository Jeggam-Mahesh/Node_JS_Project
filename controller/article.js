const data=require('../data')
const home=(req,res)=>{
    res.send(data)
}
const bollywood=(req,res)=>{
    const bdata=data.filter((item)=>item.category==='bollywood')
    res.send(bdata)
}
const hollywood=(req,res)=>{
    const hdata=data.filter((item)=>item.category==='hollywood')
    res.send(hdata)
}
const technology=(req,res)=>{
    const tdata=data.filter((item)=>item.category==='technology')
    res.send(tdata) 
}
const fitness=(req,res)=>{
    const fitdata=data.filter((item)=>item.category==='fitness')
    res.send(fitdata)
}
const food=(req,res)=>{
    const fdata=data.filter((item)=>item.category==='food')
    res.send(fdata)
}
module.exports={home,bollywood,hollywood,technology,fitness,food}