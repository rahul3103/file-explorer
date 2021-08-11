import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Folders from './Folders';
import ClickMenu from './ClickMenu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const TreeViewPane = ({ classes }) => {
  return (
    <div className={classes.root}>
      <List
        component="nav"
        subheader={<ListSubheader component="div">Browse</ListSubheader>}
      >
        <Folders />
        <ClickMenu />
      </List>
    </div>
  );
};

TreeViewPane.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TreeViewPane);
