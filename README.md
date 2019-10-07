# react的SSR框架 - next

### 启动。打包
```js
npm run dev
npm run build
```
### 项目结构
```js
├── components
│   ├── comp.js
│   ├── nav.js
├── node_modules
├── pages
│   ├── _app.js
│   ├── index.js
│   ├── test.js
├── static
│   ├── commom.css
├── package.json
├── .babelrc
├── .gitignore
├── next.config.js

```
- components 组件目录；用于存放组件，文件名即为组件名
- pages 页面目录；用于存放页面code，页面名即为路由名；
    + _app.js 为全局函数
    + index.js 入口函数
- static 静态资源存放目录；可以放一些css和图片之类的资源
- next.config.js next的配置文件；目前仅对css文件做了配置处理

### 在next中，需要使用react hooks的编程方式；

### next的路由钩子函数: 
  - routeChangeStart : 路由改变前
  
  - routeChangeComplete : 路由改变后
  
  - beforeHistoryChange 
  
  - routeChangeError ： 路由发生错误的时候执行；并不包含 404
  
  - HashChangeStart ： hash改变前后
  
  - HashChangeComplete ： hash改变前后
### 触发路由钩子函数，需要使用事件函数；如下：
```js 
  Router.events.on('routeChangeStart', (link) => {
    console.log('start url:' + link)
  })
  Router.events.on('routeChangeComplete', (link) => {
    console.log('complete url:' + link)
  })
```
### next的异步请求获取，需要放在getInitialProps中；如下
```js
// results就是下面的promise中返回的值
function alkun({router, results}) {
    // 路有参数
    let { aa, bb} = router.query
    return (
        <div>
            hahahha{aa}---{bb}
            {comp()}
            {results && results.map((item, i) => (
                <li key={i}>{item.contentId}</li>
                
            ))}
            <style jsx>{`
                li{
                    color: red;
                    font-size: 14px;
                }
            `}</style>
        </div>
    )
}
alkun.getInitialProps = async () => {
    let promise = new Promise((resolve, reject) => {
        axios('http://mapi.alkun.top/cms_list_tag?nid=23831003&type=2006&pageNo=0&pageSize=10').then(resp => {
            resolve(resp && resp.data && resp.data.result)
        })
    })
    return  await promise 
}
```
