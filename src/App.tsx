import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import {GlobalStyle} from './style'
import {GlobalFontStyle} from './statics/iconfont/iconfont'
import store from './store'

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <GlobalStyle/>
                    <GlobalFontStyle/>
                </div>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/detail" component={Detail}/>
                </Switch>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
