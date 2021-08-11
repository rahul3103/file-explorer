const anchorEl = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return action.anchorEl;
    default:
      return state;
  }
};

export default anchorEl;
