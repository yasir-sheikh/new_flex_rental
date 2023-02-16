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
  import Iconacount from 'react-native-vector-icons/MaterialCommunityIcons';
  import {
    updateUser,
    api_store_redux_data,
    image_redux,
  } from '../Main_Ridux/redux/actions/Authacion';
  import {useDispatch} from 'react-redux';
  import {connect} from 'react-redux';
  import {
    launchCamera,
    launchImageLibrary,
    remove,
  } from 'react-native-image-picker';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {useSelector} from 'react-redux';
 
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';




const Hosting = ({navigation,...props}) => {
      
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

        
        }}>Welcome To Host!</Text>
        </View>
        <View
          style={{
            height:"46%" ,
            width: "95%",
            // borderWidth: 1,
            // alignItems: 'center',
            borderColor: white_color,
            justifyContent:"center",
            borderColor:"white",
            // borderWidth:1,
            // flexDirection:"row",
            // justifyContent:"flex-start"
          }}>
            
         <Text  style={{
          fontSize:Dimensions.get("screen").height/45,
        //  margin:25,
         fontWeight:"bold",
         color:white_color

        
        }}>Your Listings</Text>
        <View
          style={{
            height:"45%" ,
            width: "100%",
            // borderWidth: 1,
            alignItems: 'center',
            borderColor: white_color,
            justifyContent:"center",
            borderColor:"white",
            // borderWidth:1,
            flexDirection:"row",
            justifyContent:"flex-start"
          }}>

<Iconacount name="checkbox-blank" 
size={Dimensions.get("screen").height/30} color={'#68bc00'} />
            
         <Text  style={{
          fontSize:Dimensions.get("screen").height/50,
         margin:10,
         fontWeight:"bold",
         color:white_color

        
        }}>1 Badroom Luxuries Condo</Text>
        </View>
        </View>
      </View>
      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent:"space-evenly"
          // borderWidth:1
        }}>
        <View
          style={{
            height: '10%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"row",
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity style={{flexDirection:"row",}}
            onPress={()=>{navigation.navigate('Try_host')}}
            
            >

            <Iconacount name="plus" size={Dimensions.get("screen").height/33} color={white_color} />
          <Text style={{
            color:white_color,
           fontSize:Dimensions.get("screen").height/50,
           fontWeight:"bold",
           textDecorationLine:"underline ",
           margin:3
          
          }} >CREATE A NEW LISTING</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            // borderWidth:1,
            flexDirection:"row",
            justifyContent:"flex-start"
          }}>
            <Iconacount name="checkbox-blank" 
size={Dimensions.get("screen").height/30} color={'#68bc00'} />
          <Text style={{color:white_color,
            fontSize:Dimensions.get("screen").height/45,
            fontWeight:"bold",margin:10
          }} >Approval Listing</Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            // borderWidth:1
            flexDirection:"row",
            justifyContent:"flex-start"
          }}>
                      <Iconacount name="checkbox-blank" 
             size={Dimensions.get("screen").height/30} color={'#f44336'} />
          <Text style={{
            color:white_color,
            fontSize:Dimensions.get("screen").height/50,
            fontWeight:"bold",
            margin:10

          }} >Panding Approval Listing</Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1,
            flexDirection:"row",
            justifyContent:"flex-start",
            
          }}>
               <Iconacount name="checkbox-blank" 
             size={Dimensions.get("screen").height/30} color={'#ffc107'} />
          <Text style={
            {color:white_color,
              fontSize:Dimensions.get("screen").height/50,
              fontWeight:"bold",
              margin:10
          }} >Temproraiiy Panding Approval Listing</Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
         
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity >
         
            </TouchableOpacity>
    
        </View>
        <View
          style={{
            height: '20%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
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
             <Text style={{color:white_color,fontWeight:"bold",fontSize:15}} >SWITCH TO USER</Text>
              </TouchableOpacity>

        </View>



      </View>
    </View>
  )

}


  export default Hosting;