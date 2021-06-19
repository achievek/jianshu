import axios from 'axios';
import {constants} from './'

const getdatilaction= (title,content) => (
  {
    type:constants.GET_DETAIL,
    title,
    content
  }
)
export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      console.log(res);
      const result=res.data.data;
      dispatch(getdatilaction(result.title,result.content))
    }).catch(()=>{
      console.log('请求失败，请刷新重试');
    })
  }
}