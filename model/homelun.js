
var mongoose=require('./db.js');

//操作对象scheam
var HomeLunSchema=mongoose.Schema({
  list:Array  
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('HomeLun',HomeLunSchema,'homeLun');