import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {

} from './style'

class Home extends React.PureComponent{
  render(){
    if(this.props.login === true){
      return(
        <div>Home</div>
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