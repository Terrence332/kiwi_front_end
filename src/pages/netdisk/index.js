import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import {Route, Link} from 'react-router-dom'

const { SubMenu } = Menu
const { Content, Sider } = Layout

function one(){
  return <div>one</div>
}

function two(){
  return <div>two</div>
}

function three(){
  return <div>three</div>
}

function four(){
  return <div>four</div>
}

class NetDisk extends React.PureComponent{
  render(){
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width='200px' style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" >
            <Icon type="folder" />
            <span><Link to={`${this.props.match.url}/1`}>My Files</Link></span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="book" />Task History</span>}>
            <Menu.Item key="2">Download</Menu.Item>
            <Menu.Item key="3">Upload</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" >
            <Icon type="delete" />
            <span><Link to={`${this.props.match.url}/4`}>Recycle Bin</Link></span>
          </Menu.Item>
        </Menu>
      </Sider>

    <Layout style={{ padding: "24px 24px" }}>
    <Layout>
    <Content style={{background: "#fff", padding: 24, }}>
      <Route path={`${this.props.match.url}/1`} exact component={one}></Route>
      
    </Content>
    </Layout>
    </Layout>
    </Layout>
    )
  }
}

export default NetDisk