import React, {Fragment} from 'react';
import Header from './common/header'
import {GlobalStyle} from './style'

const App: React.FC = () => {
    return (
        <Fragment>
            <Header/>
            <GlobalStyle/>
        </Fragment>
    );
}

export default App;
