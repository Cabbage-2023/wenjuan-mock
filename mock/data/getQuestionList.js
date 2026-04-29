//获取或生成问卷列表
const Mock = require('mockjs')
const Random=Mock.Random

function getQuestionList(opt={}){
  const {len=10,isDeleted=false,isStar=false}=opt  
  const List=[]
  for(let i=0;i<len;i++){ 
    List.push({
      _id:Random.id(),
      title:Random.ctitle(),
      isPublished:Random.boolean(),
      isStar,
      answerCount:Random.integer(0,100),
      createAt:Random.datetime('MM-dd HH:mm:ss'),
      isDeleted,
    })
  }
  return List
}

module.exports=getQuestionList