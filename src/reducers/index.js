import { combineReducers } from 'redux';
import visibleFolders from './visibleFolders';
import initialFolders from './initialFolders';
import anchorEl from './anchorEl';

const fileBrowser = combineReducers({
  visibleFolders,
  initialFolders,
  anchorEl
});

export default fileBrowser;
