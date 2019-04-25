import styled from 'styled-components'
import favicon from '../../static/favicon.png'

export const RegisterWrapper = styled.div`
  positon: absolute;
  top: 56px;
`

export const RegisterBox = styled.div`
  width: 400px;
  height: 580px;
  margin: 100px auto;
  padding-top: 60px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  &.stepOne{
    height: 580px;
  }
  &.stepTwo{
    height: 400px;
  }
`

export const RegisterLogo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 50px auto;
  background: url(${favicon});
  background-size: contain;
  &.stepOne{
    margin: 0 auto 50px auto;
  }
  &.stepTwo{
    margin: 0 auto 10px auto;
  }
`

export const RegisterButton = styled.div`
  width: 200px;
  height: 30px;
  margin: 50px auto;
  .register{
    width: 200px;
    height: 30px;
  }
`

export const RegisterInput = styled.div`
  width: 250px;
  height: 50px;
  margin: 0px auto;
  .register{
    width: 250px;
    height: 30px;
  }
`

export const RegisterMessage = styled.p`
  width: 250px;
  height: 10px;
  margin: -15px auto 20px auto;
  color: #bdbdbd;
  &.warning{
    color: #ef5350
  }
`

export const VerificationMessage = styled.p`
  position: relative;
  display: block;  
  width: 280px;
  height: 20px;
  margin: 0 auto 20px auto;
  font-size: 20px;
  font-weight: 500;
  color: #616161;
`

export const VerificationInput = styled.div`
  position: relative;
  display: block;  
  width: 250px;
  height: 30px;
  margin: 70px auto 0 auto;
`

export const VerificationButton = styled.div`
  position: relative;
  display: block;
  width: 200px;
  height: 30px;
  margin: 50px auto;
  .verification{
    width: 200px;
    height: 30px;
  }
`