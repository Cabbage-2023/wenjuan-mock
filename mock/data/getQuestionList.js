//获取或生成问卷列表
const Mock = require('mockjs')
const Random=Mock.Random

function getQuestionList(opt={}){
  const {len=10,isDeleted=false,isStar}=opt  
  const List=[]
  for(let i=0;i<len;i++){ 
    List.push({
      _id:Random.id(),
      title:Random.ctitle(),
      isPublished:Random.boolean(),
      // 🌟 核心逻辑改动：
      // 如果 opt 传入了 isStar (true 或 false)，就用传入的值
      // 如果 opt 没传 isStar (undefined)，就随机生成 boolean
      isStar: isStar !== undefined ? isStar : Random.boolean(),
      answerCount:Random.integer(0,100),
      createAt:Random.datetime('MM-dd HH:mm:ss'),
      isDeleted,
    })
  }
  return List
}

module.exports=getQuestionList