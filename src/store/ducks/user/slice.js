import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  idToken: '',
  expiresIn: ''
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login(state, action) {
      const idTokenInfo = localStorage.getItem('token');

      if (!idTokenInfo) {
        localStorage.setItem('token', action.payload.idToken);
      }

      return {
        isLoggedIn: true,
        idToken: action.payload.idToken,
        expiresIn: state.expiresIn
      };
    },
    logout() {
      localStorage.removeItem('token');

      // TODO add clearTimeout(runLogoutTimer)
      return {
        isLoggedIn: false,
        idToken: '',
        expiresIn: ''
      };
    },

  }
});

export const userAuthActions = userAuthSlice.actions;

export default userAuthSlice.reducer;