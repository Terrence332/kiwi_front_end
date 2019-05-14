import React from 'react'
import KiwiHeader from './common/header'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Root from './pages/root'
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import UserCenter from './pages/center'
import NetDisk from './pages/netdisk'
import Vps from './pages/vps'

class App extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <KiwiHeader />
          <Route path='/' exact component={Root}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
          {/* <Route path='/fpwd' exact component={ForgetPassword}></Route> */}
          {/* <Route path='/documnet' exact component={Document}></Route> */}
          <Route path='/home' exact component={Home}></Route>
          <Route path='/usercenter' exact component={UserCenter}></Route>
          <Route path='/netdisk' component={NetDisk}></Route>
          <Route path='/vps' component={Vps}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App