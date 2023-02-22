



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
  import { BlurView } from "@react-native-community/blur";
  import DocumentPicker, { types } from 'react-native-document-picker';
  import Iconright from 'react-native-vector-icons/Entypo';



const Let_price_4 = ({navigation,...props}) => {


  const [tittle,settitle]=useState('')
  const [disible,setdisible]=useState(true)
  const [counter,setcounter]=useState(0)
  const [counter_1,setcounter_1]=useState(0)
  const [counter_2,setcounter_2]=useState(0)
  const [counter_3,setcounter_3]=useState(0)


   

      

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
            height:Dimensions.get("screen").height/4.5,
            borderWidth:1,
            justifyContent:"center",
                alignItems:"center"
        }}>
       <Text style={{
        fontSize:Dimensions.get("window").width/15,margin:10,
       fontWeight:"900",color:white_color

       }}>How Many Type Of Bed Do You Have?</Text>
       {/* <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,margin:10

       }}>Pick A Price Per Night</Text> */}
        </View>
        <View  style={{
            width:"90%",
            height:Dimensions.get("screen").height/1.7,
            borderWidth:1,
           alignItems:"center",
           justifyContent:"space-evenly"
        //    justifyContent:"center",

        }}>

<Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,

       }}>King Bed</Text>

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
onPress={() => {setcounter(counter - 1)}}
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

       }}>{counter}</Text>
    
     </View>

           <Iconplus name= 'pluscircle'
size={28} color="white" 
onPress={() => {setcounter(counter + 1)}}

/> 

         </View>
         <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,
    //    margin:10

       }}>Queen Bed</Text>
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
onPress={() => {setcounter_1(counter_1 - 1)}}
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

       }}>{counter_1}</Text>
    
     </View>

           <Iconplus name= 'pluscircle'
           onPress={() => {setcounter_1(counter_1 + 1)}}
size={28} color="white"  /> 

         </View>
         <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,

       }}>Double Bed</Text>
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
onPress={() => {setcounter_2(counter_2 - 1)}}
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

       }}>{counter_2}</Text>
    
     </View>
     

           <Iconplus name= 'pluscircle'
           onPress={() => {setcounter_2(counter_2 + 1)}}
size={28} color="white"  /> 

         </View>
         <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,

       }}>Single Bed</Text>

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
onPress={() => {setcounter_3(counter_3 - 1)}}
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

       }}>{counter_3}</Text>
    
     </View>
     

           <Iconplus name= 'pluscircle'
           onPress={() => {setcounter_3(counter_3 + 1)}}
size={28} color="white"  /> 

         </View>
         <View        style={{height:"15%",width:"80%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-between",
        // backgroundColor: disible ? 'gray': blue_color,
        borderRadius:7,
        flexDirection:"row",
        // margin:110
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
         onPress={()=>{navigation.navigate("Up_load_salfi")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-end",
        flexDirection:"row",
        backgroundColor:  blue_color,
        borderRadius:7,
        }}>
<Iconright name= 'arrow-with-circle-right'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={45} color={ "white"}  /> 
        </TouchableOpacity>
        </View>

        </View>


            </ScrollView>
          
         

        
         
        </View>
  )

}


  
   

 export default Let_price_4