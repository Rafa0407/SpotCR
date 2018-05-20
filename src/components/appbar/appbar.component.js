import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from "react-router-dom";

class AppBars extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: true, anchorEl: null }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openSession = () => {
    this.setState({ auth: true });
    this.setState({ anchorEl: null });
  }

  closeSession = () => {
    this.setState({ auth: false });
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"><MenuIcon /></IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>SpotCR</Typography>
            { !auth && (<Button color="inherit" onClick={ this.openSession } >SignIn</Button>) }
            { !auth && (<Button color="inherit">SignOut</Button>) }
            {auth && (
              <div>
                <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit" ><AccountCircle /></IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{   vertical: 'top',   horizontal: 'right', }}
                  transformOrigin={{   vertical: 'top',   horizontal: 'right', }} open={open} onClose={this.handleClose} >
                  <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={this.handleClose}>Editar Perfil</MenuItem>
                  <MenuItem onClick={this.closeSession}>Cerrar Sesión</MenuItem>
                </Menu>
              </div>
            )}
            {auth && (
              <div>
                <IconButton aria-haspopup="true" color="inherit" ><Link title='Iniciar sesión' style={ styles.login } to="/spots"><AccountCircle /></Link></IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(AppBars);
