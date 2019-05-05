import styled from 'styled-components'

export const FilesItemWrapper = styled.div`
  width: 100%;
  height: 36px;
  background-color:${props => props.bfg};
  .filename{
    line-height: 35px;
    float: left;
    margin-left: 20px;
  }
  .file{
    float: left;
  }
  .delete{
    float: right;
  }
`

export const IconDiv = styled.div`
  width: 36px;
  height: 36px;
  .icon{
    margin-top: 6.5px;
    margin-left: 7px;
    font-size: 21px;
  }
`