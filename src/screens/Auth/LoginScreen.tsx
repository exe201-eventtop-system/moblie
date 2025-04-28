import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { LoginViewModel } from '../../viewmodels/LoginViewModel';
import { LoginRequest } from '../../models/Login';
import { Formik } from 'formik';
import { loginSchema } from '../../features/Auth/validation/loginSchema'; // Import schema validation

const LoginScreen: React.FC = () => {
  const { login } = LoginViewModel();

  const handleSubmit = (values: LoginRequest) => {
    login(values);
  };

  return (
    <View className="flex-1 bg-black p-4 justify-center">
      <Text className="text-3xl text-white font-bold mb-6">Login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema} // Sử dụng schema đã import
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Email Input */}
            <TextInput
              className="border-b-2 border-white mb-4 text-white p-2"
              placeholder="Enter your email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Text className="text-red-500 mb-4">{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              className="border-b-2 border-white mb-4 text-white p-2"
              placeholder="Enter your password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <Text className="text-red-500 mb-4">{errors.password}</Text>
            )}

            {/* Login Button */}
            {/* <Button
              title={loading ? 'Logging in...' : 'Login'}
              onPress={() => handleSubmit()}
            /> */}
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
