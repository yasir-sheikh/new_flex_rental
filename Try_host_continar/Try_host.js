import {
    View,
    Text,
    Image,
    TextInput,
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
  import React, {useState, useEffect, useRef, useCallback} from 'react';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';



const Try_host = ({navigation,...props}) => {
      
    return(

    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: blue_color,
        alignItems: 'center',
      }}>

      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: "black",
          alignItems: 'center',
          justifyContent: 'center',
        //   borderWidth:1,
          borderColor: white_color,
        }}>
          <View style={{
            width:"100%",
            height:"38%",
            // borderWidth:1,
            alignItems: 'center',
            justifyContent: 'center',
        
        }}>
      
          <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"90%",height:"70%"}}
    />

          </View>
        <View
          style={{
            height:"15%" ,
            width: "95%",
            // borderWidth: 1,
            alignItems: 'center',
            borderColor: white_color,
            justifyContent:"center",
            borderColor:"white"
            // borderWidth:1,
            // flexDirection:"row",
            // justifyContent:"flex-start"
          }}>
            
         <Text  style={{
          fontSize:Dimensions.get("screen").height/40,
        //  margin:25,
         fontWeight:"bold",
         color:white_color

        
        }}>Let,s gave  hosting a Try</Text>
        </View>
        <View
          style={{
            height:"46%" ,
            width: "95%",
            // borderWidth: 1,
            alignItems: 'center',
            borderColor: white_color,
            justifyContent:"center",
            borderColor:"white",
            // borderWidth:1,
            // flexDirection:"row",
            // justifyContent:"flex-start"
          }}>
            
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('Listing')}}
              style={{
                height: '35%',
                width: '45%',
                backgroundColor: blue_color,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: white_color,
                // borderWidth:2,
                borderRadius:9
              }}>
             <Text style={{color:white_color,fontWeight:"bold",fontSize:15}} >Let,s GO</Text>
              </TouchableOpacity>
       
        </View>
      </View>
      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent:"space-evenly",
          // borderWidth:1,
          borderColor: white_color,
        }}>
       
        
       
       <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/house.jpg")}
    style={{width:"60%",height:"40%",borderRadius:10}}
    />
       
        <View
          style={{
            height: '20%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            justifyContent:"flex-end",
            borderWidth:1
          }}>

              <TouchableOpacity 
              onPress={()=>{navigation.navigate('Flatlist2')}}
              style={{
                height: '65%',
                width: '60%',
                backgroundColor: blue_color,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: white_color,
                // borderWidth:2,
                borderRadius:9
              }}>
             <Text style={{color:white_color,fontWeight:"bold",fontSize:15}} >Back To My Profile</Text>
              </TouchableOpacity>

        </View>



      </View>
    </View>
  )

}


  export default Try_host;


// import React, {useRef, useEffect} from 'react';
// import {Animated, ScrollView, Text, View} from 'react-native';

// const FadeInView = props => {
//   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

//   // useEffect(() => {
//   //   Animated.timing(fadeAnim, {
//   //     toValue: 1,
//   //     duration: 1000,
//   //     useNativeDriver: true,
//   //   }).start();
//   // }, [fadeAnim]);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}>
//       {props.children}
//     </Animated.View>
//   );
// };

// // You can then use your `FadeInView` in place of a `View` in your components:
// const Try_host =() => {
//   return (
//     <ScrollView scrollEnabled={true}
//     onScroll={(e)=>{
//      console.log(e.nativeEvent.contentOffset.y)
//      if(e.nativeEvent.contentOffset.y){
//       // Animated.timing().start();
//         fadeAnim // Initial value for opacity: 0


//      }else{
      
//      }
//     }}
//     >
//     <View
//       style={{
//         height:500,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <FadeInView
//         style={{
//           width: 250,
//           height: 50,
//           backgroundColor: 'powderblue',
//         }}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
//           Fading in
//         </Text>
//       </FadeInView>
//     </View>
//     <View
//       style={{
//         height:500,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
     
//     </View>
//     </ScrollView>
//   );
// };

// export default Try_host