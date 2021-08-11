import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import SubFolder from './SubFolder';
import { setVisibleFolders, toggleMenu } from '../actions';

const Folder = ({
  visibleFolders,
  dispatch,
  name,
  padding,
  identifier,
  children
}) => {
  const renderExpanders = (children, identifier) => {
    if (!children) return;
    return visibleFolders[identifier] ? <ExpandLess /> : <ExpandMore />;
  };
  return (
    <div>
      <ListItem
        key={identifier}
        button
        style={{ paddingLeft: padding }}
        onClick={() => dispatch(setVisibleFolders(identifier))}
        onContextMenu={event => {
          event.preventDefault();
          dispatch(toggleMenu(event.currentTarget));
        }}
      >
        <ListItemIcon>{children ? <FolderIcon /> : <InboxIcon />}</ListItemIcon>
        <ListItemText inset primary={name} />
        {renderExpanders(children, identifier)}
      </ListItem>
      <SubFolder
        identifier={identifier}
        childrens={children}
        padding={padding}
      />
    </div>
  );
};

Folder.propTypes = {
  visibleFolders: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const select = state => ({
  visibleFolders: state.visibleFolders,
  initialFolders: state.initialFolders
});

export default connect(select)(Folder);
