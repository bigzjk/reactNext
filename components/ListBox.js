import React from 'react'
import Link from 'next/link'

import { List, Avatar, Icon } from 'antd'
import '../static/style/ListBox.css'
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        blog_id: i,
        href: 'http://ant.design',
        title: `这是博客文章 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
        '这是这篇博客简介这是这篇博客简介这是这篇博客简介这是这篇博客简介',
        content:
        '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const ListBox = () => {
    return <div className="ListBox">
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={listData}
            footer={
                <div>
                    <b>ant design</b> footer part
                </div>
            }
            renderItem={item => (
                <Link href={`/detail?blog_id=${item.blog_id}`}>
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                            <IconText type="message" text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                </Link>
                )
            }
    />
    </div>
}
export default ListBox