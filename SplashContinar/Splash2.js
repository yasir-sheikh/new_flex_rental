import { useEffect, useState } from "react"
import { StatusBar } from "react-native"
import { View ,Text , Button, ImageBackground,ScrollView,StyleSheet,Animated} from "react-native"



const Splash2 =(Props)=>{

useEffect(()=>{
  // SplashScreen.hide()
  // console.log( SplashScreen.show())
})

return(

<View  style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
  <StatusBar backgroundColor={"black"}/>


<View style={{width:"100%",height:"23%",backgroundColor:"black"}} >



</View>
<View style={{width:"100%",height:"47%",alignItems:"center",justifyContent:"center",backgroundColor:"black"}} >

<View style={{width:"60%",height:"50%",backgroundColor:"black"}}>
<ImageBackground   


resizeMode="contain"
source={require("../assets/new_flex_rental_icon.png")}
style={{width:"100%",height:"100%"}}


>
 


</ImageBackground>
</View>
<View style={{width:"90%",height:"25%",alignItems:"center",justifyContent:"center"}}>
 
</View>


</View>
<View style={{width:"100%",height:"30%",backgroundColor:"black"}} >
{/* <ImageBackground   


resizeMode="cover"
// source={images}
source={require("../assets/login_last.png")}
style={{width:"100%",height:"100%"}}

>
 


</ImageBackground> */}

</View>



</View>


)




}
export default Splash2


// const  Splash2 =()=>{

//   const newdata = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "quidem molestiae enim"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "sunt qui excepturi placeat culpa"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "omnis laborum odio"
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "non esse culpa molestiae omnis sed optio"
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "eaque aut omnis a"
//     },
//     {
//       "userId": 1,
//       "id": 6,
//       "title": "natus impedit quibusdam illo est"
//     },
//     {
//       "userId": 1,
//       "id": 7,
//       "title": "quibusdam autem aliquid et et quia"
//     },
//     {
//       "userId": 1,
//       "id": 8,
//       "title": "qui fuga est a eum"
//     },
//     {
//       "userId": 1,
//       "id": 9,
//       "title": "saepe unde necessitatibus rem"
//     },
//     {
//       "userId": 1,
//       "id": 10,
//       "title": "distinctio laborum qui"
//     },
//     {
//       "userId": 2,
//       "id": 11,
//       "title": "quam nostrum impedit mollitia quod et dolor"
//     },
//     {
//       "userId": 2,
//       "id": 12,
//       "title": "consequatur autem doloribus natus consectetur"
//     },
//   ]
//  let animate_header_value = new Animated.Value(0);
//   const [v,setv]=useState(false)
//  const Header_max_Hight = 150;
//  const Header_mini_Hight =50

// const animated_header_background_color = animate_header_value.interpolate({
//   inputRange: [0 , Header_max_Hight - Header_mini_Hight],
//   outputRange:['blue','green'],
//   extrapolate:'clamp'
// })
// const animated_header_Hight = animate_header_value.interpolate({
//   inputRange: [0 , Header_max_Hight - Header_mini_Hight],
//   outputRange:[Header_max_Hight , Header_mini_Hight],
//   extrapolate:'clamp'
// })

// return(

//   <>

//   <View style={{flex:1,backgroundColor:"red"}}>

//    <Animated.View 
//    style={[styles.header,
//     {
//       height: animated_header_Hight,
//       backgroundColor: animated_header_background_color
//     }
//   ]}
   
//    >
//     <Text>animation heradersssssssss</Text>
//     { Header_mini_Hight ?
//  <Text>animation heradersssssssss</Text>:null
//     }
   
//    </Animated.View>

//   <ScrollView scrollEventThrottle={16}
//   onScroll={  Animated.event(
    
//     [{nativeEvent: {contentOffset:{y: animate_header_value }}}],
//     {useNativeDriver: false}
   

//   ) }
//   >
    
//     {
//       newdata.map((item,index)=>{
       
//         console.log(item,'sssssssssssssss')
 
//         return(
//           <>
//           <View style={{height:200}}>
//           <Text>{item.title}</Text>

//           </View>
          
//           </>
//         )


//       })
//     }

//   </ScrollView>

//   </View>

//   </>
// )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#ff6900',
//     alignItems: 'center',
//     justifyContent: 'center',
//     //  marginLeft: 0
//   },
//   header :{
//     alignItems: 'center',
//     justifyContent: 'center',
   
//   }
 

// });
// export default Splash2


// header scroll code 


// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import ReactNativeParallaxHeader from 'react-native-parallax-header';
 
// const {height: SCREEN_HEIGHT} = Dimensions.get('window');
 
// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
// const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
// const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
// const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
// const renderNavBar = () => (
//   <View style={styles.navContainer}>
//     <View style={styles.statusBar} />
//     <View style={styles.navBar}>
//       <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
//         <Text style={{color: 'white'}}>About</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
//         <Text style={{color: 'white'}}>Me</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );
 
// const renderContent = () => {
//   return (
    
//     <View style={styles.body}>
//       {Array.from(Array(30).keys()).map((i) => (
//         <View
//           key={i}
//           style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
//           <Text>Item {i + 1}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };
 

 
// const App = () => {
//   const [x,setx]=useState(false)
//   const title = () => {
//     return (
//       <>
//       { x ?
//       <View style={styles.body}>
//         <Text style={{color: 'white', fontSize: 25}}>Parallax Header</Text>
//       </View>:null
//       }
//       </>
//     );
//   };

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <ReactNativeParallaxHeader
//         headerMinHeight={HEADER_HEIGHT}
//         scrollEventThrottle={5}
//         headerMaxHeight={250}
//         extraScrollHeight={20}
//         navbarColor="#3498db"
//         titleStyle={styles.titleStyle}
//         title={title()}
//         backgroundImage={require('../assets/mastercard-2.png')}
//         backgroundImageScale={1.2}
//         renderNavBar={renderNavBar}
//         renderContent={renderContent}
//         containerStyle={styles.container}
//         contentContainerStyle={styles.contentContainer}
//         innerContainerStyle={styles.container}
//         scrollViewProps={{
//           // onScrollBeginDrag: () =>setx(true)
//             // if(x){
//             //   setx(false)
//             // }else{
//             //   setx(true)
//             // }
          
          
//           // console.log('onScrollBeginDrag'),
//           onScrollEndDrag: () => {if(x){
//             setx(false)
//           }else{
//             setx(true)
//           }}
          

//         }}
//       >
//       {/* <Text>ERRRRRRRR</Text> */}

//       </ReactNativeParallaxHeader>
//     </>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
//   navContainer: {
//     height: HEADER_HEIGHT,
//     marginHorizontal: 10,
//   },
//   statusBar: {
//     height: STATUS_BAR_HEIGHT,
//     backgroundColor: 'transparent',
//   },
//   navBar: {
//     height: NAV_BAR_HEIGHT,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//   },
//   titleStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   body:{
//     backgroundColor:"red"
//   }
// });

 
// export default App
