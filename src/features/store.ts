import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './Blog/BlogSlice';
import userReducer from './User/UserSlice';
import authReducer from './Auth/authSlice';


export const store = configureStore({
  reducer: {
    blogs:blogReducer,
    users:userReducer,
    auth:authReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
