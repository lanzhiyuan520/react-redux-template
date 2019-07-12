import React from 'react';
import { connect } from 'react-redux'
import {picList} from "../actions/actions";
import { Row, Col } from 'antd'
import '../css/style.css'
class Home extends React.Component{
    constructor (props) {
        super(props)
        this.stats = {

        }
    }
    componentDidMount () {
        // alert(111)
        //this.props.picList()
    }
    click = () => {
        console.log(this.props)
        this.props.history.push('/about')
    }
    render () {
        let state = this.props.user
        return (
            <div>

                <Row>
                    <Col span={6} >
                        <div className='left'></div>
                    </Col>
                    <Col span={18} >
                        <div className='right'></div>
                    </Col>
                </Row>
                {/*<div>*/}
                    {/*{state.loading?<div>加载中...</div>:''}*/}
                    {/*<button onClick={()=>{this.click()}}>点我跳转</button>*/}
                    {/*<button onClick={()=>{this.props.add()}}>点击+1</button>*/}
                    {/*<button onClick={()=>{this.props.jian()}}>点击-1</button>*/}
                    {/*<div>{state.count}</div>*/}
                    {/*<div>*/}
                        {/*{*/}
                            {/*state.piclist.map((item,index) => {*/}
                               {/*return <img key={index} src={item.url} />*/}
                            {/*})*/}
                        {/*}*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return state
}
const mapDispatchToProps = dispatch => {
    return {
        add : () => {
            dispatch({
                type : 'ADD'
            })
        },
        jian : () => {
            dispatch({
                type : 'JIAN'
            })
        },
        picList : () => {
            dispatch(picList({page : 1}))
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default VisibleTodoList