var LunbotuModel=require('./model/lunbotu.js');
var RecommendModel=require('./model/recommend.js')
var PoplistModel=require('./model/poplist.js')
var NewlistModel=require('./model/newlist.js')
var SelllistModel=require('./model/selllist.js')
var PopdetailModel=require('./model/popdetail.js')
var CategorylistModel=require('./model/categorylist.js')
var ShangyilistModel=require('./model/shangyilist.js')
var KuzilistModel=require('./model/kuzilist.js')
var QunzilistModel=require('./model/qunzilist.js')
var NvxielistModel=require('./model/nvxielist.js')
var BaobaolistModel=require('./model/baobaolist.js')
var UserlistModel=require('./model/userlist.js')
var HomeLunModel=require('./model/homeLun.js')
var bodyParser = require('body-parser');
var session = require('express-session');
const express = require('express')
const app = express();
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})


//获取轮播图

app.get('/lunbotu',function(req,res){
		LunbotuModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
app.get('/homelun',function(req,res){
		HomeLunModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//获取recommends
app.get('/recommend',function(req,res){
		RecommendModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//获取shoplist
app.get('/shoplist',function(req,res){
	  const {page,sort}=req.query;
	  if(sort==='pop'){
		PoplistModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})
	  }else if(sort==='new'){
	  		NewlistModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})
	  }else{
	  	SelllistModel.find({},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})
	  }

})

//获取popdetail
app.get('/popdetail',function(req,res){
		const {itemId}=req.query
		PopdetailModel.find({itemId:itemId},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})

//获取目录列表
app.get('/categorylist',function(req,res){
		const {title}=req.query
		CategorylistModel.find({title},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})

//上衣请求
app.get('/shangyilist',function(req,res){
		const {type}=req.query
		ShangyilistModel.find({type},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//裤子请求
app.get('/kuzilist',function(req,res){
		const {type}=req.query
		KuzilistModel.find({type},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//裙子请求
app.get('/qunzilist',function(req,res){
		const {type}=req.query
		QunzilistModel.find({type},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//女鞋请求
app.get('/nvxielist',function(req,res){
		const {type}=req.query
		NvxielistModel.find({type},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//包包请求
app.get('/baobaolist',function(req,res){
		const {type}=req.query
		BaobaolistModel.find({type},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})
//注册
app.post('/register',function(req,res){
		const {username,password}=req.body
		var user = new UserlistModel({
        username:username,                
        password:password,                           
        
    });


		user.save({username:username,password:password},function(err){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				res.send({
					status:0,
					msg:'注册成功',
				})
				return;
			}
		})


})
//登录
app.post('/login',function(req,res){
		const {username,password}=req.body
		console.log(username,password)
		UserlistModel.find({username,password},function(err,doc){
			if(err){
				console.log('请求数据失败')
				res.send({
					status:-1,
					msg:'数据请求失败',
				})
				return;
			}else{
				console.log('请求数据成功')
				console.log(doc)
				res.send({
					status:0,
					data:doc,
				})
				return;
			}
		})


})


app.listen(4001)
