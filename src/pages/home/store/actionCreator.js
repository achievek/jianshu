import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable'

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

const addHomeList =(list,nextPage) => ({
	type:constants.GET_MORE_HOME_DATA,
	articleList:fromJS(list),
	nextPage
})

export const getMoreData =(page)=>{
	return (dispatch) =>{
		axios.get('/api/homeList.json?page='+page).then((res) => {
			const result =res.data.data;
			dispatch(addHomeList(result,page+1)); 
		})
	}
}

export const toggleScrollTopShow =(flag) => (
	{
			type:constants.TOGGLE_SHOW,
			flag
	}
)
