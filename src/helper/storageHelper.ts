import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToSecureStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Lưu ${key} thất bại`, error);
  }
};

export const getFromSecureStorage = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Lấy ${key} thất bại`, error);
    return null;
  }
};

export const removeFromSecureStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Xoá ${key} thất bại`, error);
  }
};
