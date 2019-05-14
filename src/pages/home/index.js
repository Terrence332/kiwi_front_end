import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import {
  HomeWrapper,
  Title,
  SubHeading,
  ButtonDiv
} from './style'

class Home extends React.PureComponent{
  render(){
    if(this.props.login === true){
      return(
        <HomeWrapper>
          <Title>KIWI</Title>
          <SubHeading> Private cloud services for convenient data management.</SubHeading>
          <ButtonDiv>
            <Link to='/document'>
              <Button className='button' type="primary">Document</Button>
            </Link>
            <Link to='/netdisk'>
              <Button className='button' type="primary">Start Now</Button>
            </Link>  
          </ButtonDiv>
        </HomeWrapper>
      )
    }else{
      return(
        <Redirect to='/Login' />
      )
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Home)