var mongoose=require('./db.js');

//操作对象scheam
var UserlistSchema=mongoose.Schema({
	"username":String,
	"password":String,
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Userlist',UserlistSchema,'userlist');