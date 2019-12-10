//连接数据库

var mongoose=require('mongoose');
DB_URL='mongodb://localhost:27017/shopping';
mongoose.connect(DB_URL,{ useNewUrlParser: true },function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('连接数据库成功')
});

module.exports=mongoose;