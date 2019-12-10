var LunbotuModel=require('./model/lunbotu.js');
const LunbotuList=require('./model/lunbotudatas.js');


//增加数据到shop集合
//首先实例化model
var s;
//定义一个增加商铺列表的函数
function AddLunbotuList(userList){

	LunbotuList.map(item=>{
		//实例化数据对象
		s=new LunbotuModel(item);
		//保存数据
		s.save(function(err){
		if(err){
			console.log(err);
			return;

		}
	console.log('增加数据成功');
})
	})
}
//调用上述定义的函数
AddLunbotuList(LunbotuList);
