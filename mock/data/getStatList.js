//生成统计列表

const Mock = require('mockjs')
const Random=Mock.Random

const getComponentList = require('./getComponentList')

module.exports=function getStatList(len=10){
  const componentList=getComponentList()

  const res=[]

  for(let i=0;i<len;i++){
    //一个用户的答卷
    const stat={
      _id:Random.id(),
    }

    //增加各个组件的id和value
    componentList.forEach(item=>{
      const {fe_id,type,props}=item

      switch(type){
        case 'questionInput':
          stat[fe_id]=Random.ctitle()
          break
        case 'questionTextarea':
          stat[fe_id]=Random.ctitle()
          break
        case 'questionRadio':
          stat[fe_id]=props.options[0].text
          break
        case 'questionCheckbox':
          stat[fe_id]=`${props.list[0].text},${props.list[1].text}`
          break
        
      }
    })
    
     res.push(stat)
  }

  return res
}
