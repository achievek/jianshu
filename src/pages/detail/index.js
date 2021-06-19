import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store';
import {DetailWrapper,Header,Content} from './style'
import {withRouter} from 'react-router-dom'

class Detail extends PureComponent {
    componentDidMount(){
        //console.log("组件挂载完成");
        this.props.getDetail();
    }
    render() {
        return (
            <DetailWrapper>
              <Header>{this.props.title}</Header>
              <Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
            </DetailWrapper>
        )
    }
}
const mapStateToProps =(state) => ({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content'),
})

const mapDispatchToProps =(dispatch) =>(
    {
        getDetail:() => {
            dispatch(actionCreator.getDetail());
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));