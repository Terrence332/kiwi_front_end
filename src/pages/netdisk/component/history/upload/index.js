import React from 'react'
import {Layout} from 'antd'

const { Content } = Layout

class Upload extends React.PureComponent{
  render(){
    return(
      <Content style={{background: "#fff", padding: 24, }}>
        <div>Upload</div>
      </Content>
    )
  }
}

export default Upload