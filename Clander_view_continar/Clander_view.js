import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions,Image, StatusBar,ActivityIndicator} from "react-native"
import React, {useState, useEffect, useRef, useCallback} from 'react';
import { blue_color,white_color } from '../Constants_continar/Constant.js';
import CalendarPicker from 'react-native-calendar-picker';
import {useSelector} from 'react-redux';
import Iconback from 'react-native-vector-icons/Ionicons';
import {
  item_redux,
  save_date_pikar

} from '../Main_Ridux/redux/actions/Authacion';
import {useDispatch} from 'react-redux';







const Clander_view =({route,navigation})=>{

    const dispatch_date = useDispatch();
    const [loder,setloder]=useState(false)
    const loder_waite =()=>{
      if(loder){
        setloder(true)
        setTimeout(() => {
          navigation.navigate('Flatlist2')
        }, 2000);
      }else{
        setloder(true)
        setTimeout(() => {
          navigation.navigate('Flatlist2')
        }, 2000);
      }
    }


return (
  <ScrollView scrollEnabled={true}  
  contentContainerStyle={{
    flex:1,
    backgroundColor:"black"
    
  }}
  >
      {/* <StatusBar hidden   /> */}
  <View  style={{
    flex:1,
    // justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"red",
  }}>
    <View  style={{
     height:Dimensions.get("screen").height/38,
     width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"
    // borderWidth:1
  }}></View>

    <View  style={{
     height:Dimensions.get("screen").height/11,
     width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"
    // borderWidth:1
  }}>
    <View style={{
     height:"90%",
     width:"95%",
    justifyContent:"center",
    alignItems:"center",
    // borderWidth:1,
    justifyContent:"space-between",
    flexDirection:"row"
  }}>

<TouchableOpacity  onPress={() => {
            navigation.navigate('Flatlist2')
            }}>
     <Iconback
        name="arrow-back"
        color={white_color}
        size={ Dimensions.get("screen").width / 12}
        
          />
      </TouchableOpacity>
      <Text style={{color:white_color,
      fontSize:Dimensions.get("screen").width / 18
      }}>Check out date</Text>

    </View>

    </View>
    <View  style={{
     height:Dimensions.get("screen").height/6,
     width:"60%",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"red"
    // borderWidth:1
  }}>

    { loder ?
      <ActivityIndicator size="large" color="#ffffff" />:
      <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"80%",height:"55%"}}
    />
    }

  </View>
    
    <View  style={{
    // justifyContent:"center",
    alignItems:"center",
    height:Dimensions.get("screen").height/2.5,
    width:"100%",
    backgroundColor:"black"
    // borderWidth:1
  }}>

<CalendarPicker
            selectedDayColor={'red'}
            // scrollable={false}
        
        nextTitle={'next'}
        previousTitle="Anterior"
        textStyle={{
            fontFamily: 'Cochin',
            color: white_color,
            fontSize:20,
            borderRadius:5,
            margin:1,
          }}
            todayBackgroundColor={blue_color}
          selectedDayTextColor="#FFFFFF"
          scrollable
          horizontal
          enableDateChange={true}
              onDateChange={e => {
             dispatch_date(save_date_pikar(e.format('YYYY-MM-DD')))   
          }}/>

    </View>

         <View   style={{
    justifyContent:"center",
    alignItems:"center",
    height:Dimensions.get("screen").height/5,
    width:"100%",
    // backgroundColor:"red"
  }}>
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('Flatlist2')
        loder_waite()
        }}
    
    style={{
    justifyContent:"center",
    alignItems:"center",
    height:"35%",
    width:"80%",
    backgroundColor:blue_color,
    borderRadius:7,
    borderWidth:2,
    borderColor:white_color
  }}  >
        <Text  style={{color:white_color
            ,fontWeight:"900"}}>Date In Done</Text>
    </TouchableOpacity>
      
         </View>


  </View>
  


  </ScrollView>
);








}
export default Clander_view