import React, {useState} from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import Router from 'next/router'
import { Layout } from 'antd'
import Editor from 'for-editor'
import axios from 'axios'
import Header from '../components/Header.js'
import SiderBox from '../components/Sider.js'
import '../static/style/Detail.css'

const { Sider, Content } = Layout
const Detail = () => {
  // 路由钩子函数:
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // HashChangeStart
  // HashChangeComplete

  axios.get('http://localhost:5555/blog_getlist').then(resp => {
    console.log('resp', resp)
  })
  // http://localhost:5555/blog_getlist
  const [value, setValue] = useState('### abc')
  const handleChange = (val) => {
    setValue(val)
    console.log(val)
  }
  
  return <div className="Detail">
    <Header />
    <Layout>
        <Sider width="15vw">
          <SiderBox></SiderBox>
        </Sider>
        <Content>
            <Editor
              value={value}
              onChange={handleChange}
              preview
              toolbar={{
              //   h1: false, // h1
              //   h2: false, // h2
              //   h3: false, // h3
              //   h4: false, // h4
              //   img: false, // 图片
              //   link: false, // 链接
              //   code: false, // 代码块
              //   preview: false, // 预览
              //   expand: false, // 全屏
              //   /* v0.0.9 */
              //   undo: false, // 撤销
              //   redo: false, // 重做
              //   save: false, // 保存
              //   /* v0.2.3 */
              //   subfield: false, // 单双栏模式
              }}
            />
        </Content>
    </Layout>
  </div>
}

export default Detail
