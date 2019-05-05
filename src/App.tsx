import React, {Fragment} from 'react';
import Header from './common/header'
import {GlobalStyle} from './style'
import {GlobalFontStyle} from './statics/iconfont/iconfont'

const App: React.FC = () => {
    return (
        <Fragment>
            <Header/>
            <GlobalStyle/>
            <GlobalFontStyle/>
        </Fragment>
    );
}

export default App;
