import {fromJS} from 'immutable';
import * as constants from './constants'

const defaultState=fromJS({
 topicList:[],
 articleList:[],
 recommendList:[],
 articlePage:1,
 showScroll:false
});
const changHomeData =(state,action) => {
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList)
  })
}
const getMoreData = (state,action) => {
  return state.merge({
    'articleList':state.get('articleList').concat(action.articleList),
    'articlePage':action.nextPage
  })
}
export default (state=defaultState,action) =>{
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
          return changHomeData(state,action);
        case constants.GET_MORE_HOME_DATA:
          return getMoreData(state,action);
        case constants.TOGGLE_SHOW:
            return state.set('showScroll',action.flag)
        default:
            return state
    } 
}