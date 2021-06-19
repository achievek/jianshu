import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store';
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent {
    componentDidMount(){
      
    }
    render() {
        const {isLogin} =this.props;
        if(!isLogin){
          return (
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' ref={(input) => {this.account=input}}/ >
              <Input placeholder='密码' ref={(input) => {this.password=input}} type='password'/>
              <Button onClick={() =>this.props.login(this.account,this.password)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
        )
      }else{
          return <Redirect to='/' />
      }
        
    }
}
const mapStateToProps =(state) => (
  {
    isLogin:state.get('login').get('isLogin')
  }
)

const mapDispatchToProps =(dispatch) =>(
    {
      login:(accountElem,passwordElem) => {
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
      }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Login)