import React from 'react'
import UploadOutlined from '_@ant-design_icons@4.6.4@@ant-design/icons/lib/icons/UploadOutlined'
import { Button, Form, Input, Select, Upload } from '_antd@4.16.13@antd'
import Layout from '../core/Layout'

const AddProduct = () => {
    const onFinish = () => {
        console.log(1)
    }

    const addProductForm = () => {
        return (
            <Form onFinish={onFinish}>
                <Form.Item>
                    <Upload >
                        <Button icon={<UploadOutlined />}>上传商品封面</Button>
                    </Upload>
                </Form.Item>
                <Form.Item name='name' label='商品名称'>
                    <Input />
                </Form.Item>
                <Form.Item name='description' label='商品描述'>
                    <Input />
                </Form.Item>
                <Form.Item name='price' label='商品价格'>
                    <Input />
                </Form.Item>
                <Form.Item name='category' label='所属分类'>
                    <Select>
                        <Select.Option value=''>请选择分类</Select.Option>
                        <Select.Option value='1'>测试</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name='quantity' label='商品数量'>
                    <Input />
                </Form.Item>
                <Form.Item name="shipping" label="是否需要运输">
                    <Select>
                        <Select.Option value="1">是</Select.Option>
                        <Select.Option value="0">否</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        添加商品
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    
    return (
        <Layout title='添加商品' subTitle='' >
            {addProductForm()}
        </Layout>
    )
}

export default AddProduct
