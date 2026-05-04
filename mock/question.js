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
          componentList:[
            //title
            {
              fe_id:Random.id(),
              type:'questionTitle',//组件类型不能重复，前后端统一好
              title:'标题',
              isHidden:false,
              isLocked:false,
              props:{text:'标题，喵。',level:1,isCenter:false}
            },
            //input
            {
              fe_id:Random.id(),
              type:'questionInput',
              title:'输入框1',
              isHidden:false,
              isLocked:false,
              props:{title:'输入框标题',placeholder:'冬马和纱'}
            },
            //input
            {
              fe_id:Random.id(),
              type:'questionInput',
              title:'输入框2',
              isHidden:false,
              isLocked:false,
              props:{title:'输入框标题',placeholder:'牧濑红莉栖'}
            },
             //Textarea
             {
              fe_id:Random.id(),
              type:'questionTextarea',
              title:'多行输入',
              isHidden:false,
              isLocked:false,
              props:{title:'输入框标题',placeholder:'柳木诗梦'}
            },
            //paragraph
            {
              fe_id:Random.id(),
              type:'questionParagraph',
              title:'段落',
              isHidden:false,
              isLocked:false,
              props:{text:'段落，喵。'}
            },
            //Radio
            {
              fe_id:Random.id(),
              type:'questionRadio',
              title:'单选',
              isHidden:false,
              isLocked:false,
              props:{
                title: '单选标题',
                  isVertical: false,
                  options: [
                    {value:'item1',text:'选项1',},
                    {value:'item2',text:'选项2',},
                    {value:'item3',text:'选项3',},
                  ],
                  value: '',
              }
            },
            //Checkbox
            {
              fe_id:Random.id(),
              type:'questionCheckbox',
              title:'多选',
              isHidden:false,
              isLocked:false,
              props:{
                title:"多选标题",
                isVertical:false,
                list:[
                  {value:"1",text:"选项1",checked:false},
                  {value:"2",text:"选项2",checked:false},
                  {value:"3",text:"选项3",checked:false},
                ],
              }
            }
          ]
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