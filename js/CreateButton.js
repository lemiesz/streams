import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AddStreamDialog from './AddStreamDialog.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleMenuItem1 = this.handleMenuItem1.bind(this);
    this.state = {
      openMenu: false,
      openMenuItem1: false
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openMenu: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      openMenu: false
    });
  };

  handleMenuItem1() {
    this.setState({
      openMenuItem1: true,
      openMenu: false
    })
  }

  render() {
    return (
      <div>
        <RaisedButton
          style={this.props.over}
          onTouchTap={this.handleTouchTap}
          label={"Create Stream"} />
        <Popover
          open={this.state.openMenu}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          >
          <Menu>
            <MenuItem onTouchTap={this.handleMenuItem1} primaryText="Add Existing Stream" />
            <MenuItem primaryText="Create New Stream" />
          </Menu>
        </Popover>
        <AddStreamDialog open={this.state.openMenuItem1} />
      </div>
    )
  }
}

CreateButton.propTypes = { style: React.PropTypes.object };


export default CreateButton;