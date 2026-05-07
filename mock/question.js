const Mock = require('mockjs')
const Random=Mock.Random

const getQuestionList=require('./data/getQuestionList')
const getComponentList=require('./data/getComponentList')

module.exports=[
  {
    //获取单个问卷详情
    url:'/api/question/:id',
    method:'get',
    response(){
      return{
        errno:0,
        data:{
          id:Random.id(),
          title:Random.ctitle(),
          desc:'问卷描述',
          js:'',
          css:'',
          isPublished:true,
          componentList:getComponentList(),
        }
      }
    }
  },
  {
    //创建问卷
    url:'/api/question',
    method:'post',
    response(){
      return{
        errno:0,
        data:{
          id:Random.id(),
        }
      }
    }
  },
  {
    // 获取问卷列表
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const {url=''}=ctx
      const isDeleted=ctx.url.indexOf('isDeleted=true')>0
      // 🌟 改动点：不要直接给 isStar 赋默认值 false
      // 只有当 URL 里明确出现 isStar=true 时，我们才传 true 给函数
      // 否则，我们传 undefined，让函数去随机生成
      let isStar = undefined
      if (url.indexOf('isStar=true') >= 0) isStar = true
      if (url.indexOf('isStar=false') >= 0) isStar = false

      const page=parseInt(ctx.query.page||1)
      const pageSize=parseInt(ctx.query.pageSize||10)

      return {
        errno: 0, // 第一层 errno，拦截器会检查它
        data: {   // 这就是拦截器最后返回给前端的东西
          list: getQuestionList({len:pageSize,isDeleted,isStar}), // 当前页数据
          total: 100 // 总条数
        }
      }
    }
  },
  {
    // 更新问卷
    url:'/api/question/:id',
    method:'patch',
    response(){
      return{
        errno:0,
      }
    }
  },
  {
    //复制问卷
    url:'/api/question/duplicate/:id',
    method:'post',
    response(){
      return{
        errno:0,
        data:{
          id:Random.id(),
        }
      }
    }
  },
  {
    //批量彻底删除
    url:'/api/question',
    method:'delete',
    response(){
      return{
        errno:0,
      }
    }
  }
]