import React from 'react'
import {Spin, Card, Icon, Avatar} from 'antd'
import {connect} from 'react-redux'
import ubuntu from '../../../../../../static/os/ubuntu.png'
import centos from '../../../../../../static/os/centos.png'
import debian from '../../../../../../static/os/debian.png'
import windows from '../../../../../../static/os/windows.png'
import gugu from '../../../../../../static/os/default.png'
import {CardDiv} from './style'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { actionCreators } from '../../store';

const { Meta } = Card

class VPSCard extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      processing: false
    }
  }
  changeVMStatus = ()=>{
    this.setState({processing: true})
    const {item, handleStatueChange} = this.props
    const id = item.get('id')
    let action = 'start'
    if(item.get('status')==='running'){
      action ='stop'
    }
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/vps/status/?id=${id}&action=${action}`
    })
    .then((res)=>{
      if(res.data.code===1000){
        handleStatueChange(res.data.vpsList)
      }else{
        console.log('Failed')
      }
      this.setState({processing: false})  
    })
    .catch((e)=>{
      console.log(e)
      this.setState({processing: false})
    })
  }
  getAvatar = ()=>{
    const {item} = this.props
    switch(item.get('os')){
      case 'centos':
        return <Avatar src={centos} />
      case 'ubuntu':
        return <Avatar src={ubuntu} />
      case 'debian':
        return <Avatar src={debian} />
      case 'windows':
        return <Avatar src={windows} />
      default:
        return <Avatar src={gugu} />  
    }
  }
  render(){
    const {item, index, url} = this.props
    return(
      <CardDiv>
        <Spin spinning={this.state.processing}>
          <Card
              actions={[
                <Icon type={item.get('status')==='running'?'pause':'caret-right'}
                      title={item.get('status')==='running'?'stop':'run'}
                      onClick={this.changeVMStatus}/>,
                <Icon type='edit' title='edit'/>,
                <Link to={`${url}/detail/${item.get('id')}`}>
                  <Icon type='ellipsis' title='detail'/>
                </Link>
              ]}
            >
              <Meta
                avatar={
                  this.getAvatar()
                }
                title={`VM ${index+1}`}
                description={
                  <div>
                    <p><b>OS: </b>{item.get('osv')}</p>
                    <p><b>IP: </b>{item.get('ip')}</p>
                    <p><b>Status: </b>{item.get('status')}</p>
                  </div>
                }
              />
          </Card>
        </Spin>  
      </CardDiv>
    )
  }
}

const mapDispatch = (dispatch) => ({
  handleStatueChange: (data) => {
    dispatch(actionCreators.changeStatusAction(data))
  }
})

export default connect(null, mapDispatch)(VPSCard)