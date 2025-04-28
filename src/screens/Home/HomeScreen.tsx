import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>Đây là trang chính của ứng dụng.</Text>
      <Button title="Bắt đầu ngay" onPress={() => alert('Bắt đầu hành trình!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
})

export default HomeScreen
