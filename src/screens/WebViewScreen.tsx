import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Images } from '../assets/images'; 

const WebViewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { link }: any = route.params;

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.icon} tintColor={"white"} />
        </TouchableOpacity>
        <View style={{ width: 30 }} /> 
      </View> */}

      {/* WebView */}
      <WebView source={{ uri: link }} />
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
});

export default WebViewScreen;
