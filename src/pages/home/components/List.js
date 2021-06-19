import React, { PureComponent } from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import  {actionCreators}  from '../store'
import {Link} from 'react-router-dom'

 class List extends PureComponent {
   
  render() {
    const {articeList,getMoreList,page} =this.props;
    return (
      <div>
        {
          articeList.map((item,index) =>{
            return (
              <Link key={index} to={'./detail/'}>
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className="tittle">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
                </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
   

    )
  }
}
const mapStateToProps=(state) =>(
  {
    articeList:state.get('home').get('articleList'),
    page:state.get('home').get('articlePage')
  }
)

const mapDispatchToProps =(dispatch) =>({
  getMoreList:(page)=>{
    dispatch(actionCreators.getMoreData(page))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(List)