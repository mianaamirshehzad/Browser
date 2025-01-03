import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Images } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const NoResultsScreen = () => {
    const navigation = useNavigation();

  const handleRetry = () => {
    navigation.navigate("SearchScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={Images.no_results} style={styles.icon} />
      <Text style={styles.title}>No Results Found</Text>
      <Text style={styles.subtitle}>
        Please check your search query{'\n'}or try again.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleRetry}>
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', 
  },
  icon: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A4A66', 
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E8E',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#0A4A66',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', 
    textAlign: 'center',
  },
});

export default NoResultsScreen;
