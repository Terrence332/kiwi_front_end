import styled from 'styled-components'
import favicon from '../../static/favicon.png'

export const RootWrapper = styled.div`
  positon: absolute;
  top: 56px;
`

export const RootBox = styled.div`
  width: 400px;
  height: 400px;
  margin: 100px auto;
  padding-top: 80px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const RootLogo = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: url(${favicon});
  background-size: contain;
`

export const RootButton = styled.div`
  width: 200px;
  height: 50px;
  margin: 60px auto;
  .register{
    width: 200px;
    height: 50px;
  }
`