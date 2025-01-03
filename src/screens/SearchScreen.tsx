import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../assets/images';
import Loading from '../components/Loading';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searching, setSearching] = useState(false);

    const navigation = useNavigation();


    const handleSearch = async () => {
        setSearching(true);
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
            let totalResults = data?.data?.searchInformation?.totalResults;
            console.log(`total results ` , totalResults);

            if (totalResults == 0) {
                navigation.navigate('NoResultsScreen');
            } else {
            navigation.navigate('SearchResultsScreen', { searchResults: data.data });

            }
            

            // Handle the search results here (e.g., update state or navigate)
        } catch (error: any) {
            console.error('Search API Error:', error.message);
            navigation.navigate('NoResultsScreen');
        } finally {
            setSearching(false)
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={Images.profile} style={styles.micIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Images.dots} style={styles.micIcon} />
                </TouchableOpacity>
            </View>


            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image source={Images.logo} style={styles.logo} />
            </View>

            {/* Search Bar */}
            {searching ? (
                <Loading />
            ) : (
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search or type URL"
                        placeholderTextColor="#bdbdbd"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSearch} // Called when Enter key is pressed
                        returnKeyType="search" // Changes the keyboard "Enter" button to "Search"

                    />
                    <TouchableOpacity onPress={handleSearch} >
                        <Image source={Images.search} style={styles.micIcon} />
                    </TouchableOpacity>
                </View>
            )}


            <View style={styles.bottomContainer}>
                <Text style={styles.discoverMore}>Discover More..</Text>
                <TouchableOpacity style={styles.settingsButton}>
                    <Image source={Images.settings} style={[styles.micIcon, { height: 20 }]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
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
    logo: {
        width: 150,
        resizeMode: 'contain',
    },
    micIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
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
    discoverMore: {
        color: '#bdbdbd',
        fontSize: 16,
        textAlign: 'center',
    },
    settingsButton: {
        right: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
        paddingHorizontal: 20,
    },
});

export default SearchScreen;
