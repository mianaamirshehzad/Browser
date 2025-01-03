import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" />
      <Text style={styles.text}>Searching...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust based on your screen background
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#4d5156',
  },
});

export default Loading;
