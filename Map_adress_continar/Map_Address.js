

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
  import {blue_color, white_color} from '../Constants_continar/Constant.js';import { Marker } from 'react-native-maps';  
  import MapViewDirections from 'react-native-maps-directions';
  import MapView, { PROVIDER_GOOGLE,Callout ,Polyline} from 'react-native-maps'
  import Icondil from 'react-native-vector-icons/FontAwesome';
  import * as Animatable from 'react-native-animatable';
  import { IconButton } from 'react-native-paper';
  import { useIsFocused } from '@react-navigation/native';
  
  import GetLocation from 'react-native-get-location'
  
  
  
  const APIKEY = 'AIzaSyCIcPl9NQywQ8QwPlpq9Me_frvG4swcVJ8'




const Map_Adress = ({navigation,...props}) => {
    let constommapaStale =[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
      const [Drak,setDrak]=useState(true)
      const [animate,setanimate]=useState('fadeInUpBig')
      const [stylesss,setstyle]=useState(constommapaStale)
      const destination = {latitude: 30.3753, longitude: 69.3451};
      useEffect(()=>{
      if(Drak==true){
        setstyle(constommapaStale)
      }else{
        setstyle([])
      }
      },[Drak])


      useEffect(()=>{
    
    
    
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log('hhhhhhhhhhhhhhhhhhh',location);
            // setuserLucation(location)
        })
        .catch(error => {
            const { code, message } = error;
            // console.warn(code, message);
        })
    
    
    
    
      })

    return(

    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(34,34,34)',
        alignItems: 'center',
      }}>
        <View style={{
             height:Dimensions.get("screen").height/7.4,
             width: '100%',
            //  borderWidth:1,
             justifyContent:"center",
             alignItems:"center",
             justifyContent:"space-evenly",
             backgroundColor:"rgb(34,34,34)"}}>

                <Text style={{
                    fontSize:Dimensions.get("screen").height/50,
                    fontWeight:"bold",
                    color:white_color
                    }}>Where Is Your Place Located?</Text>
                {/* <Text style={{
                    fontSize:Dimensions.get("screen").height/50,
                    fontWeight:"bold",
                    color:white_color
                    }}>Is The Pin In The Right Spot?</Text> */}

                <TextInput 
                placeholder='Enter Your Address'
                placeholderTextColor={white_color}
                style={{
                    width:"80%",borderWidth:2,
                borderColor:white_color,
                borderRadius:9,
                height:Dimensions.get("screen").height/17,}}/>
         </View>
        <ScrollView  contentContainerStyle={{
            //  height:Dimensions.get("screen").height/1,
             width:Dimensions.get("window").width/1 ,
            // backgroundColor: white_color,
        // alignItems: 'center',
        }}>
         
         <View style={{ height:Dimensions.get("screen").height/1.5,
             width: '100%',
            //  borderWidth:1
             }}>
                <MapView 
          style={styles.mapStyle}  
          showsUserLocation={true}  
          //  region={Pin}
        customMapStyle={stylesss}

          zoomEnabled={true}  
          zoomControlEnabled={true} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={{  
            latitude: 30.3753,   
            longitude: 69.3451,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
           
          <Marker  
            coordinate={destination}
            draggable={true}
            
            pinColor="red"
            onDragStart={(e)=>{
              setanimate("")
              console.log("helo map", e.nativeEvent.coordinate)
            }}
            onDragEnd={(e)=>{
              // setPin({
              //     latitude: e.nativeEvent.coordinate.latitude,
              //     longitude: e.nativeEvent.coordinate.longitude
              // })
              console.log("helo map", )
              setanimate("rubberBand")
            }} 
             
          >


{/* <Icondil name="map-pin" size={40} color="red" /> */}
<MapViewDirections
    origin={destination}
    destination={destination}
    apikey={APIKEY}
    // strokeWidth={3}
    // strokeColor="red"
    strokeWidth={4}
    strokeColor="white"
  />

<Animatable.View
animation={animate} 
// duration={600}
delay={400}
iterationCount={animate=="fadeInDown"?2:1}
direction={"alternate"} style={{width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:100,borderColor:"white",
// borderWidth:3,


}}>

         <Image
           style={{width:"100%",height:"100%",}}
           source={require("../assets/placeholder-filled-point.png")}
           resizeMode="contain"
        />
    </Animatable.View>
    

<Callout  
//  tooltip={true}
 style={{
  width: 200,
  height: 50,
  backgroundColor: 'black',
  borderRadius: 10,
  zIndex: 10,
  justifyContent:"center",
  alignItems:"center"
}}
>
         {/* <View style={{width:200,height:500,borderWidth:1}}> */}
          <Text style={{color:"white"}}>I M Here</Text>
          {/* </View> */}
        </Callout>
          </Marker>
        

        </MapView> 
             </View >

             <View style={{
             height:Dimensions.get("screen").height/11,
             width: '100%',
            //  borderWidth:1,
             justifyContent:"center",
             alignItems:"center",
            //  justifyContent:"space-between",
             }}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate("Select_listing")}}
                style={{
                    width:"70%",
                    height:'70%',
                    borderWidth:2,
                    borderColor:white_color,
                    borderRadius:7,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"black"

                }}>
                    <Text style={{
                color:"white",
                fontWeight:"900"
                }}>NEXT</Text>

                </TouchableOpacity>

             </View>
        </ScrollView>

  
    </View>
  )

}
const styles = StyleSheet.create({  
    MainContainer: {  
   flex:1 ,
   justifyContent:"center"
    },  
    mapStyle: {  
     width:"100%",
     height:"100%",
    //  backgroundColor:"black"
     
    },  
  }); 

  export default Map_Adress;