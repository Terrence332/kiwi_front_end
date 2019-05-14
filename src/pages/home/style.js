import styled from 'styled-components'
import bg from '../../static/trianglify.png'

export const HomeWrapper = styled.div`
  background: url(${bg}) no-repeat;
  min-height: 95vh;
  min-width: 100vh;
  overflow: hidden;
  background-size: 100%;
`

export const Title = styled.div`
  margin: 100px auto;
  font-size: 130px;
  font-weight: bold;
  text-align: center;
`

export const SubHeading = styled.div`
  margin: -120px auto;
  font-size: 25px;
  text-align: center;
`

export const ButtonDiv = styled.div`
  width: 500px;
  height: 60px;
  margin-top: 600px;
  margin-left: 1350px;
  .button{
    float: left;
    margin-right: 50px;
    width: 150px;
    height: 40px;
    font-size: 20px;
  }
`