import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'
export const searchFoucus =()=>(
    {
        type:constants.SEARCH_FOCUS
    }
);

export const searchBlur =()=>(
    {
        type:constants.SEARCH_BLUR
    }
);

export const mouseIn =()=>(
    {
    type:constants.MOUSE_IN
    }
);
export const mouseOut =()=>(
    {
    type:constants.MOUSE_OUT
    }
);
    
const changeList =(data)=>({
    type:constants.GET_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const getList =() =>{
   return (dispatch) =>{
       axios.get('api/headerList.json').then((res) =>{
            const data=res.data;
            dispatch (changeList(data.data))
       }).catch( () =>{
        console.log('error')
       })
   } 
}

export const changePage =(page)=>(
    {
    type:constants.CHANGE_PAGE,
    page
    }
);
    