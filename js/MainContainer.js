import React from 'react';
import ReactDOM from 'react-dom';
import StreamGrid from './StreamGrid.js';
import CreateButton from './CreateButton';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 35
}

const style2 = {
    position: "absolute",
    margin: "auto",
}

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"mainContainer"}>
                <CreateButton />
                <StreamGrid fb={this.FB} />
            </div>
        );
    }
}

export default MainContainer;