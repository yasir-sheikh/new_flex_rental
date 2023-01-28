import React, { useEffect, useState } from 'react';  
import { StyleSheet, View ,Text, Button, TouchableOpacity,Switch,Alert, StatusBar} from 'react-native';  
// import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import MapView, { PROVIDER_GOOGLE,Callout ,Polyline} from 'react-native-maps'
import Icondil from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { IconButton } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import GetLocation from 'react-native-get-location'





export default function Map  ()  {  




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
        console.warn(code, message);
    })




  })
   

  const usefoce = useIsFocused()

  // const[helostat,sethelostat]=useState({ location:null})

  // _requestLocation = (teste = '') => {

  useEffect(()=>{
    // sethelostat({location: null});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        sethelostat(
          location,
          // loading: false,
        );
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          // Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          // Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          // Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          // Alert.alert('Authorization denied');
        }
        sethelostat(true)
       
      });
    },[usefoce])
  // };
// console.log(helostat,"jjjjjjj")

  
const [stylesss,setstyle]=useState(constommapaStale)
useEffect(()=>{
if(Drak==true){
  setstyle(constommapaStale)
}else{
  setstyle([])
}
},[Drak])
  const toggleSwitch = () =>setDrak (previousState => !previousState);
  const [Drak_1,setDrak_1]=useState(false)
  const [userLucation,setuserLucation]=useState(true)
  const [ Pin,setPin]=useState({
    latitude: 30.3753,
     longitude: 69.3451,
     
})

    console.log("Dark",Drak,constommapaStale,)
    return (  
<>
{/* { Drak ? */}

      <View 
      
      style={styles.MainContainer}
      //  {ss ?  styles.MainContainer:jjj}      
      
      
      >  
      <StatusBar translucent backgroundColor={"transparent"}/>
      <Animatable.View  style={styles.MainContainer}
           animation="fadeInLeft"
           //  itesrationCount={5}
            direction="alternate"
            easing="ease-out"
            
      
      
      >
{/* <Button title='ONNSS' onPress={()=>{setDrak(false)}}/> */}
<View style={{flexDirection:"row",height:20,width:"100%",justifyContent:"center",alignItems:"center",}}>
<Switch
  // onPress={}
  // onPress={()=>{setDrak(false)}}
  onValueChange={(state)=>{setDrak(previousState => !previousState);}}

  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={Drak ? "#f5dd4b" : "#f4f3f4"}
  value={Drak}

/>



</View>


{/* 
{ Drak ? */}
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
            coordinate={Pin}
            draggable={true}
            pinColor="red"
            onDragStart={(e)=>{
              console.log("helo map", e.nativeEvent.coordinate)
            }}
            onDragEnd={(e)=>{
              setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
              })
              console.log("helo map", )
            }} 

          >


<Icondil name="map-pin" size={40} color="red" />
    

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
 

  

        </Animatable.View>







      </View>
      </>
    );  
  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
 flex:1 
  },  
  mapStyle: {  
   width:"100%",
   height:"100%",
  //  backgroundColor:"black"
   
  },  
});  