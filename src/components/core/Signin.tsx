import React from 'react'
import Layout from './Layout'
import { Form, Input, Button, Result } from 'antd'
import { signin, SigninPayload } from '../../store/actions/auth.actions'
import { useDispatch, useSelector } from '_@types_react-redux@7.1.18@@types/react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { Redirect } from 'react-router'

const Signin = () => {
    // 获取 dispatch 方法
    const dispatch = useDispatch()
    // 获取登录结果
    const auth = useSelector<AppState, AuthState>(state => state.auth)
    // 提交表单
    const onFinish = (value: SigninPayload) => {
        // 发送登录请求
        dispatch(signin(value))
    }

    // 登录成功 根据角色跳转到对应的管理页面 
    const redirectToDashboard = () => {
        const auth = isAuth()
        if(auth) {
            const {
                user: { role }
            } = auth as Jwt
            if (role === 0) {
                // 注册用户
                return <Redirect to="/user/dashboard" />
              } else {
                // 管理员
                return <Redirect to="/admin/dashboard" />
              }
        }
    }

    // 登录失败 显示失败提示
    const showError = () => {
        if (auth.signin.loaded && !auth.signin.success) {
            return (
              <Result
                status="warning"
                title="登录失败"
                subTitle={auth.signin.message}
              />
            )
          }
    }

    // 处理导航链接 已登录 隐藏 [登录, 注册] 显示 [dashboard]
    

    const signinForm = () => (
        <Form onFinish={onFinish}>
          <Form.Item name="email" label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      )

    return (
        <Layout title='登录' subTitle=' '>
            {redirectToDashboard()}
            {showError()}
            {signinForm()}
        </Layout>
    )
}

export default Signin
