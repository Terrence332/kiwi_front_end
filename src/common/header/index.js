import React from 'react'
import {Layout, Menu, Button, Dropdown} from 'antd'
import 'antd/dist/antd.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
  Logo,
  MenuDiv,
  AdditionDiv,
  LoginDiv
} from './style' 

const {Header} = Layout

class KiwiHeader extends React.PureComponent{
  componentWillMount(){
    if(localStorage.getItem('login') === 'true' ){
      this.props.setLoginState()
    }
  }
  handleLogout = ()=>{
    localStorage.setItem('login', 'false')
    localStorage.setItem('JWT', '')
    this.props.setLogoutState()
  }
  render(){
    if(this.props.login){
      const menu = (
        <Menu>
          <Menu.Item>
            <Link to='/usercenter'>user center</Link>
          </Menu.Item>
          <Menu.Item onClick={this.handleLogout}>logout</Menu.Item>
        </Menu>
      )
      return(
        <Layout>
          <Header className="header">
            <Link to='/'>
              <Logo />
            </Link>
            <MenuDiv>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  <Link to='/netdisk'>Net Disk</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/rds'>RDS</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/vps'>VPS</Link>
                </Menu.Item>
              </Menu>
            </MenuDiv>
            <AdditionDiv>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button className='btn' type="primary">My Kiwi</Button>
              </Dropdown>
            </AdditionDiv>
          </Header>
        </Layout>
      )
      }else{
        return(
          <Layout>
          <Header className="header">
            <Link to='/'>
              <Logo />
            </Link> 
            <LoginDiv>
              <Link to='/login'>
                <Button className='btn' type="primary">Login</Button>
              </Link>
              <a href='https://github.com/Terrence332/kiwi_front_end'>
                <Button className='btn' type="primary" icon='github'>Github</Button>
              </a>
            </LoginDiv>
          </Header>
        </Layout>
        )
      }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  setLoginState: ()=>{
    dispatch(loginActionCreators.setLoginState())
  },
  setLogoutState: () => {
    dispatch(loginActionCreators.setLogoutState())
  }
})

export default connect(mapState, mapDispatch)(KiwiHeader)