const route=require('express').Router();
const {home,bollywood,fitness,food,hollywood,technology}=require('../controller/article')
route.get('/',home);
route.get('/bollywood',bollywood);
route.get('/hollywood',hollywood);
route.get('/technology',technology);
route.get('/fitness',fitness);
route.get('/food',food);
module.exports=route;