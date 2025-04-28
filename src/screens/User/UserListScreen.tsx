import React from 'react';
import { FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useUserListViewModel } from '../../viewmodels/UserListViewModel';
import UserCard from '../../components/UserCard';

const UserListScreen = () => {
  const { users, loading, error } = useUserListViewModel();

  return (
    <>
      <Text style={styles.title}>Danh sách người dùng</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <UserCard user={item} />}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 16,
  },
});

export default UserListScreen;