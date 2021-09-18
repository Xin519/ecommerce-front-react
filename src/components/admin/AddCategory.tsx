import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from '_antd@4.16.13@antd'
import axios from 'axios'
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';
import { API } from '../../config';
import { Link } from '_@types_react-router-dom@5.1.9@@types/react-router-dom';
import Layout from '../core/Layout'

const AddCategory = () => {
    const [name, setneme] = useState<string>('');
    const { user, token } = isAuth() as Jwt
    useEffect(() => {
        async function addCategory() {
            try {
                let response = await axios.post<{name: string}>(
                    `${API}/category/create/${user._id}`,
                    {
                        name: name
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                message.success(`[${response.data.name}] 分类添加成功`)
            } catch(error: any) {
                message.error(error.response.data.error)
            }   
        }
        if(name) addCategory()
    }, [name]);
    const onFinish = (value: { name: string }) => {
        setneme(value.name)

    }

    return (
        <Layout title="添加分类" subTitle='' >
            <Form onFinish={onFinish}>
                <Form.Item name='name' label='分类名称'>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        添加分类
                    </Button>
                </Form.Item>
            </Form>
            <Button>
                <Link to="/admin/dashboard">返回 Dashboard</Link>
            </Button>
        </Layout>
    )
}

export default AddCategory
