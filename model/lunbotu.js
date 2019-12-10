
var mongoose=require('./db.js');

//操作对象scheam
var LunbotuSchema=mongoose.Schema({
  url:String,  
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Lunbotu',LunbotuSchema,'lunbotus');