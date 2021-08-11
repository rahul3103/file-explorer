const visibleFolders = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_FOLDER':
      const key = action.folderName;
      if (state[key])
        return {
          ...state,
          [key]: !state[key]
        };
      else
        return {
          ...state,
          [key]: true
        };
    default:
      return state;
  }
};

export default visibleFolders;
