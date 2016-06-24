/**
 * Created by PhuongLQ on 6/24/16.
 */

import React from 'react';
import {render} from 'react-dom';

require('./main.less');

import Hello from './hello';

class App extends React.Component {
    render() {
        return (<Hello />)
    }
}

render(<App />, document.getElementById('app'));