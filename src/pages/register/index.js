import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import { Button, Input, Icon, Tooltip } from 'antd'
import 'antd/dist/antd.css'
import {actionCreators} from './store'
import {actionCreators as loginActionCreator} from '../login/store'
import {encrypt} from '../../global'
import axios from 'axios'
import {
  RegisterWrapper,
  RegisterBox,
  RegisterLogo,
  RegisterButton,
  RegisterInput,
  RegisterMessage,
  VerificationMessage,
  VerificationInput,
  VerificationButton,
} from './style'

class Register extends React.PureComponent{
  getUsernameMessage = ()=>{
    const {username_repeat} = this.props
    if(username_repeat === true){
      return <RegisterMessage className='warning'>username has been used</RegisterMessage>
    }else{
      return(
        <RegisterMessage />
      )
    }
  }
  getEmailMessage = ()=>{
    const {email, email_repeat} = this.props
    const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
    if(email_repeat === true){
      return <RegisterMessage className='warning'>email has been used</RegisterMessage>
    }else if(email!==''&&!reg.test(email)){
      return <RegisterMessage>please enter correct email address</RegisterMessage>
    }else{
      return <RegisterMessage></RegisterMessage>
    }
  }
  getPasswordMessage = ()=>{
    const {password, confirm_password} = this.props
    if(password === confirm_password){
      return <RegisterMessage></RegisterMessage>
    }else{
      return <RegisterMessage>please input the same password again</RegisterMessage>
    }
  }
  register = ()=>{
    const {username, email, password, handleRegister} = this.props
    // 用户密码ARS加密
    const encrypt_password = encrypt(password)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/portal/register/',
      headers: {'Content-Type':'application/json'},
      data: {
        username: username,
        email: email,
        password: encrypt_password
      }
    })
    .then((res)=>{
      console.log(res.data)
      handleRegister()
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  getRegisterButton = ()=>{
    const {username, email, password, confirm_password, username_repeat, email_repeat} = this.props
    const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
    if(username!==''&&reg.test(email)&&password!==''&&password===confirm_password&&username_repeat===false&&email_repeat===false){
      return(
        <Button     
          className='register' 
          type='primary' 
          shape='round'
          onClick={this.register}>Register</Button>)
    }else{
      return(
        <Button 
          disabled
          className='register' 
          type='primary' 
          shape='round'>Register</Button>
    )}
  }
  getVerificationButton = ()=>{
    const {verification, handleFromRegister} = this.props
    if(verification===true){
      return(
        <Link to='/login'>
          <Button     
            className='verification' 
            type='primary' 
            shape='round'
            onClick={handleFromRegister}>Next</Button>
        </Link>
    )}else{
      return(
        <Button
          disabled     
          className='verification' 
          type='primary' 
          shape='round'>Next</Button>
    )}
  }
  render(){
    const {
      username,
      email,
      handleUsernameChange,
      handleEmailChange,
      handlePasswordChange,
      handlePassword2Change,
      handleUsernameOut,
      handleEmailOut,
      handleVerificationChange} = this.props
    if(this.props.login === true){
      return(
        <Redirect to='/home' />
      )
    }else if(this.props.register_step===1){
      return(
        <RegisterWrapper>
          <RegisterBox className='stepOne'>
            <RegisterLogo className='stepOne' />
            <RegisterInput>
              <Input
                className='register'
                placeholder='Enter your username'
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="required">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
                onChange={handleUsernameChange}
                onMouseOut={()=>{handleUsernameOut(username)}} />
            </RegisterInput>
            {this.getUsernameMessage()}
            <RegisterInput>
              <Input
                className='register'
                placeholder='Enter your email address'
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="required">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
                onChange={handleEmailChange}
                onMouseOut={()=>{handleEmailOut(email)}} />
            </RegisterInput>
            {this.getEmailMessage()}
            <RegisterInput>
              <Input.Password 
                className='register' 
                placeholder='input password'
                onChange={handlePasswordChange} />
            </RegisterInput>
            <RegisterMessage />
            <RegisterInput>
              <Input.Password 
                className='register' 
                placeholder='confirm password'
                onChange={handlePassword2Change} />
            </RegisterInput>
            {this.getPasswordMessage()}
            <RegisterButton>
            {this.getRegisterButton()}
            </RegisterButton>    
          </RegisterBox>
        </RegisterWrapper>
      )
    }else if(this.props.register_step===2){
      return(
        <RegisterWrapper>
          <RegisterBox className='stepTwo'>
            <RegisterLogo className='stepTwo'/>
            <VerificationMessage>
              A Verification Code Has Been Sent to Your Email.</VerificationMessage>
            <VerificationInput>
              <Input placeholder="Verification code" onChange={handleVerificationChange}/>
            </VerificationInput>
            <VerificationButton>
              {this.getVerificationButton()}
            </VerificationButton>
          </RegisterBox>
        </RegisterWrapper>
      )
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login']),
  username: state.getIn(['register', 'username']),
  email: state.getIn(['register', 'email']),
  password: state.getIn(['register', 'password']),
  confirm_password: state.getIn(['register', 'confirm_password']),
  username_repeat: state.getIn(['register', 'username_repeat']),
  email_repeat: state.getIn(['register', 'email_repeat']),
  register_step: state.getIn(['register', 'register_step']),
  verification: state.getIn(['register', 'verification'])
})

const mapDispatch = (dispatch) => ({
  handleUsernameChange: (event)=>{
    dispatch(actionCreators.changeUsername(event.target.value))
  },
  handleEmailChange: (event)=>{
    dispatch(actionCreators.changeEmail(event.target.value))
  },
  handlePasswordChange: (event)=>{
    dispatch(actionCreators.changePassword(event.target.value))
  },
  handlePassword2Change: (event)=>{
    dispatch(actionCreators.changePassword2(event.target.value))
  },
  handleUsernameOut: (username)=>{
    if(username===''){
      return
    }else{
      dispatch(actionCreators.usernameOut(username))
    }
  },
  handleEmailOut: (email)=>{
    const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
    if(email===''||!reg.test(email)){
      return
    }else{
      dispatch(actionCreators.emailOut(email))
    }
  },
  handleRegister: ()=>{
    dispatch(actionCreators.registerAction())
  },
  handleVerificationChange: (event)=>{
    // 6位邮箱验证码
    if(event.target.value.length===6){
      dispatch(actionCreators.verificationAction(event.target.value))
    }else{
      dispatch(actionCreators.getVerificationAction(false))
    }
  },
  handleFromRegister: ()=>{
    dispatch(loginActionCreator.setFromRegister())
  }
})

export default connect(mapState, mapDispatch)(Register)