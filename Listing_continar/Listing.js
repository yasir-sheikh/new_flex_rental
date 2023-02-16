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
  
  
  
  // const WIDTH=Dimensions.get("screen").width;
  // const width = Dimensions.get("screen").width;
  const Listing = ({navigation, ...props}) => {
  
   
    // var newstate = image_get_redux.user[0].image
   
  
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
    
    const [ondesiled,setondesiled]=useState(true)
   const [sclcets,setsclcets]=useState(false)
   const [sclcets_2,setsclcets_2]=useState(false)
   const [sclcets_3,setsclcets_3]=useState(false)
   const [sclcets_4,setsclcets_4]=useState(false)
    
    const buttonn =()=>{
      if(! sclcets){
        setsclcets(true)
        setondesiled(false)
      }else{
        setsclcets(false)
        setondesiled(true)
      }
      
    }
    const buttonn_2 =()=>{
      if(! sclcets_2){
        setsclcets_2(true)
        setondesiled(false)
      }else{
        setsclcets_2(false)
        setondesiled(true)
      }
    }
    const buttonn_3 =()=>{
      if(! sclcets_3){
        setsclcets_3(true)
        setondesiled(false)
      }else{
        setsclcets_3(false)
        setondesiled(true)
      }
    }
    const buttonn_4 =()=>{
      if(! sclcets_4){
        setsclcets_4(true)
        setondesiled(false)
      }else{
        setsclcets_4(false)
        setondesiled(true)
      }
    }

     
    
  const all_select =()=>{
    if(!sclcets  && !sclcets_2 && !sclcets_3 && !sclcets_4 ){
      setsclcets(true)
        setondesiled(false)
    } 
   else if(sclcets  ){
      // setsclcets_2(true)
      // setondesiled(false)
      setsclcets(false)
        setondesiled(true)
      
    }
    
    else if( !sclcets  && !sclcets_2 && !sclcets_3 && !sclcets_4 ){
         setsclcets_2(true)
      setondesiled(false)
    }
    else {
       setsclcets_2(false)
      setondesiled(true)
    }
    // else if(!sclcets  || !sclcets_2 || !sclcets_3 || !sclcets_4){
    //   setsclcets_2(true)
    //   setondesiled(false)
    // }else{
    //   setsclcets_2(false)
    //     setondesiled(true)
    // }
    
    // else {
    //   setsclcets(false)
    //   setondesiled(true)
    // }
    //  if(!sclcets_2){
    //   setsclcets_2(true)
    //   setondesiled(false)
    // }else{
    //   setsclcets_2(false)
    //   setondesiled(true)
    // }
    // if(! sclcets_3){
    //   setsclcets_3(true)
    //   setondesiled(false)
    // }else{
    //   setsclcets_3(false)
    //   setondesiled(true)
    // }
    // if(!sclcets_4){
    //   setsclcets_4(true)
    //     setondesiled(false)
    // }else {
    //   setsclcets_4(false)
    //   setondesiled(true)
    // }
    
  
  }
  
   
  
   
  
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
                height: Dimensions.get("screen").height/13,
                backgroundColor: 'black',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                // borderWidth:1,
                borderColor:"white"
              }}>
              <View
                style={{
                  width: '78%',
                  height: '100%',
                  backgroundColor: 'black',
                  // flexDirection: 'row',
                  // borderWidth:1,
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
             
               
            </View>
          
            <ScrollView
      contentContainerStyle={{
    width:Dimensions.get("window").width/1,
    justifyContent:"center",
    alignItems:"center"
      
      }}
          
          scrollEnabled={true}>
       
            <View style={{
              width:"90%",
              height:Dimensions.get("screen").height/1.4,
               borderColor:'white',
                  // borderWidth:1,
                  justifyContent:"space-evenly"
            }}>
           <View  style={{height:Dimensions.get("screen").height/9,
            // borderColor:'white',
            // borderWidth:1,
      width:'100%',
      justifyContent:"space-between",
      // margin:10
     }}>
           <Text style={{
            fontSize:Dimensions.get("screen").height/43,
            color:white_color,
            fontWeight:"bold"
          }}>Add Listing</Text>
           <Text style={{
            fontSize:Dimensions.get("screen").height/60,
            color:white_color,
            fontWeight:"bold"
          }}  >Lorem ipusm dolor amet consetetur sadipscing elir,sed?</Text>
           </View>

           <TouchableOpacity  
           onPress={()=>{all_select()}}
           style={{
      height:Dimensions.get("screen").height/15,
      width:'100%',
      backgroundColor: sclcets ? "#666666": "black"
      ,borderWidth:1,
      borderColor:sclcets ? blue_color:'white',
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between"

      }}>
<Text style={{
            fontSize:Dimensions.get("screen").height/60,
            color: sclcets ? white_color: blue_color ,
            fontWeight:"bold",
            margin:15
          }}>Lorem ipusm</Text>

<Icondone name= { sclcets ? 'done': ""}
 size={25} color="white" style={{margin:10}} />

           </TouchableOpacity>
           
           
         <TouchableOpacity  
           onPress={()=>{all_select()}}
           style={{
      height:Dimensions.get("screen").height/15,
      width:'100%',
      backgroundColor: sclcets_2 ? "#666666": "black"
      ,borderWidth:1,
      borderColor:sclcets_2 ? blue_color:'white',
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between"

      }}>
<Text style={{
            fontSize:Dimensions.get("screen").height/60,
            color: sclcets_2 ? white_color: blue_color ,
            fontWeight:"bold",
            margin:15
          }}>Lorem ipusm</Text>

<Icondone name= { sclcets_2 ? 'done': ""}
 size={25} color="white" style={{margin:10}} />

           </TouchableOpacity>
           <TouchableOpacity  
           onPress={()=>{all_select()}}
           style={{
      height:Dimensions.get("screen").height/15,
      width:'100%',
      backgroundColor: sclcets_3? "#666666": "black"
      ,borderWidth:1,
      borderColor:sclcets_3 ? blue_color:'white',
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between"

      }}>
<Text style={{
            fontSize:Dimensions.get("screen").height/60,
            color: sclcets_3 ? white_color: blue_color ,
            fontWeight:"bold",
            margin:15
          }}>Lorem ipusm</Text>

<Icondone name= { sclcets_3 ? 'done': ""}
 size={25} color="white" style={{margin:10}} />

           </TouchableOpacity>
           <TouchableOpacity  
           onPress={()=>{all_select()}}
           style={{
      height:Dimensions.get("screen").height/15,
      width:'100%',
      backgroundColor: sclcets_4 ? "#666666": "black"
      ,borderWidth:1,
      borderColor:sclcets_4 ? blue_color:'white',
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between"

      }}>
<Text style={{
            fontSize:Dimensions.get("screen").height/60,
            color: sclcets_4 ? white_color: blue_color ,
            fontWeight:"bold",
            margin:15
          }}>Lorem ipusm</Text>

<Icondone name= { sclcets_4 ? 'done': ""}
 size={25} color="white" style={{margin:10}} />

           </TouchableOpacity>
    
      <View   style={{height:Dimensions.get("screen").height/9,
      width:'100%',
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center"}} >
        <TouchableOpacity  
        disabled={ondesiled}
        style={{height:'60%',
      width:'60%',
      backgroundColor:! ondesiled ? blue_color:'gray',
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10}} >
          <Text style={{
            fontSize:Dimensions.get("screen").height/43,
            color:white_color,
            fontWeight:"bold"
          }}>NEXT</Text>
        </TouchableOpacity>
         </View>
      

            </View>
  
            </ScrollView>
            {/* {! isKeyboardVisible ? */}
            <Animatable.View
              animation={isKeyboardVisible}
              //  itesrationCount={5}
              direction="alternate"
              easing="ease-out"
              style={{
                width: '100%',
                height: 70,
                backgroundColor: blue_color,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '77%',
                  height: 60,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                // onPress={()=>{navigation.navigate("Payment_screen")}}
                  style={{
                    width: 56,
                    height: 56,
                    borderWidth: 2,
                    borderRadius: 100,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Iconburgar name="bars" size={32} color="white" />
                </TouchableOpacity>
                <View style={{width: '37%', height: '100%'}}></View>
                <TouchableOpacity
                onPress={() =>navigation.navigate("Profile_main")}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // justifyContent: 'flex-end',
                    // flexDirection: 'row',
                    borderWidth:2,
                    borderColor:white_color
                  }}>
                  <Iconburgar name="bars" size={32} color="white" />
                </TouchableOpacity>
              </View>
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
  
  export default  Listing 