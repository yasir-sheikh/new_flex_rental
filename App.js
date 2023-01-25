

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Auth_home2 from './Auth_home_continar2/Auth_home2';
import { Provider } from 'react-redux';
import {store} from './Main_Ridux/redux/Store'


const App = () => {
 

  return (
   
    <Provider store={store}>
    <NavigationContainer>
   
       <StatusBar/>
       <Auth_home2/>
       </NavigationContainer>

    </Provider>

  
  );
};



export default App;
