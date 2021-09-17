import React, { useEffect } from 'react'
import { Form, Input, Button, Result } from 'antd'
import Layout from './Layout'
import { resetSignup, signup, SignupPayload } from '../../store/actions/auth.actions'
import { useDispatch, useSelector } from '_@types_react-redux@7.1.18@@types/react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { Link } from 'react-router-dom'

const Signup = () => {
    // 获取 dispatch 方法
    const dispatch = useDispatch()
    // 获取注册结果
    const auth = useSelector<AppState, AuthState>(state => state.auth)
    // 注册表单提交
    const onFinish = (value: SignupPayload) => {
        // 发送注册请求
        dispatch(signup(value))
    }

    const [form] = Form.useForm()

    // 注册成功 清空表单
    useEffect(() => {
        if (auth.signup.loaded && auth.signup.success) {
            form.resetFields()
        }
    }, [auth]);
    // 注册成功 显示成功提示
    const showSuccess = () => {
        if (auth.signup.loaded && auth.signup.success) {
            return (
                <Result
                    status="success"
                    title="注册成功!!"
                    extra={[
                        <Button type="primary">
                            <Link to="/signin">登录</Link>
                        </Button>
                    ]}
                />
            )
        }
    }
    // 注册失败 显示失败提示
    const showError = () => {
        if (auth.signup.loaded && !auth.signup.success) {
            return (
                <Result
                    status="warning"
                    title="注册失败!!"
                    subTitle={auth.signup.message}
                />
            )
        }
    }
    // 离开页面之前 重置状态
    useEffect(() => {
        return () => {
            dispatch(resetSignup())
        }
    }, []);
    // 表单组件
    const signupForm = () => {
        <Form form={form} onFinish={onFinish}>
            <Form.Item name='name' label='昵称'>
                <Input />
            </Form.Item>
            <Form.Item name='password' label='密码'>
                <Input.Password />
            </Form.Item>
            <Form.Item name='email' label='邮箱'>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>注册</Button>
            </Form.Item>
        </Form>
    }

    return (
        <Layout title='注册' subTitle=' '>
            {showSuccess()}
            {showError()}
            {signupForm()}
        </Layout>
    )
}

export default Signup
