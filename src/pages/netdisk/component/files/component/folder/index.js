import React from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../../store'
import {Icon, Menu, Dropdown, Modal, Input} from 'antd'
import {
  FolderItemWrapper,
  IconDiv,
  NameDiv,
  OperationDiv,
  DateDiv} from './style'

class FolderItem extends React.PureComponent{
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
    const {item, handleFolderDelete} = this.props
    handleFolderDelete(item.get('name'))
    this.setState({modalVisable: false})
  }
  // 文件夹重命名
  // 点击check后rename回到false状态，发送axios请求
  // 成功：修改数据  失败：Alert warning(antd)
  setRenameState = () => {
    this.setState({rename: true})
  }
  resetRenameState = () => {
    this.setState({rename: false})
  }
  renameFolder = () => {
    const {item, handleFolderRename} = this.props
    this.setState({rename: false})
    handleFolderRename(item.get('name'), this.refs.folderInput.state.value)
  }
  // 文件名或重命名组建
  getItemContext = () => {
    const {rename, mouseIn} = this.state
    const {item, handleFolderChange} = this.props
    if(rename===true){
      return(
        <NameDiv className='zone' col={mouseIn?'#2196f3':''}>
          <IconDiv className='folder'>
            <Icon className='icon' type='folder' theme="twoTone"/>
          </IconDiv>
          <Input className='folderInput' ref='folderInput' placeholder={item.get('name')}></Input>
          <IconDiv className='check'>
            <Icon className='icon' type="check-square" theme="twoTone" onClick={this.renameFolder}/>
          </IconDiv>
          <IconDiv className='close'>
            <Icon className='icon' type="close-square" theme="twoTone" onClick={this.resetRenameState}/>
          </IconDiv>
        </NameDiv>
      )
    }else{
      return(
        <NameDiv className='zone' col={mouseIn?'#2196f3':''}>
            <IconDiv className='folder'>
              <Icon className='icon' type='folder' theme="twoTone"/>
            </IconDiv>
            <div className='folderName' 
              onClick={(event)=>{handleFolderChange(event.target.innerText)}} 
              style={{cursor: 'pointer'}}>{item.get('name')}</div>
        </NameDiv>
      )
    }
  }
  render(){
    const {mouseIn, modalVisable} = this.state
    const {item} = this.props
    // 文件操作下拉选项卡
    const menu = (
      <Menu>
        <Menu.Item onClick={this.setRenameState}>Rename</Menu.Item>
        <Menu.Item>Move</Menu.Item>
      </Menu>
    )
    return(
      <div>
        <FolderItemWrapper className='folderItem' 
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
          </OperationDiv>
          <DateDiv className='zone'>
            <div className='date'>{item.get('date')}</div>  
          </DateDiv>
        </FolderItemWrapper>
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
  handleFolderChange: (foldername)=>{
    dispatch(actionCreators.changeFolder(foldername))
  },
  handleFolderDelete: (foldername)=>{
    // 待开发
    console.log(foldername)
  },
  handleFolderRename: (oldName, newName)=>{
    // 待开发
    console.log(oldName, newName)
  }
})

export default connect(null, mapDispatch)(FolderItem)