import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EcoSearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="home" size={24} color="#fff" />
        <View style={styles.profileContainer}>
          <Icon name="person" size={24} color="#fff" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text>
          </View>
        </View>
        <Icon name="more-vert" size={24} color="#fff" />
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ECO</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search or type URL"
          placeholderTextColor="#bdbdbd"
        />
        <Icon name="mic" size={24} color="#000" style={styles.micIcon} />
      </View>

      {/* Discover More */}
      <Text style={styles.discoverMore}>Discover More..</Text>

      {/* Settings Icon */}
      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="settings" size={24} color="#004c66" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004c66',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    marginTop: -10,
  },
  notificationText: {
    color: '#004c66',
    fontSize: 12,
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#004c66',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  micIcon: {
    marginLeft: 8,
  },
  discoverMore: {
    marginTop: 20,
    color: '#bdbdbd',
    fontSize: 16,
    textAlign: 'center',
  },
  settingsButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});

export default EcoSearchScreen;
