import { createSlice } from '@reduxjs/toolkit';
import { login} from './authThunks'; 
import { saveToSecureStorage, removeFromSecureStorage, getFromSecureStorage } from '../../helper/storageHelper';
interface AuthState {
  isAuthenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
  error: string | null;
  authType: 'login' | 'register';
}

const initialState: AuthState = {
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  authType: 'login',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.access_token = null;
      state.refresh_token = null;
      state.error = null;
      removeFromSecureStorage('access_token'); 
      removeFromSecureStorage('refresh_token');
    },
    setAuthType: (state, action) => {
      state.authType = action.payload;
    },
    switchAuthType: (state) => {
      state.authType = state.authType === 'login' ? 'register' : 'login';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        saveToSecureStorage('access_token', action.payload.access_token);
        saveToSecureStorage('refresh_token', action.payload.refresh_token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.access_token = null;
        state.refresh_token = null;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { logout,setAuthType, switchAuthType } = authSlice.actions;
export default authSlice.reducer;
