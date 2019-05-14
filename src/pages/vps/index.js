import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import NewVPS from './component/newvps'
import MyVPS from './component/myvps'
import VPSDetail from './component/detail'

const { Sider } = Layout

class Vps extends React.PureComponent{
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
              <Link to={`${this.props.match.path}/newVps`}>
                <div>
                  <Icon type="plus-square" />
                  <span>New VPS</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to={`${this.props.match.path}/myVps`}>
                <div>
                  <Icon type="inbox" />
                  <span>My VPS</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "24px 24px" }}>
          <Route path={`${this.props.match.path}/`} exact component={NewVPS}></Route>
          <Route path={`${this.props.match.path}/newVps`} exact component={NewVPS}></Route>
          <Route path={`${this.props.match.path}/myVps`} exact component={MyVPS}></Route>
          <Route path={`${this.props.match.path}/myVps/detail/:id`} exact component={VPSDetail}></Route>     
        </Layout>
        </Layout>
      )
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(withRouter(Vps))