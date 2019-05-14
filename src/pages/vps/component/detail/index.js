import React from 'react'
import {Layout} from 'antd'
import {connect} from 'react-redux'

const { Content } = Layout


class VPSDetail extends React.PureComponent{
  componentWillMount(){
    console.log(this.props.match.params.id)
  }
  render(){
    return(
      <Content style={{background: "#fff", padding: 24, }}>
        <div>{this.props.match.params.id}</div>    
      </Content>
    )
  }
}

const mapState = (state) => ({
  
})

const mapDispatch = (dispatch) => ({
  
})

export default connect(mapState, mapDispatch)(VPSDetail)