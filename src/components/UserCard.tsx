import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ user }: { user: { name: string; email: string } }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E40AF', // Blue-700
  },
  email: {
    color: '#4B5563', // Gray-600
  },
});

export default UserCard;
