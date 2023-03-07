

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
import { StripeProvider } from '@stripe/stripe-react-native';


const App = () => {
 

  return (
    <StripeProvider
      publishableKey={''}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
    <Provider store={store}>
    <NavigationContainer>
   
       <StatusBar/>
       <Auth_home2/>
       </NavigationContainer>

    </Provider>

    </StripeProvider>
  );
};



export default App;
