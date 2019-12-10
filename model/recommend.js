
var mongoose=require('./db.js');

//操作对象scheam
var RecommendSchema=mongoose.Schema({
  title:String,
  img:String,
  link:String,
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Recommend',RecommendSchema,'recommends');