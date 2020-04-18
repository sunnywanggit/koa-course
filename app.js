const Koa = require('koa')
//安装json模块
const json = require('koa-json')


app = new Koa()

//使用json模块
app.use(json())

app.use(async ctx => {
    ctx.body = {msg:"hello koa!"}
});


app.listen(3000)


