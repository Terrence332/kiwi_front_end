import React from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../../store'
import {Icon} from 'antd'
import {
  FilesItemWrapper,
  IconDiv
} from './style'

class FilesItem extends React.PureComponent{
  // state不保存在redux中
  constructor(props){
    super(props)
    this.state = {
      mouseIn: false
    }
  }
  mouseOver = () => {
    this.setState({mouseIn: true})
  }
  mouseOut = () => {
    this.setState({mouseIn: false})
  }
  test = (event) => {
    console.log(event.target.innerText) 
  }
  render(){
    const {mouseIn} = this.state
    return(
      <FilesItemWrapper className='filesItem' bfg={mouseIn?'rgba(227,242,253,0.4)':''}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        >
        <IconDiv className='file'>
          <Icon className='icon' type='file' theme="twoTone"/>
        </IconDiv>
        <div className='filename'>{this.props.item.get('name')}</div>
        <IconDiv className='delete'>
        {/* hidden={this.state.mouseIn?'':'hidden'} */}
          <Icon className='icon' type='delete' theme="twoTone"/>
        </IconDiv>
      </FilesItemWrapper>
    )
  }
}

const mapDispatch = (dispatch)=>({

})

export default connect(null, mapDispatch)(FilesItem)