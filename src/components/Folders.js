import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Folder from './Folder';

const Folders = ({ initialFolders }) =>
  initialFolders.map(folder => (
    <Folder
      key={folder.identifier}
      name={folder.name}
      padding={20}
      identifier={folder.identifier}
      children={folder.children}
    />
  ));
Folders.propTypes = {
  initialFolders: PropTypes.array.isRequired
};

const select = state => ({
  initialFolders: state.initialFolders
});

export default connect(select)(Folders);
