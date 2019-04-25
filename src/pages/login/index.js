import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Button, Input, Icon} from 'antd'
import {
  LoginWrapper,
  LoginBox,
  LoginLogo,
  LoginInput,
  LoginMessage,
  LoginButton
} from './style'

class Login extends React.PureComponent{
  render(){
    if(this.props.login === true){
      return(
        <Redirect to='/home' />
      )
    }else{
      return(
        <LoginWrapper>
          <LoginBox>
            <LoginLogo />
            <LoginInput>
              <Input
                  className='login'
                  placeholder='Enter your username'
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
            </LoginInput>
            <LoginMessage />
            <LoginInput>
            <Input
                  className='login'
                  placeholder='Enter your email address'
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
            </LoginInput>
            <LoginMessage>this is test message</LoginMessage>
            <LoginButton>
              <Button     
                className='login' 
                type='primary' 
                shape='round'>Login</Button>
            </LoginButton>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

export default connect(null, null)(Login)