import * as constants from './constants'
import axios from 'axios'

const initContentAction = (data) =>  ({
  type: constants.INIT_CONTENT,
  data: data
})

export const getInitContent = () => {
  return (dispatch)=>{
    axios({
      method: 'get',
      url: '/api/vpslist.json'
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(initContentAction(res.data.vpsList))
      }else{
        console.log('Failed')
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

export const changeStatusAction = (data) => ({
  type: constants.REFRESH_CONTENT,
  data: data
})