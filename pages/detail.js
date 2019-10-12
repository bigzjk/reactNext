import React from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import Router from 'next/router'
import { Layout } from 'antd'
import Markdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import Header from '../components/Header.js'
import SiderBox from '../components/Sider.js'
import '../static/style/Detail.css'

let markdownText='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的222文字*\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

const { Sider, Content } = Layout
const Detail = () => {
  // 路由钩子函数:
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // HashChangeStart
  // HashChangeComplete

  return <div className="Detail">
    <Header />
    <Layout>
        <Sider width="15vw">
          <SiderBox></SiderBox>
        </Sider>
        <Content>
            <p>detail</p>
            <SyntaxHighlighter>
                <Markdown
                    source={markdownText}
                    escapeHtml
                />
            </SyntaxHighlighter>
        </Content>
    </Layout>
  </div>
}

export default Detail
