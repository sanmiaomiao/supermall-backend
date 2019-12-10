var mongoose=require('./db.js');

//操作对象scheam
var PopdetailSchema=mongoose.Schema({
	
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Popdetail',PopdetailSchema,'popdetail');