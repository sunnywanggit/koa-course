const Koa = require('koa')
//安装json模块
const json = require('koa-json')
const KoaRouter = require('koa-router')


const app = new Koa()
const router = new KoaRouter()


//使用json模块
app.use(json())

// app.use(async ctx => {
//     ctx.body = {msg:"hello koa!"}
// });

router.get('/test',ctx=>(ctx.body = 'hello router'))

//配置路由模块
app.use(router.routes()).use(router.allowedMethods())



app.listen(3000)


