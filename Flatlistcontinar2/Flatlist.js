import { View ,Text,Image, TextInput,FlatList,StyleSheet,ScrollView,
    Keyboard, ImageBackground, TouchableOpacity,Modal,Pressable,Button,Dimensions, StatusBar} from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import React,{useState,useEffect,useRef} from 'react';
  import Icond from 'react-native-vector-icons/Ionicons';
  import Iconh from 'react-native-vector-icons/Feather';
  import Iconc from 'react-native-vector-icons/MaterialCommunityIcons';
  import Iconacount from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icondrop from 'react-native-vector-icons/AntDesign';
  import Iconfont from 'react-native-vector-icons/FontAwesome';
  import {connect} from "react-redux"
  import { removeUser } from '../Main_Ridux/redux/actions/Authacion';
  import * as Animatable from 'react-native-animatable';
  import DatePicker from 'react-native-date-picker'
  import SelectDropdown from 'react-native-select-dropdown'
  import DrawerLayout from 'react-native-drawer-layout'
  import ImagePicker from 'react-native-image-picker';
  import {launchCamera, launchImageLibrary,remove,} from 'react-native-image-picker';
  import { blue_color,white_color } from '../Constants_continar/Constant.js';
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
  import {useSelector} from "react-redux"
  import {
    updateUser,
    api_store_redux_data,
    image_redux,
    Listin_item
  } from '../Main_Ridux/redux/actions/Authacion';
  import {useDispatch} from 'react-redux';


   const  Flatlists =({item,navigation})=>{
             
    // const items = useSelector(state => state.authReducer.item_data);
    // console.log(items.cover_photo,"................reduxxxxxxxxxxxx.")
  const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(Listin_item(item));
    },[])
    // console.log(,".................")

  
    return(
      <>
      <View style={{ height:Dimensions.get("screen").height/2.3, width:"100%", borderWidth:1,alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:"black"
  //  backgroundColor: 'white',
  // borderRadius:20
}}>
     
     <Pressable
      onPress={()=>{navigation.navigate("Imageview2",{item})}}
     style={{ height:Dimensions.get("screen").height/4.1, width:Dimensions.get("window").width/1.2,alignItems: 'center',borderRadius:15}} >
     <Image    
resizeMode="cover"
source={{uri:`https://flexrental.developer-um.xyz/storage/${item.cover_photo}`}}
style={{width:"100%",height:"100%",borderRadius:15}}
/>
      
       
     </Pressable>
     <View style={{ height:"45%", width:"90%", borderWidth:1,justifyContent:"center",backgroundColor:"black"}} >
      <Text style={{color:"white",fontWeight:"bold",fontSize:Dimensions.get("screen").height/50}}>{item.title} </Text>
      <Text style={{color:"#00bfff",fontWeight:"bold",fontSize:Dimensions.get("screen").height/50}}>${item.rate_per_night}/Night </Text>
      <Text style={{color:"gray",fontWeight:"bold",fontSize:Dimensions.get("screen").height/70}}>Karachi pakistan</Text>
     
     {/* <TouchableOpacity
     onPress={()=>{navigation.navigate("Imageview2",{item})}}
      style={{width:"48%",height:"27%",backgroundColor:blue_color,margin:7,borderRadius:9,
    justifyContent:"center",alignItems:"center"
    }}>
     <Text style={{color:"#ffffff",fontWeight:"bold",fontSize:Dimensions.get("screen").height/60}}>more information </Text>
     </TouchableOpacity> */}

</View>

    






      </View>
      
      </>
    )
}

export default Flatlists