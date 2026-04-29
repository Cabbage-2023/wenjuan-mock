const Mock = require('mockjs')

const getQuestionList=require('./data/getQuestionList')

const Random=Mock.Random

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
      const isStar=ctx.url.indexOf('isStar=true')>0
      return {
        errno: 0, // 第一层 errno，拦截器会检查它
        data: {   // 这就是拦截器最后返回给前端的东西
          list: getQuestionList({isDeleted,isStar}), // 当前页数据
          total: 100 // 总条数
        }
      }
    }
  }
]