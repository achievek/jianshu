import React, { PureComponent } from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'


 class Recommend extends PureComponent {
  render() {
    const {recommendList}=this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) =>{
            return(
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapStateToProps =(state) =>(
  {
    recommendList:state.get('home').get('recommendList')
  }
)
  

export default connect(mapStateToProps,null)(Recommend)