import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Images } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const SearchResultsScreen = ({ route }: any) => {
  const { searchResults, searchQuery: searchValue } = route.params;
  const [searchQuery, setSearchQuery] = useState(searchValue);
  const [results, setResults] = useState(searchValue);
  console.log('searchQuery: ', searchQuery);

  const navigation = useNavigation();

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      console.log('Search query is empty');
      return;
    }

    const endpoint = `https://solvefree.com/api/search?query=${encodeURIComponent(searchQuery)}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      // console.log('Search Results:', data);
      setResults(data?.data)
      let totalResults = data?.data?.searchInformation?.totalResults;
      console.log(`total results `, totalResults);

      if (totalResults == 0) {
        navigation.navigate('NoResultsScreen');
      }
      // Handle the search results here (e.g., update state or navigate)
    } catch (error: any) {
      console.error('Search API Error:', error.message);
      navigation.navigate('NoResultsScreen');
    } 
  };

  const renderResultItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => navigation.navigate('WebViewScreen', { link: item.link })}
    >
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultSnippet}>{item.snippet}</Text>
      <Text style={styles.resultLink}>{item.link}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={Images.logo}
          style={styles.logo}
        />
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          // placeholder='Search...'
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
          editable  = {false}
        />
        <TouchableOpacity onPress={handleSearch} disabled  >
          {/* <Image source={Images.search} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

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
  logoContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    // Adding embossed effect
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 0.25,
    borderColor: '#bbb',
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: "contain",
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  searchInput: {
    // color: 'white',
    fontSize: 14,
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
