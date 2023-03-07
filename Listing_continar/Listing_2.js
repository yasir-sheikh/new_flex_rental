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
import Iconright from 'react-native-vector-icons/Entypo';
import Iconc from 'react-native-vector-icons/MaterialCommunityIcons';
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
  const Listing_2 = ({navigation, ...props}) => {
  
   const [select, setselect] = useState(null)
    // var newstate = image_get_redux.user[0].image
  //  console.log('select========',select)
  
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
      const box_data =  [
      {
        "userId": 1,
        "id": 1,
        "title": "A Entir Place ",
        "completed": false,
        'url': 'https://flexrental.developer-hi.xyz/static/media/bedroom.cdffd9acb899230b369f.jpg'
      },
      {
        "userId": 1,
        "id": 2,
        "title": "A Private Room ",
        "completed": false,
        'url': 'https://flexrental.developer-hi.xyz/static/media/place.3f171ddb6b0cd2515006.jpg'
          
        
      },
     
    ]
    const [ondesiled,setondesiled]=useState(true)
    useEffect(()=>{
      if(select==null){
        setondesiled(true)
      }else{
        setondesiled(false)
      }
    })
  
   
  
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
          }}  >2. What Kind Of Space Will Guest Have ?</Text>
           </View>
     { box_data.map((item,index)=> {
      console.log(item.url,'.............')
    return (
     

<TouchableOpacity  
onPress={() =>{setselect(index == select ? null : index)}}
style={{
height:Dimensions.get("screen").height/13,
width:'100%',
backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
borderRadius:10,
justifyContent:"center",
alignItems:"center",
flexDirection:"row",
justifyContent:"space-between"

}}>
<Text style={{
 fontSize:Dimensions.get("screen").height/60,
 color: index == select ? white_color: blue_color ,
 fontWeight:"bold",
 margin:15
}}>{item.title}</Text>
<Image
                    resizeMode="contain"
                    // source={images}
                    source={{uri:item.url}}
                    style={{width: '17%', height: '70%',margin:10,borderRadius:5}}
                  />





</TouchableOpacity>
     )})
  
     }
          
          
    
      <View   style={{height:Dimensions.get("screen").height/9,
      width:'100%',
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center"}} >
        <TouchableOpacity  
        onPress={()=>{navigation.navigate("Map_Adress")}}
        disabled={ondesiled}
        style={{height:'62%',
      width:'60%',
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10}} >
               <Iconright name= 'arrow-with-circle-right'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={55} color={ ! ondesiled ? white_color:'gray'}  /> 
 {/* <Text style={{margin:9}}>NEXT</Text> */}
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
                onPress={()=>{navigation.navigate("Flatlist2")}}
                  style={{
                    width: 56,
                    height: 56,
                    borderWidth: 2,
                    borderRadius: 100,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Iconright name= 'arrow-left'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
                   size={40} color={ 'white'}  /> 
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
                  {/* <Iconburgar name="bars" size={32} color="white" /> */}
                  <Iconc name="account-outline" size={45} color="white" />
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
  
  export default  Listing_2