// viewmodels/LoginViewModel.ts
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/Auth/authThunks';
import type { RootState, AppDispatch } from '../features/store';
import { LoginRequest } from '../models/Login';

export const LoginViewModel = () => {
  const dispatch: AppDispatch = useDispatch();
  const {  error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = (data: LoginRequest) => {
    dispatch(login(data));
  };

  return { login: handleLogin,  error, isAuthenticated };
};
