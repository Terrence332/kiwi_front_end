import React from 'react'
import {Layout} from 'antd'

const { Content } = Layout

class Download extends React.PureComponent{
  render(){
    return(
      <Content style={{background: "#fff", padding: 24, }}>
        <div>Download</div>
      </Content>
    )
  }
}

export default Download