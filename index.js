const Koa = require('koa')
const Router = require('koa-router')

const mockList=require('./mock/index')



const app=new Koa()
const router=new Router()

//模拟网络加载延迟
async function getRes(fn,ctx){
  return new Promise(resolve=>{
    setTimeout(()=>{
      const res=fn(ctx)
      resolve(res)
    },1000)
  })
}

//注册mock服务
mockList.forEach(item=>{
  const {url,method,response}=item
  router[method](url, async (ctx)=>{
    const res=await getRes(response,ctx)//模拟网络加载延迟
    ctx.body=res
  })
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3001)//启动mock服务
