var mongoose=require('./db.js');

//操作对象scheam
var SelllistSchema=mongoose.Schema({
	"offset":Number,
	"mbook":String,
	"page":Number,
	"title":String,
	"list":Array
}
)


//定义数据库模型 操作数据库
module.exports=mongoose.model('Selllist',SelllistSchema,'selllist');