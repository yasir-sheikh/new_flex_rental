// import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions,Image, StatusBar} from "react-native"
// import React, {useState, useEffect, useRef, useCallback} from 'react';
// import { CardField, useStripe } from '@stripe/stripe-react-native';
// import {FlatListSlider} from 'react-native-flatlist-slider';
// import { initStripe } from '@stripe/stripe-react-native';
// import { blue_color,white_color } from '../Constants_continar/Constant.js';

// const DATA = [
//   {
//    img:require('../assets/Mastercard_1.png'),
//   },
//  {
//    img:require('../assets/all_card.png'),
//  },
//  {
//   img:require('../assets/Debit-Card_1.png'),
// },
// {
//   img:require('../assets/new_visa.png'),
// },

//  ];

// const Payment_screen =({route,navigation})=>{
  
//   // console.log(route.params.store_rout.rate_per_night,'//////////pppppppppppppppp')
     

//   useEffect(() => {
//     // initStripe({
//     //   // publishableKey: '',
//     //   // merchantIdentifier: 'merchant.identifier',
//     //   // urlScheme: "your-url-scheme",
//     // });
//   }, []);


//   const ImagesOK = () => {
//     return (
//       <>
//         {DATA.map(val => {
//           return (
//             <>
//               <ImageBackground
//               resizeMode="cover"
//               imageStyle={{

//               }

//               }
//                 source={val.img}
//                 style={{
//                   height: Dimensions.get("screen").height /4.3,
//                   width: Dimensions.get("screen").width/1.3,
//                  alignItems:"center",
//                  justifyContent:"space-evenly",

//                 //  ,marginLeft:20,
//                  marginHorizontal:5,
//                  margin:5,
//                  backgroundColor:"black"
//                 //  borderWidth:1

//                 }}
//               >
//               </ImageBackground>
//             </>
//           );
//         })}
//       </>
//     );
//   };



// const { confirmPayment } = useStripe();

// return (
//   <ScrollView scrollEnabled={true}  
//   contentContainerStyle={{
//     flex:1,
//     backgroundColor:"black",
    
//   }}
//   >
//       <StatusBar hidden   />
//     {/* <StatusBar backgroundColor={"red"}/> */}
//   <View  style={{
//     flex:1,
//     // justifyContent:"center",
//     alignItems:"center",
//     borderWidth:1
    
//   }}>
//      <View  style={{
//     width:"100%",
//     height:Dimensions.get("screen").height/3.5,
//     justifyContent:"center",
//     alignItems:"center",
//     // borderWidth:1,
//     backgroundColor:"black",
//     // borderColor:'red'

//   }} >
    
//     <FlatListSlider
//           data={DATA}
//           width={Dimensions.get("screen").width/1.4}
//           height={ Dimensions.get("screen").height/1.5}
//           // timer={6000}
//           imagekey="img"
//           marginLeft={20}
//           // autoscroll={false}
//           // loop={false}
//           // imageKey={'banner'}
//           component={<ImagesOK/>}
//           indicatorActiveWidth={20}
//           indicatorActiveColor="white"
//           onPress={item => alert(JSON.stringify(item))}
//           contentContainerStyle={{
//             alignItems:"center", 
//             backgroundColor:"black"
//           }}
//         />
  


//   </View>
//     <View  style={{
//     width:"100%",
//     height:Dimensions.get("screen").height/4,
//     justifyContent:"center",
//     alignItems:"center",
//     borderWidth:1

//   }} >
//   <CardField
//     postalCodeEnabled={true}
//     placeholders={{
//       number: '4242 4242 4242 4242',
//     }}
//     cardStyle={{
//       backgroundColor: '#ffffff',
//       textColor: 'black',
//       borderColor:blue_color,
//       borderWidth:2,
//       borderRadius:5
//     }}
//     style={{
//       width: '100%',
//       height: Dimensions.get("screen").height/10,
//       borderWidth:1,
//       borderColor:"red"
      
//       // marginVertical: 30,
//       // borderRadius:10
//     }}
//     onCardChange={(cardDetails) => {
//       console.log('cardDetails', cardDetails);
//     }}
//     onFocus={(focusedField) => {
//       console.log('focusField', focusedField);
//     }}
//   />
//   </View>

//   <View style={{
//        width:"100%",
//        height:Dimensions.get("screen").height/3,
//        justifyContent:"center",
//        alignItems:"center",
//   }}>
//     <View style={{
//       width:"90%",
//       height:"8%",
//       justifyContent:"center",
//       // alignItems:"center",
//       // borderWidth:1,
//       // borderColor:"red",
//       backgroundColor:"#000000",
//       // margin:25
//       // borderRadius:7
//  }}>
//     <Text style={{color:"white",fontWeight:"900"}} >Rs: {route.params?.store_rout?.rate_per_night} $</Text>
    
//     </View>

//     <View    style={{
//       width:"50%",
//       height:"30%",
//       justifyContent:"center",
//       alignItems:"center",
//       // borderWidth:1,
//       // borderColor:"red",
//       backgroundColor:"#000000",
//       margin:25
//       // borderRadius:7
//  }}>
      
// <Image    
//     resizeMode="contain"
//     // source={images}
//     source={require("../assets/new_flex_rental_icon.png")}
//     style={{width:"100%",height:"100%"}}
//     />

//     </View>
//     <TouchableOpacity  
//     style={{
//       width:"85%",
//       height:"20%",
//       justifyContent:"center",
//       alignItems:"center",
//       borderWidth:2,
//       borderColor:blue_color,
//       backgroundColor:"#FFFFFF",
//       borderRadius:7
//  }}
//     >
//     <Text style={{color:"black",fontWeight:"900"}}>CARD PAY DONE</Text>
//     </TouchableOpacity>
//   </View>
//   </View>


//   </ScrollView>
// );








// }
// export default Payment_screen






// stripe link npm 

// https://github.com/stripe/stripe-react-native