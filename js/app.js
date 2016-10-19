import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './MainContainer.js';
import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <MainContainer />
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {

};


ReactDOM.render(<App />, document.getElementById("app"));
