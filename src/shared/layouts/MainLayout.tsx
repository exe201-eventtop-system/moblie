import React, { ReactNode } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>{children}</View>

      {/* Thanh điều hướng */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItemContainer}
          onPress={() => handleNavigate('Home')}>
          <Text style={styles.navItem}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItemContainer}
          onPress={() => handleNavigate('Users')}>
          <Text style={styles.navItem}>👥 Users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItemContainer}
          onPress={() => handleNavigate('Post')}>
          <Text style={styles.navItem}>📝 Posts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f9',
  },
  inner: {
    flex: 1,
    padding: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
  },
  navItemContainer: {
    alignItems: 'center',
  },
  navItem: {
    fontSize: 16,
    color: '#6200ee',
    fontWeight: '600',
  },
});

export default MainLayout;
