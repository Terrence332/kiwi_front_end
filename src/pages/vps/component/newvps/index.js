import React from 'react'
import {Layout, Cascader, InputNumber, Input} from 'antd'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
  LogoBox,
  NewVPSBox,
  FormBox,
  TitleDiv,
  Title,
  InputDiv,
  MessageBox,
  MessageDiv,
  Message
} from './style'

const { Content } = Layout

class NewVPS extends React.PureComponent{
  componentWillMount(){
    const {handleAvailableOSInit} = this.props
    handleAvailableOSInit()
  }
  // 级联选项卡内容Change
  onCascaderChange = (value) => {
    const {handleOSSet, handleVisionSet} = this.props
    handleOSSet(value[0])
    handleVisionSet(value[1])
  }
  getIPMessage = () => {
    const {ip, ip_repeat} = this.props
    const reg = new RegExp("^192.168.7.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$")
    if(ip_repeat===true){
      return <Message className='warning'>ip address has been used</Message>
    }else if(ip!==''&&!reg.test(ip)){
      return <Message>please enter correct ip address</Message>
    }else{
      return <Message></Message>
    }
  }
  render(){
    const {availableOS, handleNameSet,handleCoresSet, handleRAMSet, handleIPSet, handleHostnameSet} = this.props
    return(
      <Content style={{background: "linear-gradient(to bottom right, #bbdefb, #fff)", padding: 24, }}>
        <NewVPSBox>
          <LogoBox />
          {/* 虚拟机名 */}
          <FormBox>
            <TitleDiv>
              <Title>
                Name:
              </Title>
            </TitleDiv>
            <InputDiv>
              <Input className='input name' onChange={handleNameSet} placeholder='VM name'/>
            </InputDiv>
          </FormBox>
          <MessageBox/>
          {/* 操作系统版本选择 */}
          <FormBox>
            <TitleDiv>
              <Title>
                Operating System:
              </Title>
            </TitleDiv>
            <InputDiv>
              <Cascader className='input'
                options={availableOS}
                onChange={this.onCascaderChange}
                placeholder="Please select"
              />
            </InputDiv>
          </FormBox>
          <MessageBox/>
          {/* CPU核心数 */}
          <FormBox>
            <TitleDiv>
              <Title>
                CPU Cores:
              </Title>
            </TitleDiv>
            <InputDiv>
              <InputNumber className='input' min={1} max={6} defaultValue={1} onChange={handleCoresSet} />
            </InputDiv>
          </FormBox>
          <MessageBox/>
          {/* RAM内存大小 */}
          <FormBox>
            <TitleDiv>
              <Title>
                RAM(GB):
              </Title>
            </TitleDiv>
            <InputDiv>
              <InputNumber className='input' min={1} max={8} defaultValue={1} onChange={handleRAMSet} />
            </InputDiv>
          </FormBox>
          <MessageBox/>
          {/* IP地址 */}
          <FormBox>
            <TitleDiv>
              <Title>
                IP Address:
              </Title>
            </TitleDiv>
            <InputDiv>
              <Input className='input ip' onChange={handleIPSet} 
                    placeholder='GATEWAY: 192.168.7.1'
                    />
            </InputDiv>
          </FormBox>
          <MessageBox>
            <MessageDiv>
              {this.getIPMessage()}
            </MessageDiv>
          </MessageBox>
          {/* hostname */}
          <FormBox>
            <TitleDiv>
              <Title>
                Hostname:
              </Title>
            </TitleDiv>
            <InputDiv>
              <Input className='input hostname' onChange={handleHostnameSet} placeholder='localhost'/>
            </InputDiv>
          </FormBox>
          <MessageBox/>
        </NewVPSBox>
      </Content>
    )
  }
}

const mapState = (state) => ({
  availableOS: state.getIn(['vps', 'newvps', 'availableOS']),
  processing: state.getIn(['vps', 'newvps', 'processing']),
  name: state.getIn(['vps', 'newvps', 'name']),
  os: state.getIn(['vps', 'newvps', 'os']),
  version: state.getIn(['vps', 'newvps', 'version']),
  cores: state.getIn(['vps', 'newvps', 'cores']),
  ram: state.getIn(['vps', 'newvps', 'ram']),
  ip: state.getIn(['vps', 'newvps', 'ip']),
  hostnme: state.getIn(['vps', 'newvps', 'hostname']),
  ip_repeat: state.getIn(['vps', 'newvps', 'ip_repeat'])
})

const mapDispatch = (dispatch) => ({
  handleAvailableOSInit: ()=>{
    dispatch(actionCreators.getInitOSContent())
  },
  handleNameSet: (event)=>{
    dispatch(actionCreators.setNameAction(event.target.value))
  },
  handleOSSet: (data)=>{
    dispatch(actionCreators.setOSAction(data))
  },
  handleVisionSet: (data)=>{
    dispatch(actionCreators.setVersionAction(data))
  },
  handleCoresSet: (data)=>{
    dispatch(actionCreators.setCoresAction(data))
  },
  handleRAMSet: (data)=>{
    dispatch(actionCreators.setRAMAction(data))
  },
  handleIPSet: (event)=>{
    dispatch(actionCreators.setIPAction(event.target.value))
  },
  handleIPCheck: (event)=>{

  },
  handleHostnameSet: (event)=>{
    dispatch(actionCreators.setHostnameActon(event.target.value))
  },
  handleProcessingSet: ()=>{
    dispatch(actionCreators.setProcessingAction())
  },
  handleProcessingReset: ()=>{
    dispatch(actionCreators.resetProcessingAction())
  }
})

export default connect(mapState, mapDispatch)(NewVPS)