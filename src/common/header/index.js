import React from 'react'
import {Layout, Menu, Button} from 'antd'
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
    localStorage.setItem('login', 'false')
    if(localStorage.getItem('login') === 'true' ){
      this.props.setLoginState()
    }
  }
  render(){
    if(this.props.login){
      return(
        <Layout>
          <Header className="header">
            <Link to='/'>
              <Logo>Logo</Logo>
            </Link> 
            <MenuDiv>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">网盘</Menu.Item>
                <Menu.Item key="2">RDS</Menu.Item>
                <Menu.Item key="3">VPS</Menu.Item>
              </Menu>
            </MenuDiv>
            <AdditionDiv></AdditionDiv>
          </Header>
        </Layout>
      )
      }else{
        return(
          <Layout>
          <Header className="header">
            <Link to='/'>
              <Logo>Logo</Logo>
            </Link> 
            <LoginDiv>
              <Link to='/login'>
                <Button className='btn' type="primary">Login</Button>
              </Link>
              <a href='https://github.com/'>
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
  setLoginState(){
    dispatch(loginActionCreators.setLoginState())
  }
})

export default connect(mapState, mapDispatch)(KiwiHeader)