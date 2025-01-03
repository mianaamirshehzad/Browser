import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyStack from './src/navigation';

const EcoSearchScreen = () => {

  return (
    <View style={styles.container}>
        <MyStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  }
});

export default EcoSearchScreen;
