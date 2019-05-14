import React from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../../store'
import {Icon, Menu, Dropdown, Modal, Input} from 'antd'
import {
  FileItemWrapper,
  IconDiv,
  NameDiv,
  OperationDiv,
  DateDiv} from './style'

class FileItem extends React.PureComponent{
  // state不保存在redux中
  constructor(props){
    super(props)
    this.state = {
      mouseIn: false,
      modalVisable: false,
      rename: false
    }
  }
  mouseOver = () => {
    this.setState({mouseIn: true})
  }
  mouseOut = () => {
    this.setState({mouseIn: false})
  }
  // 删除文件提示框
  modalShow = () => {
    this.setState({modalVisable: true})
  }
  modalClose = () => {
    this.setState({modalVisable: false})
  }
  modalOk = () => {
    const {item, handleFileDelete} = this.props
    handleFileDelete(item.get('name'))
    this.setState({modalVisable: false})
  }
  // 文件重命名
  setRenameState = () => {
    this.setState({rename: true})
  }
  resetRenameState = () => {
    this.setState({rename: false})
  }
  renameFile = () => {
    const {item, handleFileRename} = this.props
    this.setState({rename: false})
    handleFileRename(item.get('name'), this.refs.fileInput.state.value)
  }
  // 文件名或重命名组建
  getItemContext = () => {
    const {rename, mouseIn} = this.state
    const {item} = this.props
    if(rename===true){
      return(
        <NameDiv className='zone' col={mouseIn?'#2196f3':''}>
          <IconDiv className='file'>
            <Icon className='icon' type='file' theme="twoTone"/>
          </IconDiv>
          <Input className='fileInput' ref='fileInput' placeholder={item.get('name')}></Input>
          <IconDiv className='check'>
            <Icon className='icon' type="check-square" theme="twoTone" onClick={this.renameFile}/>
          </IconDiv>
          <IconDiv className='close'>
            <Icon className='icon' type="close-square" theme="twoTone" onClick={this.resetRenameState}/>
          </IconDiv>
        </NameDiv>
      )
    }else{
      return(
        <NameDiv className='zone' col={mouseIn?'#2196f3':''}>
            <IconDiv className='file'>
              <Icon className='icon' type='file' theme="twoTone"/>
            </IconDiv>
            <div className='fileName'>{item.get('name')}</div>
        </NameDiv>
      )
    }
  }
  render(){
    const {mouseIn, modalVisable} = this.state
    const {item, handleFileDownload} = this.props
    // 文件操作下拉选项卡
    const menu = (
      <Menu>
        <Menu.Item onClick={this.setRenameState}>Rename</Menu.Item>
        <Menu.Item>Move</Menu.Item>
      </Menu>
    )
    return(
      <div>
        <FileItemWrapper className='folderItem' 
          bfg={mouseIn?'rgba(227,242,253,0.4)':''} 
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          >
          {this.getItemContext()}
          <OperationDiv className='zone'>
            <IconDiv className='operation' hidden={mouseIn?'':'hidden'}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Icon className='icon' type='ellipsis' title='more'/>
              </Dropdown>
            </IconDiv> 
            <IconDiv className='delete' hidden={mouseIn?'':'hidden'}>
              <Icon className='icon' type='delete' theme="twoTone" title='delete' onClick={this.modalShow}/>
            </IconDiv>
            <IconDiv className='download' hidden={mouseIn?'':'hidden'}>
              <Icon className='icon' type='download' title='download' onClick={()=>{handleFileDownload(item.get('name'))}}/>
            </IconDiv>    
          </OperationDiv>
          <DateDiv className='zone'>
            <div className='date'>{item.get('date')}</div>  
          </DateDiv>
        </FileItemWrapper>
        {/* 删除提示框 */}
        <Modal
          title="Warning"
          visible={modalVisable}
          onOk={this.modalOk}
          onCancel={this.modalClose}
          okText="Confirm"
          cancelText="Cancel"
          >
          <p>Are you sure you want to delete.</p>
        </Modal>
      </div>
    )
  }
}

const mapDispatch = (dispatch)=>({
  handleFileDelete: (filename)=>{
    // 待开发
    console.log(filename)
  },
  handleFileRename: (oldName, newName)=>{
    // 待开发
    console.log(oldName, newName)
  },
  handleFileDownload: (filename) => {
    // 待开发
    console.log(filename)
  }
})

export default connect(null, mapDispatch)(FileItem)