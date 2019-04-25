import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import {
  RootWrapper,
  RootBox,
  RootLogo,
  RootButton
} from './style'

class Root extends React.PureComponent{
  render(){
    if(this.props.login === true){
      return(
        <Redirect to='/home' />
      )
    }else{
      return(
        <RootWrapper>
          <RootBox>
            <RootLogo></RootLogo>
            <RootButton>
              <Link to='/register'>
                <Button className='register' type='primary' shape='round'>JOIN US</Button>
              </Link>
            </RootButton>
          </RootBox>
        </RootWrapper>
      )
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Root)