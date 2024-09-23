import { CHANGE_THEME } from './actionType';

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});
