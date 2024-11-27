import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import StatusManage from './components/StatusManage'
function Home() {
  return <h2>首页</h2>
}

function About() {
  return <h2>关于我们</h2>
}

export default function App() {
  return (
    // future 解决控制台的警告信息，v7_startTransition: true 表示开启过渡效果，v7_relativeSplatPath: true 表示开启相对路径
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      }}
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/status-manage">状态管理</Link>
            </li>
            <li>
              <Link to="/about">关于我们</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/status-manage' element={<StatusManage />} />
        </Routes>
      </div>
    </Router>
  );
}


