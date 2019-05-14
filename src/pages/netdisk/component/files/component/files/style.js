import styled from 'styled-components'

export const FileItemWrapper = styled.div`
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #eeeeee;
  .zone{
    background-color: ${props => props.bfg};
  }
  .delete{
    float: right;
  }
`

export const NameDiv = styled.div`
  width: 50%;
  height: 36px;
  float: left;
  .fileName{
    line-height: 35px;
    float: left;
    margin-left: 20px;
    color: ${props => props.col};
  }
  .file{
    margin-left: 20px;
    float: left;
  }
  .fileInput{
    height: 20px;
    width: 150px;
    float: left;
    margin-left: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .check{
    float: left;
    margin-left: 5px;
    .icon{
      cursor: pointer;
    }
  }
  .close{
    float: left;
    margin-left: -13px;
    .icon{
      cursor: pointer;
    }
  }
`

export const OperationDiv = styled.div`
  width: 20%;
  height: 36px;
  float: left;
  .delete{
    margin-right: -5px;
    float: right;
  }
  .download{
    margin-right: -5px;
    float: right;
    color: #1890ff;
  }
  .operation{
    margin-right: 30px;
    float: right;
    color: #1890ff;
  }
  .icon{
    cursor: pointer;
  }
`

export const DateDiv = styled.div`
  width: 30%;
  height: 36px;
  float: left;
  .date{
    line-height: 36px;
    float: left;
    margin-left: 20px;
  }
`

export const IconDiv = styled.div`
  width: 36px;
  height: 36px;
  .icon{
    margin-top: 9px;
    margin-left: 7px;
    font-size: 18px;
  }
`