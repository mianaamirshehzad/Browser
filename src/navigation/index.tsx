import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import SearchScreen from '../screens/SearchScreen';
import NoResultsScreen from '../screens/NoResultsScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}} >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="NoResultsScreen"
          component={NoResultsScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;