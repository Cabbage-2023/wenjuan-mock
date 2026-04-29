const Mock = require('mockjs')

const Random=Mock.Random

module.exports=[
  {
    url:'/api/test',
    method:'get',
    response(){
      return{
        errno:0,
        data:{
          id:1,
          name:'冬马和纱',
          name2:Random.cname(),
          age:18
        }
      }
    }
  }
]