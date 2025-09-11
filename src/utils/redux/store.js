import { configureStore } from '@reduxjs/toolkit';
import { changeTheme } from './reducer';

const store = configureStore({
  reducer: {
    darkMode: changeTheme,
  },
});

export default store;
