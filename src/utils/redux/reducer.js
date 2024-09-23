import { CHANGE_THEME } from './actionType';

const initialState = {
  darkMode: localStorage.getItem('isDarkMode') === 'true',
};

export const changeTheme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};
