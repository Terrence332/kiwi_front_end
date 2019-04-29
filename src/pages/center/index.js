import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {} from 'antd'
import 'antd/dist/antd.css'
import {

} from './style'

class UserCenter extends React.PureComponent{
  handleButton = (event)=>{
    console.log(event.target)
  }
  render(){
    if(this.props.login === true){
      return(
        <button id='one' onClick={this.handleButton}>button</button>
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

const mapDispatch = (dispatch) =>({

})

export default connect(mapState, mapDispatch)(UserCenter)