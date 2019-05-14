import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import MyFile from './component/files'
import Recycle from './component/recycle'
import Download from './component/history/download'
import Upload from './component/history/upload'

const { SubMenu } = Menu
const { Sider } = Layout

class NetDisk extends React.PureComponent{
  render(){
    if(this.props.login===false){
      return <Redirect to='/Login' />
    }else{
      return(
        <Layout style={{ minHeight: '100vh'}}>
          <Sider className='sider' width='200px'>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" >
              <Link to={`${this.props.match.path}/files`}>
                <div>
                  <Icon type="folder" />
                  <span>My Files</span>
                </div>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="book" />Task History</span>}>
              <Menu.Item key="2">
                <Link to={`${this.props.match.path}/download`}>Download</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={`${this.props.match.path}/upload`}>Upload</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" >
              <Link to={`${this.props.match.path}/recycle`}>
                <div>
                  <Icon type="delete" />
                  <span>Recycle Bin</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      
        <Layout style={{ padding: "24px 24px" }}>
          <Route path={`${this.props.match.path}/`} exact component={MyFile}></Route>
          <Route path={`${this.props.match.path}/files`} exact component={MyFile}></Route>
          <Route path={`${this.props.match.path}/download`} exact component={Download}></Route>
          <Route path={`${this.props.match.path}/upload`} exact component={Upload}></Route>
          <Route path={`${this.props.match.path}/recycle`} exact component={Recycle}></Route>      
        </Layout>
        </Layout>
      )
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(withRouter(NetDisk))