const Mock = require('mockjs')
const Random=Mock.Random

//生成组件列表
function getComponentList(){
  return [
    //Info
    {
      fe_id:'c1',//由于统计页左侧和中间需要数据完全一致，所以要写死fe_id，不能随机生成
      type:'questionInfo',
      title:'问卷信息',
      isHidden:false,
      isLocked:false,
      props:{title:'问卷信息，喵。',desc:'问卷描述'}
    },
    //title
    {
      fe_id:'c2',
      type:'questionTitle',//组件类型不能重复，前后端统一好
      title:'标题',
      isHidden:false,
      isLocked:false,
      props:{text:'标题，喵。',level:1,isCenter:false}
    },
    //input
    {
      fe_id:'c3',
      type:'questionInput',
      title:'输入框1',
      isHidden:false,
      isLocked:false,
      props:{title:'输入框标题',placeholder:'冬马和纱'}
    },
    //input
    {
      fe_id:'c4',
      type:'questionInput',
      title:'输入框2',
      isHidden:false,
      isLocked:false,
      props:{title:'输入框标题',placeholder:'牧濑红莉栖'}
    },
      //Textarea
      {
      fe_id:'c5',
      type:'questionTextarea',
      title:'多行输入',
      isHidden:false,
      isLocked:false,
      props:{title:'输入框标题',placeholder:'柳木诗梦'}
    },
    //paragraph
    {
      fe_id:'c6',
      type:'questionParagraph',
      title:'段落',
      isHidden:false,
      isLocked:false,
      props:{text:'段落，喵。\n段落，喵。'}
    },
    //Radio
    {
      fe_id:'c7',
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
      fe_id:'c8',
      type:'questionCheckbox',
      title:'多选',
      isHidden:false,
      isLocked:false,
      props:{
        title:"多选标题",
        isVertical:false,
        list:[
          {value:"1",text:"选项1",checked:true},
          {value:"2",text:"选项2",checked:false},
          {value:"3",text:"选项3",checked:false},
        ],
      }
    }
  ]
}

module.exports=getComponentList
