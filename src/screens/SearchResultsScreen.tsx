import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { Images } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const SearchResultsScreen = ({ route }: any) => {
  const { searchResults } = route.params;

  const navigation = useNavigation();
  const renderResultItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => Linking.openURL(item.link)} 
    >
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultSnippet}>{item.snippet}</Text>
      <Text style={styles.resultLink}>{item.link}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.icon} tintColor={"white"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Results</Text>
        <View style={{ width: 30 }} /> 
      </View>

      {/* Results List */}
      <FlatList
        data={searchResults.items}
        renderItem={renderResultItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#004c66',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  resultItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a0dab',
  },
  resultSnippet: {
    fontSize: 14,
    color: '#4d5156',
    marginVertical: 5,
  },
  resultLink: {
    fontSize: 12,
    color: '#006621',
  },
});

export default SearchResultsScreen;
