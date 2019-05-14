import styled from 'styled-components'
import favicon from '../../../../static/os/logo.png'

export const NewVPSWrapper = styled.div`
  position: absolute;
  top: 56px;
`

export const NewVPSBox = styled.div`
  width: 600px;
  height: 800px;
  margin: 50px auto;
  padding-top: 40px;
  border-radius: 10px;
  background: #fff
  box-shadow:0 0 8px rgb(0,0,0,.1);
`

export const LogoBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px auto 70px auto;
  background: url(${favicon});
  background-size: contain;
`

export const FormBox = styled.div`
  width: 400px;
  height: 35px;
  margin: 0 auto;
`

export const TitleDiv = styled.div`
  width: 150px;
  height: 35px;
  line-height: 50px;
  float: left;
`

export const Title = styled.p`
  line-height: 35px;
  float: right;
  margin-right: 10px;
`

export const InputDiv = styled.div`
  width: 250px;
  height: 35px;
  float: left;
  .input{
    margin-top: 2px;
  }
  .ip{
    width: 200px;
  }
  .name{
    width: 200px;
  }
  .hostname{
    width: 200px;
  }
`

export const MessageBox = styled.div`
  width: 400px;
  height: 20px;
  margin: 0 auto;
`

export const MessageDiv = styled.div`
  width: 250px;
  height: 20px;
  float: right;
  background: yellow;
`

export const Message = styled.p`
  line-height: 20px;
  float: left;
  color: #bdbdbd;
  &.warning{
    color: #ef5350;
  }
`