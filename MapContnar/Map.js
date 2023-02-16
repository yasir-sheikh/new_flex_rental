import React, { useEffect, useState } from 'react';  
import { StyleSheet, View ,Text, Button, TouchableOpacity,Switch,Alert, StatusBar,Image} from 'react-native';  
// import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE,Callout ,Polyline} from 'react-native-maps'
import Icondil from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { IconButton } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import GetLocation from 'react-native-get-location'



const APIKEY = 'AIzaSyCIcPl9NQywQ8QwPlpq9Me_frvG4swcVJ8'


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
        // console.warn(code, message);
    })




  })
   

  const usefoce = useIsFocused()

  // const[helostat,sethelostat]=useState({ location:null})

  // _requestLocation = (teste = '') => {

  // useEffect(()=>{
  //   // sethelostat({location: null});

  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     // timeout: 150000,
  //   })
  //     .then(location => {
  //       sethelostat(
  //         location,
  //         // loading: false,
  //       );
  //     })
  //     .catch(ex => {
  //       const {code, message} = ex;
  //       console.warn(code, message);
  //       if (code === 'CANCELLED') {
  //         // Alert.alert('Location cancelled by user or by another request');
  //       }
  //       if (code === 'UNAVAILABLE') {
  //         // Alert.alert('Location service is disabled or unavailable');
  //       }
  //       if (code === 'TIMEOUT') {
  //         // Alert.alert('Location request timed out');
  //       }
  //       if (code === 'UNAUTHORIZED') {
  //         // Alert.alert('Authorization denied');
  //       }
  //       sethelostat(true)
       
  //     });
  //   },[usefoce])
  // };
// console.log(helostat,"jjjjjjj")

const [animate,setanimate]=useState('fadeInUpBig')
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
//   const [ Pin,setPin]=useState({
//     latitude: 30.3753,
//      longitude: 69.3451,
     
// })
const destination = {latitude: 30.3753, longitude: 69.3451};


    console.log("Dark",Drak,constommapaStale,)
    return (  
<>
<StatusBar  backgroundColor={"black"}/>


      <View 
      
      style={styles.MainContainer}
      //  {ss ?  styles.MainContainer:jjj}      
      
      
      >  
      <View  style={styles.MainContainer}
           
            
      
      
      >
{/* <Button title='ONNSS' onPress={()=>{setDrak(false)}}/> */}



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
 

  

        </View>



{/* 
        <View style={{flexDirection:"row",height:"5%",width:"100%",justifyContent:"center",alignItems:"center",}}>
<Switch
  // onPress={}
  // onPress={()=>{setDrak(false)}}
  onValueChange={(state)=>{setDrak(previousState => !previousState);}}

  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={Drak ? "#f5dd4b" : "#f4f3f4"}
  value={Drak}

/>



</View> */}


      </View>
      </>
    );  
  
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