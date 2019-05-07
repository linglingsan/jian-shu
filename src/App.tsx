import React from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import {GlobalStyle} from './style'
import {GlobalFontStyle} from './statics/iconfont/iconfont'
import store from './store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Header/>
            <GlobalStyle/>
            <GlobalFontStyle/>
        </Provider>
    );
}

export default App;
