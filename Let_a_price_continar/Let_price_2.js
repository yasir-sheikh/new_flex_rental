

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
  import React, {useState, useEffect, useRef, useCallback} from 'react';
  import Iconplus from 'react-native-vector-icons/AntDesign';
  import Iconpng from 'react-native-vector-icons/MaterialCommunityIcons';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {connect} from 'react-redux';
  import {useSelector} from 'react-redux';
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';
  import Iconright from 'react-native-vector-icons/Entypo';
  import { BlurView } from "@react-native-community/blur";
  import DocumentPicker, { types } from 'react-native-document-picker';




const Let_price_2 = ({navigation,...props}) => {


  const [tittle,settitle]=useState('')
  const [disible,setdisible]=useState(true)
  const [counter,setcounter]=useState(40)
  const [counter_1,setcounter_1]=useState(20)


   

      

    return(

        <View style={{height:"100%",width:"100%",backgroundColor:"black",alignItems:"center",justifyContent:"center"}}>

           
            <ScrollView scrollEnabled={true} 
            contentContainerStyle={{
                width:Dimensions.get("window").width/1,
                justifyContent:"center",
                alignItems:"center"
            }}
            >

        <View  style={{
            width:"90%",
            height:Dimensions.get("screen").height/3.5,
            borderWidth:1,
            justifyContent:"center",
                alignItems:"center"
        }}>
       <Text style={{
        fontSize:Dimensions.get("window").width/15,margin:10,
       fontWeight:"900",color:white_color

       }}>Do You Require A Security Deposite Or No ?</Text>
       {/* <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,margin:10

       }}>Pick A Price Per Night</Text> */}
        </View>
        <View  style={{
            width:"90%",
            height:Dimensions.get("screen").height/1.7,
            borderWidth:1,
           alignItems:"center"

        }}>

<Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,

       }}>Pick A Price Per Night</Text>

         <View   style={{height:"16%",width:"100%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-around",
        // backgroundColor: blue_color,
        flexDirection:"row"
        // borderRadius:7,
        }} >

<Iconplus name= 'minuscircle'
onPress={() => {setcounter(counter - 5)}}
size={28} color="white"  /> 
   <View   style={{height:"65%",width:"70%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-around",
        backgroundColor: blue_color,
        flexDirection:"row",
        borderRadius:7,
        }}
   >
    <Text style={{
        fontSize:Dimensions.get("window").width/17,
       fontWeight:"900",color:white_color

       }}>{counter}$</Text>
    
     </View>

           <Iconplus name= 'pluscircle'
size={28} color="white" 
onPress={() => {setcounter(counter + 5)}}

/> 

         </View>

         <View        style={{height:"15%",width:"80%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-between",
        // backgroundColor: disible ? 'gray': blue_color,
        borderRadius:7,
        flexDirection:"row",
        margin:100
        }}>
            <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Profile_main")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-start",
        flexDirection:"row",
        backgroundColor: blue_color,
        borderRadius:7,
        }}>
<Iconright name= 'arrow-with-circle-left'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={45} color={"white"}  /> 
        </TouchableOpacity>

       
        <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Tittle_3")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-end",
        flexDirection:"row",
        backgroundColor: blue_color,
        borderRadius:7,
        }}>
<Iconright name= 'arrow-with-circle-right'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={45} color={ "white"}  /> 
        </TouchableOpacity>
        </View>

{/*        
<TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Tittle_3")}}
        style={{height:"11%",width:"50%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor:  white_color,
        justifyContent:"space-around",
        backgroundColor:  blue_color,
        borderRadius:7,
        margin:50
        }}>
<Text style={{fontWeight:"bold",color:white_color}}> NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Profile_main")}}
        style={{height:"11%",width:"50%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor: white_color,
        justifyContent:"space-around",
        backgroundColor: blue_color,
        borderRadius:7,
        margin:20
        }}>
<Text style={{fontWeight:"bold",color:white_color}}>BACK</Text>
        </TouchableOpacity> */}

        </View>


            </ScrollView>
          
         

        
         
        </View>
  )

}


  
   

 export default Let_price_2