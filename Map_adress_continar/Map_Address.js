

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
  import {blue_color, white_color} from '../Constants_continar/Constant.js'
  ;import { Circle, Marker } from 'react-native-maps';  
  import MapViewDirections from 'react-native-maps-directions';
  import MapView, { PROVIDER_GOOGLE,Callout ,Polyline} from 'react-native-maps'
  import Icons from 'react-native-vector-icons/AntDesign';
  import * as Animatable from 'react-native-animatable';
  // import { IconButton } from 'react-native-paper';
  import { useIsFocused } from '@react-navigation/native';
  import GetLocation from 'react-native-get-location'
  import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
  
  
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
      const [Search,setSearch]=useState([])
      console.log(Search,'ffffffffffffffffffff')
      // const destination = {latitude: 30.3753, longitude: 69.3451};
      const [region, setRegion] = useState({
        latitude: 24.9096082,   
        longitude: 67.0254397,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      // const onRegionChange = (region) => {
      //   setRegion(region);
      // };
      useEffect(()=>{
      if(Drak==true){
        setstyle(constommapaStale)
      }else{
        setstyle([])
      }
      },[Drak])


      const onSearchResult = (data, details) => {
        // console.log(data,'dddddddddddddddddddd')
        const { geometry } = details;
        const { location } = geometry;
        console.log(location,'llllllllllllllllllllllllll')
          
        setRegion({
          // latitude: location.lat,
          // longitude: location.lng,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitude: location.lat,   
          longitude:  location.lng,  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        });
      };

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
             width: Dimensions.get("window").width/1,
            //  borderWidth:1,
             justifyContent:"center",
             alignItems:"center",
             justifyContent:"space-evenly",
             backgroundColor:"rgb(34,34,34)"}}
             >

                <Text style={{
                    fontSize:Dimensions.get("screen").height/50,
                    fontWeight:"bold",
                    color:white_color
                    }}>Where Is Your Place Located?</Text>
                
                      <GooglePlacesAutocomplete
                       renderLeftButton={()  => <Icons name='search1'
                       type='evilicon' color={white_color} size={25} style={{margin:9}}/>}
                            returnKeyType={"search"}
                            // fetchDetails={true}
                            name="search1"
      placeholder='Enter your placeholder text here'
      debounce={400}
      textInputProps={{ placeholderTextColor: 'pink' }}
      query={{
        key: 'AIzaSyCIcPl9NQywQ8QwPlpq9Me_frvG4swcVJ8',
        language: 'en'
    }}
    // onPress={onSearchResult}

    // value={destination.searchKeyword}
    onPress={(data, details = onSearchResult) => {
      console.log(details,'//////////')
      setSearch({data});
  }}
styles={{
textInput: {
backgroundColor: '#464646',
},
textInputContainer: {
width:Dimensions.get("window").width/1.2,
margin:15
},
// in
}}
    />
  

                
         </View>
        <ScrollView  contentContainerStyle={{
             width:Dimensions.get("window").width/1 ,
        }}>
         
         <View style={{ height:Dimensions.get("screen").height/1.5,
             width: '100%',
            //  borderWidth:1
             }}>
                <MapView 
                
          style={styles.mapStyle}  
          showsUserLocation={true}  
           region={region}
        customMapStyle={stylesss}

          zoomEnabled={true}  
          zoomControlEnabled={false} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={{  
            latitude: 24.9096082,   
            longitude: 67.0254397,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}
          >  
          <Marker  
            coordinate={region}
            draggable={true}
      
            backgroundColor={'red'}
            pinColor="red"
            onDragStart={(e)=>{
              setanimate("")
              console.log("helo map", e.nativeEvent.coordinate)
            }}
            onDragEnd={(e)=>{
              // setRegion({
              //     latitude: e.nativeEvent.coordinate.latitude,
              //     longitude: e.nativeEvent.coordinate.longitude
              // })
              console.log("helo map", )
              setanimate("rubberBand")
            }} 
             
          >


<MapViewDirections
    origin={region}
    destination={region}
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
direction={"alternate"} style={{width:40,height:40,alignItems:"center",
justifyContent:"center",borderRadius:100,borderColor:"white",
shadowColor: "black",
// backgroundColor:"black",

shadowOffset: {
  width: 4,
  height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 9,
// borderWidth:3,


}}>

         <Image
          
          
           style={{width:"80%",height:"80%",    shadowColor: "#ffffff",
          //  backgroundColor:"black",
           
           shadowOffset: {
             width: 4,
             height: 12,
           },
           shadowOpacity: 0.58,
           shadowRadius: 16.00,
           
           elevation: 24,}}
           source={require("../assets/placeholder-filled-point.png")}
           resizeMode="contain"
        />
    </Animatable.View>
    

<Callout  
//  tooltip={true}
 style={{
  width: 100,
  height: 30,
  backgroundColor: 'black',
  borderRadius: 10,
  // zIndex: 10,
  justifyContent:"center",
  alignItems:"center"
}}
>

          <Text style={{color:"white"}}>I M Here</Text>
        </Callout>
          </Marker>
        <Circle  
        fillColor='white'
        zIndex={8}
        center={{latitude: 24.9096082,   
            longitude: -67.0254397,  }}
             strokeColor={'#ffffff'} strokeWidth={3}
             >   
        </Circle>

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
                    // borderWidth:2,
                    borderColor:white_color,
                    borderRadius:7,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"#464646"

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
   justifyContent:"center",
  //  ...StyleSheet.absoluteFillObject,
    },  
    mapStyle: {  
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...StyleSheet.absoluteFillObject,
    //  width:"100%",
    //  height:"100%",
    //  backgroundColor:"black"
     
    },  
    toInputBoxStyles:{
      width:300
    }

  }); 

  export default Map_Adress;

  