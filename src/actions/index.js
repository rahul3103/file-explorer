export const setVisibleFolders = folderName => {
  return {
    type: 'TOGGLE_FOLDER',
    folderName
  };
};
export const toggleMenu = anchorEl => {
  return {
    type: 'TOGGLE_MENU',
    anchorEl
  };
};
export const closeMenu = () => {
  return {
    type: 'TOGGLE_MENU',
    anchorEl: null
  };
};
