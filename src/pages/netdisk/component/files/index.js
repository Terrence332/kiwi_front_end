import React from 'react'
import {Drawer, Button, Layout, Upload, message, Icon, List} from 'antd'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import FolderItem from './component/folder'
import FilesItem from './component/files'
import {
  UploadWrapper,
  PathWrapper
} from './style'

const { Content } = Layout

class MyFile extends React.PureComponent{
  componentWillMount(){
    const {getInitialFilesList} = this.props
    getInitialFilesList()
  }
  // 文件上传抽屉开关
  showDrawer = ()=>{
    this.props.handleDrawVisable(true)
  }
  onCloseDrawer = ()=>{
    this.props.handleDrawVisable(false)
  }
  render(){
    // this.props 变量
    const {currentPath, folderList, fileList, handleBackToPrevious} = this.props
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
            <Button className='new'>New Folder</Button>
            <Button className='back' onClick={()=>{handleBackToPrevious(currentPath)}}>Back</Button>
            <p className='divide'>|</p>
            <div className='pathDiv'>{currentPath}</div>
            <p className='currentPath'>Current Path:</p>
          </PathWrapper>          
        </UploadWrapper>
        {/* 文件上传抽屉 */}
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
        {/* 文件夹列表 */}
        <Content style={{background: "#fff", padding: 24, minHeight: '90vh'}}>
        <List
          itemLayout="horizontal"
          dataSource={folderList}
          renderItem={item => (
            <FolderItem item={item}></FolderItem>
          )}></List>
        {/* 文件列表 */}
        <List
          itemLayout="horizontal"
          dataSource={fileList}
          renderItem={item => (
            <FilesItem item={item}></FilesItem>
          )}></List>
        </Content>
      </div>
    )
  }
}

const mapState = (state) => ({
  drawVisable: state.getIn(['netdisk', 'files', 'drawVisable']),
  currentPath: state.getIn(['netdisk', 'files', 'currentPath']),
  folderList: state.getIn(['netdisk', 'files', 'folderList']),
  fileList: state.getIn(['netdisk', 'files', 'fileList'])
})

const mapDispatch = (dispatch) => ({
  handleDrawVisable: (data)=>{
    dispatch(actionCreators.setDrawVisable(data))
  },
  getInitialFilesList: ()=>{
    dispatch(actionCreators.getInitialFilesList())
  },
  handleBackToPrevious: (currentPath)=>{
    if(currentPath==='/'){
      return
    }else{
      dispatch(actionCreators.backToPrevious())
    }
    
  }
})

export default connect(mapState, mapDispatch)(MyFile)