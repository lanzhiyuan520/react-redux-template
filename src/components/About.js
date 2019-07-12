import React from 'react';
import Testa from './Testa'
import Testb from './Testb'
import { BrowserRouter as Router,Route,Redirect} from'react-router-dom'
class About extends React.Component{
    constructor (props) {
        super(props)
        this.stats = {

        }
    }
    click = (type) => {
        if (type === 1) {
            this.props.history.push('/about/testa')
        } else {
            this.props.history.push('/about/testb')
        }
    }
    render () {
        return (
            <div>
                <h1>我是关于页面</h1>
                <button onClick={()=>{this.click(1)}}>testa</button>
                <button onClick={()=>{this.click(0)}}>testb</button>
                <div>
                    <Redirect to='/about/testa'></Redirect>
                    <Route path='/about/testa' component={Testa}></Route>
                    <Route path='/about/testb' component={Testb}></Route>
                </div>
            </div>
        )
    }
}
export default About