import { createPostThunk } from '../genericsCreateThunk';
import { LoginRequest, LoginResponse } from '../../models/Login';
import { RegisterRequest } from '../../models/Register';
import Toast from 'react-native-toast-message';

export const login = createPostThunk<LoginResponse, LoginRequest>(
  'auth/login',
  '/login',
  {
    onError: (msg) =>
      Toast.show({
        type: 'error',
        text1: 'Đăng nhập thất bại',
        text2: msg,
      }),
  }
);

export const register = createPostThunk<void, RegisterRequest>(
  'auth/register',
  '/register',
  {
    onError: (msg) =>
      Toast.show({
        type: 'error',
        text1: 'Đăng ký thất bại',
        text2: msg,
      }),
  }
);

export const profile = createPostThunk<LoginRequest, void>(
  'auth/login',
  '/login',
  {
    onError: (msg) =>
      Toast.show({
        type: 'error',
        text1: 'Lỗi lấy thông tin người dùng',
        text2: msg,
      }),
  }
);
