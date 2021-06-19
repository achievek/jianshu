import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent {
    componentDidMount(){
      
    }
    render() {
        const {isLogin} =this.props;
        if(isLogin){
          return (
            <div>
              Write！
            </div>
        )
      }else{
          return <Redirect to='/login' />
      }
        
    }
}
const mapStateToProps =(state) => (
  {
    isLogin :state.get('login').get('isLogin')
  }
)


export default connect(mapStateToProps,null)(Write)