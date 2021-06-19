import React,{PureComponent} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTittle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style'

class Header extends PureComponent{
    
    getListArea =()=>{
        const {focused,List,page,handleMouseIn,
            handleMouseOut,mouseIn,handleChangePage,totalPage}=this.props;
        const newList=List.toJS();
        let pageList =[];
        if(newList.length){
            for(let i=(page-1)*10;i<page*10&&i<newList.length;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        }

        if(focused||mouseIn){
            return(
                <SearchInfo onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
                >
                <SearchInfoTittle>
                  热门搜索
                  <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                  <i ref={(icon)=>this.spinIcon=icon} className="iconfont spin">&#xe851;</i>
                     换一批
                  </SearchInfoSwitch>
                </SearchInfoTittle>
                <div>
                    {pageList}
                </div>
              </SearchInfo>
            )
        }
        else{
            return null;
        }
    }
    render(){
        const {focused,handleInputFocused,handleInputBlur,List,login,logout}=this.props;
        return (
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        {
                            login ?<NavItem onClick={logout} className="right logOut">退出</NavItem>:
                            <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                        }
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch className={focused?'focused':''}
                            onFocus={() => handleInputFocused(List)}
                            onBlur={handleInputBlur}
                            >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focused?'iconfont focused zoom':'iconfont zoom'}>&#xe6cf;</i> 
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className="writting">
                                <i className="iconfont">&#xe6eb;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        focused:state.get('header').get('focused'),
        List:state.get('header').get('List'),
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage'),
        login:state.get('login').get('isLogin')
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handleInputFocused:(List) => {
            (List.size===0)&&dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFoucus())
        },
        handleInputBlur :() =>{
            dispatch(actionCreators.searchBlur())
        },
        handleMouseIn:() =>{
            dispatch(actionCreators.mouseIn())
        },
        handleMouseOut:() =>{
            dispatch(actionCreators.mouseOut())
        },
        handleChangePage:(page,totalPage,spin) =>{

            let orginAngle=spin.style.transform.replace(/[^0-9]/ig,'')
            console.log(spin.style.transform)
            if(orginAngle){
                orginAngle=parseInt(orginAngle,10);
            }else{
                orginAngle=0;
            }
            console.log(orginAngle);
            spin.style.transform=`rotate(${orginAngle+360}deg)`
            console.log("旋转后角度是",spin.style.transform);
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }
            else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout:() =>{
            alert('退出成功');
            <Redirect to='/'/>
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
