import React from 'react'
import {Layout} from 'antd'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import VPSCard from './component/vpscard'

const { Content } = Layout


class MyVPS extends React.PureComponent{
  componentWillMount(){
    const {handleContentInit} = this.props
    handleContentInit()
  }
  render(){
    const {vpsList} = this.props
    return(
      <Content style={{background: "#fff", padding: 24, }}>
        {
          vpsList.map((item, index)=>{
            return(
              <VPSCard key={item.get('id')} item={item} index={index} url={this.props.match.path} />
            )
          })
        }
      </Content>
    )
  }
}

const mapState = (state) => ({
  vpsList: state.getIn(['vps', 'myvps', 'vpsList'])
})

const mapDispatch = (dispatch) => ({
  handleContentInit: ()=>{
    dispatch(actionCreators.getInitContent())
  }
})

export default connect(mapState, mapDispatch)(MyVPS)