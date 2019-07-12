import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import Home from '../components/Home'
import About from '../components/About'
import Testa from '../components/Testa'
import Testb from '../components/Testb'
import reducers from '../reducers'

import 'antd/dist/antd.css';


let store = createStore(reducers,applyMiddleware(thunk))




const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route strict path='/about/a' component={Testa}></Route>
                <Route strict path='/about/b' component={Testb}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Router