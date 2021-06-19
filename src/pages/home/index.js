import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';

 class Home extends PureComponent {
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    handleScrollTop(){
       window.scroll(0,0);
    }
    bindEvents(){
       // window.onscroll=this.props.changeScrollTopShow;
        //console.log("scrollShow值为",this.props.scollShow);
        window.addEventListener("scroll",this.props.changeScrollTopShow)
    }
    componentWillMount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    render() {
        return (
            <HomeWrapper>
                 <HomeLeft>
                     <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>   
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.scollShow ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    scollShow:state.get('home').get('showScroll')
})


const mapDispatchToProps =(dispatch) =>(
    {
        changeHomeData:()=>{
            const action =actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow: () => {
            if(document.documentElement.scrollTop>100){
                //console.log(document.documentElement.scrollTop);
                dispatch(actionCreators.toggleScrollTopShow(true))

            }else{
                dispatch(actionCreators.toggleScrollTopShow(false))
            }
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
