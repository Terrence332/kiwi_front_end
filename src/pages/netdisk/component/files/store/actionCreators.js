import * as constants from './constants'
import axios from 'axios'

export const setDrawVisable = (data) => ({
  type: constants.SET_DRAW_VISABLE,
  data: data
})

const initialContent = (data) => ({
  type: constants.INITIAL_CONTENT,
  folderList: data.folderList,
  fileList: data.fileList
})

export const getInitialFilesList = () => {
  return (dispatch)=>{
    axios({
      method: 'get',
      url: '/api/filelist.json'
    })
    .then((res)=>{
      if(res.data.code === 1000){
        dispatch(initialContent(res.data))
      }else{
        console.log('Initial failed')
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

const backAction = (data) => ({
  type: constants.BACK_TO_PREVIOUS,
  currentPath: data.currentPath,
  folderList: data.folderList,
  fileList: data.fileList
})

export const backToPrevious = () => {
  return (dispatch)=>{
    axios({
      method: 'get',
      url: '/api/back.json'
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(backAction(res.data))
      }else{
        console.log('Failed')
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

const changeFolderAction = (data) =>({
  type: constants.CHANGE_FOLDER,
  currentPath: data.currentPath,
  folderList: data.folderList,
  fileList: data.fileList
})

export const changeFolder = (foldername) => {
  return (dispatch)=>{
    axios({
      method: 'get',
      url: '/api/changefolder.json'
    })
    .then((res)=>{
      console.log(foldername)
      if(res.data.code===1000){
        dispatch(changeFolderAction(res.data)) 
      }else{
        console.log('Failed')
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}