import React from 'react'
import{BrowserRouter,Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'


import{GlobalStyle} from './style.js'
import {IconStyle } from './statics/iconfont/iconfont'
function App() {
  return (
    <div>
      <GlobalStyle/>
      <IconStyle/>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/' exact component={Detail}></Route>
          <Route path='/login/' exact component={Login}></Route>
          <Route path='/write/' exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
