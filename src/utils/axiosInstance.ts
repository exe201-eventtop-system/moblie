import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios client
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',  
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
// Interceptors - Thêm token vào request
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@user_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý response lỗi hoặc retry token nếu cần
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token không hợp lệ, có thể thực hiện refresh token tại đây
      // Ví dụ: Gửi request refresh token và cập nhật lại token
    }
    return Promise.reject(error);
  }
);

export default apiClient;
