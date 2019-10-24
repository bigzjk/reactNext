const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 5556
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()
	// 首页
    router.get('/', async ctx => {
      await app.render(ctx.req, ctx.res, '/', ctx.query)
      ctx.respond = false
    })
	// 详情
    router.get('/detail/:blog_id', async ctx => {
      const {blog_id} = ctx.params
      await app.render(ctx.req, ctx.res, `/detail/${blog_id}`, ctx.query)
      ctx.respond = false
    })
	// 写作
    router.get('/writing', async ctx => {
      await app.render(ctx.req, ctx.res, '/writing', ctx.query)
      ctx.respond = false
    })
	
	// // 详情
    // router.get('/view/:type/:id', async ctx => {
    //   const {id, type} = ctx.params
    //   await app.render(ctx.req, ctx.res, `/view`, {id, type})
    //   ctx.respond = false
    // })
    // 如果没有配置nginx做静态文件服务，下面代码请务必开启
   router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })
    // 防止出现控制台报404错误
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })
    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })