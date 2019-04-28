import styled from 'styled-components'
import favicon from '../../static/favicon.png'

export const LoginWrapper = styled.div`
  positon: absolute;
  top: 56px;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 480px;
  margin: 100px auto;
  padding-top: 60px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const LoginLogo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 50px auto;
  background: url(${favicon});
  background-size: contain;
`

export const LoginInput = styled.div`
  width: 250px;
  height: 50px;
  margin: 0px auto;
  .login{
    width: 250px;
    height: 30px;
  }
`

export const LoginButton = styled.div`
  width: 200px;
  height: 30px;
  margin: 50px auto;
  .login{
    width: 200px;
    height: 30px;
  }
`

export const LoginMessage = styled.p`
  width: 250px;
  height: 10px;
  margin: -15px auto 20px auto;
  color: #ef5350
`