import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home/HomeScreen';
import UserListScreen from '../../screens/User/UserListScreen';
import MainLayout from '../layouts/MainLayout'; // import MainLayout
import BlogListScreen from '../../screens/Blog/BlogListScreen';

const Stack = createNativeStackNavigator();

// Wrapper component for HomeScreen
const HomeScreenWrapper = () => (
  <MainLayout>
    <HomeScreen />
  </MainLayout>
);

// Wrapper component for UserListScreen
const UserListScreenWrapper = () => (
  <MainLayout>
    <UserListScreen />
  </MainLayout>
);

// Wrapper component for BlogListScreen
const BlogListScreenWrapper = () => (
  <MainLayout>
    <BlogListScreen />
  </MainLayout>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreenWrapper} 
        />
        <Stack.Screen 
          name="Users" 
          component={UserListScreenWrapper} 
        />
        <Stack.Screen 
          name="Post" 
          component={BlogListScreenWrapper} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
