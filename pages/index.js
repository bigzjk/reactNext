import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import {Button} from 'antd'
import Nav from '../components/nav'

const Home = () => {
  // 路由狗子函数:
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


  return <div>

    <Link href="/test?aa=11&bb=222"><a>alkun</a></Link>
    <p onClick={() => {
      Router.push({pathname:'/alkun', query: {
        aa: 666,
        bb: 999
      }})
    }}>11111</p>
    <Button>点击</Button>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
}

export default Home
