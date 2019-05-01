import React from 'react'
import {Drawer, Button, Layout, Upload, message, Icon} from 'antd'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
  UploadWrapper,
  PathWrapper
} from './style'

const { Content } = Layout

class MyFile extends React.PureComponent{
  // 文件上传抽屉开关
  showDrawer = ()=>{
    this.props.handleDrawVisable(true)
  }
  onCloseDrawer = ()=>{
    this.props.handleDrawVisable(false)
  }
  render(){
    // 文件上传控件属性
    const uploadProps = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
    return(
      <div>
        <UploadWrapper>
          <Button type='primary' className='upload' onClick={this.showDrawer}>Upload</Button>
          <PathWrapper>
            <Button className='back'>Back</Button>
            <p className='divide'>|</p>
            <div className='pathDiv'>/path</div>
            <p className='currentPath'>Current Path:</p>
          </PathWrapper>          
        </UploadWrapper>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onCloseDrawer}
          visible={this.props.drawVisable}
          width="500px">
          <Upload {...uploadProps}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        </Drawer>
        {/* 文件列表 */}
        <Content style={{background: "#fff", padding: 24, minHeight: '90vh'}}>
          <div>MyFile</div>
        </Content>
      </div>
    )
  }
}

const mapState = (state) => ({
  drawVisable: state.getIn(['netdisk', 'files', 'drawVisable']),
  currentPath: state.getIn(['netdisk', 'files', 'currentPath']),
  folderList: state.getIn(['netdisk', 'file', 'folderList']),
  fileList: state.getIn(['netdisk', 'file', 'fileList'])
})

const mapDispatch = (dispatch) => ({
  handleDrawVisable: (data)=>{
    dispatch(actionCreators.setDrawVisable(data))
  },
  changeCurrentPath: (foldername)=>{

  },
  getInitialFilesList: ()=>{
    dispatch(actionCreators)
  }
})

export default connect(mapState, mapDispatch)(MyFile)