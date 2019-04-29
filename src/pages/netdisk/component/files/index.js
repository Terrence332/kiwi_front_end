import React from 'react'
import {Drawer, Button, Layout} from 'antd'
import {connect} from 'react-redux'
import {
  UploadButton
} from './style'

const { Content } = Layout

class MyFile extends React.PureComponent{
  render(){
    return(
      <div>
        <UploadButton>

        </UploadButton>
        <Content style={{background: "#fff", padding: 24, minHeight: '80vh'}}>
          <div>MyFile</div>
        </Content>
      </div>
    )
  }
}

const mapState = (state) => ({

})

const mapDispatch = (dispath) => ({

})

export default connect(mapState, mapDispatch)(MyFile)