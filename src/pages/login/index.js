import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button, Input, Icon, Alert} from 'antd'
import {actionCreators} from './store'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {encrypt} from '../../global'
import {
  LoginWrapper,
  LoginBox,
  LoginLogo,
  LoginInput,
  LoginMessage,
  LoginButton,
  InfoDiv
} from './style'

class Login extends React.PureComponent{
  getFromRegister = ()=>{
    const {fromRegister} = this.props
    if(fromRegister===true){
      return(
        <Alert message="You've successfully registered, please login." type="success" showIcon />
      )
    }
  }
  getWrongMessage = ()=>{
    const {wrongMessage} = this.props
    if(wrongMessage===true){
      return <LoginMessage>wrong password or username</LoginMessage>
    }else{
      return <LoginMessage />
    }
  }
  handleLogin = ()=>{
    const {username, password, history, handleLoginState, handleWrongMessage} = this.props
    const encrypt_password = encrypt(password)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/portal/login/',
      headers: {'Content-Type':'application/json'},
      data: {
        username: username,
        password: encrypt_password
      }
    })
    .then((res)=>{
      if(res.data.code === 1000){
        // 修改state中的登录状态
        handleLoginState()
        // 修改localstorage中的登陆状态
        localStorage.setItem('login', 'true')
        history.push('/home')
      }else{
        handleWrongMessage()
      }
    })
    .catch((e)=>{
      console.log(e)
      handleWrongMessage()
    })
  }
  render(){
    const {
      handleUsernameChange,
      handlePasswordChange,
      handleInputFocus
    } = this.props
    if(this.props.login === true){
      return(
        <Redirect to='/home' />
      )
    }else{
      return(
        <LoginWrapper>
          {this.getFromRegister()}
          <LoginBox>
            <LoginLogo />
            <LoginInput>
              <Input
                  className='login'
                  placeholder='Username'
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onFocus={handleInputFocus}
                  onChange={handleUsernameChange}
                  />
            </LoginInput>
            <LoginMessage />
            <LoginInput>
            <Input.Password
                  className='login'
                  placeholder='Password'
                  prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onFocus={handleInputFocus}
                  onChange={handlePasswordChange}
                  />
            </LoginInput>
            {this.getWrongMessage()}
            <LoginButton>
              <Button     
                className='login' 
                type='primary' 
                shape='round'
                onClick={this.handleLogin}>Login</Button>
            </LoginButton>
            <InfoDiv>
              <Link to='/register' className='info1'>No account yet?</Link>
              <Link to='/fpwd' className='info2'>Forget passwoed.</Link>
            </InfoDiv>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapState = (state)=>({
  login: state.getIn(['login', 'login']),
  fromRegister: state.getIn(['login', 'fromRegister']),
  wrongMessage: state.getIn(['login', 'wrongMessage']),
  username: state.getIn(['login', 'username']),
  password: state.getIn(['login', 'password'])
})

const mapDispatch = (dispatch)=>({
  handleUsernameChange: (event)=>{
    dispatch(actionCreators.changeUsername(event.target.value))
  },
  handlePasswordChange: (event)=>{
    dispatch(actionCreators.changePassword(event.target.value))
  },
  handleInputFocus: ()=>{
    dispatch(actionCreators.resetFromRegister())
  },
  handleWrongMessage: ()=>{
    dispatch(actionCreators.handleWrongMessage())
  },
  handleLoginState: ()=>{
    dispatch(actionCreators.setLoginState())
  }
})

export default connect(mapState, mapDispatch)(Login)