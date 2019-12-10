var mongoose=require('./db.js');

//操作对象scheam
var QunzilistSchema=mongoose.Schema({
	"type":String,	
	"docs":Array
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Qunzilist',QunzilistSchema,'qunzilist');