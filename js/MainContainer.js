import React from 'react';
import ReactDOM from 'react-dom';
import StreamGrid from './StreamGrid.js'

class MainContainer extends React.Component {
        render() {
        return (
            <div className={"mainContainer"}>
                <StreamGrid/>
            </div>
        );
    }
}

export default MainContainer;