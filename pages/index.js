import React from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import Router from 'next/router'
import { Layout } from 'antd'

import Header from '../components/Header.js'
import SiderBox from '../components/Sider.js'
import ListBox from '../components/ListBox.js'
import '../static/style/index.css'


const { Sider, Content } = Layout
const Home = () => {
  // 路由钩子函数:
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // HashChangeStart
  // HashChangeComplete
  Router.events.on('routeChangeStart', (a) => {
    console.log(a)
  })
  Router.events.on('routeChangeComplete', (a) => {
    console.log('end',a)
  })


  return <div className="home">
    <Header />
    <Layout>
        <Sider width="15vw">
          <SiderBox></SiderBox>
        </Sider>
        <Content>
          <ListBox></ListBox>
        </Content>
    </Layout>
    <style jsx>{`
     
    `}</style>
  </div>
}

export default Home
