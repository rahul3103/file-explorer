import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { closeMenu } from '../actions';

const ClickMenu = ({ anchorEl, dispatch }) => {
  const handleClose = () => {
    dispatch(closeMenu());
  };
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Rename</MenuItem>
      <MenuItem onClick={handleClose}>Delete</MenuItem>
      {/* <MenuItem onClick={this.handleClose}>Logout</MenuItem> */}
    </Menu>
  );
};

ClickMenu.propTypes = {
  anchorEl: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const select = state => ({
  anchorEl: state.anchorEl
});

export default connect(select)(ClickMenu);
