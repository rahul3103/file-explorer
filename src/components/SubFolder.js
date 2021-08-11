import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Collapse } from '@material-ui/core';
import Folder from './Folder';

const SubFolder = ({ visibleFolders, padding, identifier, childrens }) => {
  if (!childrens) return null;
  padding = padding + 20;
  let final = [];
  function findFalsy(data, key) {
    if (!data) final.push(key);
    else if (Array.isArray(data)) {
      data.forEach(val => {
        findFalsy(val);
      });
    } else if (typeof data === 'object')
      Object.keys(data).forEach(key => {
        findFalsy(data[key], key);
      });
  }
  return (
    <Collapse in={visibleFolders[identifier]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {childrens.map(child => (
          <Folder
            key={child.identifier}
            name={child.name || child.file_name}
            padding={padding}
            identifier={child.identifier}
            children={child.children}
          />
        ))}
      </List>
    </Collapse>
  );
};

SubFolder.propTypes = {
  visibleFolders: PropTypes.object.isRequired
};

const select = state => ({
  visibleFolders: state.visibleFolders
});

export default connect(select)(SubFolder);
