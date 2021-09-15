import React, { FC } from 'react'
import { PageHeader } from 'antd'
import Navigation from './Navigation'

interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

const Layout: FC<Props> = ({ children, title, subTitle}) => {
    return (
        <div>
            <Navigation />
            <PageHeader className='jumbotron' title={title} subTitle={subTitle} />
            <div style={{ width: '90%', margin: '0 auto'}}>{children}</div>
        </div>
    )
}

export default Layout
