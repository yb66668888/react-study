import React, { lazy, Suspense, useState } from 'react'
import { Menu } from 'antd'

const items = [
    {
        label: '使用 reducer 和 context ',
        key: '1',
    }
]

const ComponentA = lazy(() => import('./manage/reducer-context'))
const ComponentDefault = () => import('./manage/default')

const components = {
    '1': ComponentA,
    'default': ComponentDefault
}


export default function StatusManage() {
    const [current, setCurrent] = useState('1')
    const Component = components[current] || components['default']

    const onClick = (e) => {
        console.log('click: ', e)
        setCurrent(e.key)
    }
    return (
        <div>
            <Menu items={items} selectedKeys={current} onClick={onClick} mode="horizontal"  />
            
            <div className='padding-inner-20'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </div>
        </div>
    )
}