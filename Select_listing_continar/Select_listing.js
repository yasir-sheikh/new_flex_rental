

import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    Keyboard,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Pressable,
    Button,
    Dimensions,
    StatusBar,
    RefreshControl,
    ActivityIndicator
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import { BlurView } from "@react-native-community/blur";
  import React, {useState, useEffect, useRef, useCallback} from 'react';
  import Iconburgar from 'react-native-vector-icons/AntDesign';
import Icondone from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Liting_text_flatlist from './Listing_text_flatlist.js';
import { TextInput } from 'react-native-paper';
  import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
  
  import {useSelector} from 'react-redux';
  
  // const WIDTH=Dimensions.get("screen").width;
  // const width = Dimensions.get("screen").width;
  const Select_listing = ({navigation, ...props}) => {
  

    const item = useSelector(state => state.authReducer.item_data);
    // console.log(item.facilities,"................reduxx////////////////////xxxxxxxxxx.")

   const [select, setselect] = useState(null)
    // var newstate = image_get_redux.user[0].image
   console.log('select========',select)
  
    const [isKeyboardVisible, setKeyboardVisible] = useState('');
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible('fadeOutDownBig');
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible('fadeInUpBig');
        },
      );
    
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [props]);
   
  
   
  
    return (
      
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'black',
          
          }}
          scrollEnabled={true}>
          <StatusBar backgroundColor={'black'} />
          <View
            style={{
              width: '100%',
              height:"100%" ,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent:"space-between"
            }}>
            <View
              style={{
                width: '92%',
                height: Dimensions.get("screen").height/8,
                backgroundColor: 'black',
                justifyContent: 'center',
                // flexDirection: 'row',
                alignItems: 'center',
                // borderWidth:1,
                borderColor:"white",
                justifyContent:"space-between"

              }}>
              <View
                style={{
                  width: '78%',
                  height: '65%',
                  backgroundColor: 'black',
                  // flexDirection: 'row',
                //   borderWidth:1,
                borderColor:"white",
                justifyContent: 'center',
                    alignItems: 'center',
                  
                }}>
                <View
                  style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}>
               
                  <Image
                    resizeMode="contain"
                    // source={images}
                    source={require('../assets/new_flex_rental_icon.png')}
                    style={{width: '100%', height: '100%'}}
                  />
              
                </View>
              </View>
             <Text style={{fontWeight:"bold",color:white_color}}>Let Your Guest Know About Your Property's Feature</Text>
               
            </View>
          
            <ScrollView
      contentContainerStyle={{
    width:Dimensions.get("window").width/1,
    justifyContent:"center",
    alignItems:"center"
      
      }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}>


<Liting_text_flatlist  item={item}/>
       
        
            
  
            </ScrollView>
            <Animatable.View
              animation={isKeyboardVisible}
              //  itesrationCount={5}
              direction="alternate"
              easing="ease-out"
              style={{
                width: '100%',
                height: 70,
                // backgroundColor: 'rgba(52, 52, 52, 0.8)',
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth:1,
                position: 'relative',
                // marginTop: 20,
                // top: 0,
                // bottom: 0,
                // left: 0,
                // right: 0,
                // opacity: 0.5,
                // borderColor:"white"
              }}>
              
              <TouchableOpacity 
              onPress={()=>{navigation.navigate("Multiple_upload_image")}}
              style={{
                width:"45%",
                height:"70%",
                backgroundColor:blue_color,
                borderRadius:9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{
                    fontWeight:"bold",
                    color:white_color,
                    fontSize:17
                    }}>DONE</Text>

              </TouchableOpacity>

            </Animatable.View>
  
        
          </View>
        </ScrollView>
      
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#ff6900',
      alignItems: 'center',
      justifyContent: 'center',
      //  marginLeft: 0
    },
    continarview: {
      // height:,
      width: '100%',
      borderWidth: 1,
  
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
      // borderRadius:20
    }, absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },

  });
  
  export default  Select_listing