
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
  import Iconfile from 'react-native-vector-icons/FontAwesome';
  import Iconpng from 'react-native-vector-icons/MaterialCommunityIcons';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {connect} from 'react-redux';
  import {useSelector} from 'react-redux';
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';
  import { BlurView } from "@react-native-community/blur";
  import Iconright from 'react-native-vector-icons/Entypo';
  import DocumentPicker, { types } from 'react-native-document-picker';




const Tittle_3 = ({navigation,...props}) => {


  const [tittle,settitle]=useState('')
  const [disible,setdisible]=useState(true)

    useEffect(()=>{
        if(tittle){
        setdisible(false)
        }else{
            setdisible(true)
        }
    })

      

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
        fontSize:Dimensions.get("window").width/18,margin:10,
       fontWeight:"900",color:blue_color

       }}>What Is The CheckIn Instruction ?</Text>
       <Text style={{
        fontSize:Dimensions.get("window").width/20,
       fontWeight:"900",color:white_color,margin:10

       }}>CheckIn Instruction</Text>
        </View>
        <View  style={{
            width:"90%",
            height:Dimensions.get("screen").height/1.7,
            borderWidth:1,
           alignItems:"center"

        }}>

            <TextInput 
            onChangeText={(text)=>{settitle(text)}}
            placeholder='CheckIn Instruction'
            placeholderTextColor={white_color}
            style={{width:"100%",height:"20%",borderWidth:2,
            borderColor:white_color,
            padding:10,
        borderRadius:10,fontSize:20}}
            />

<View        style={{height:"15%",width:"80%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-between",
        // backgroundColor: disible ? 'gray': blue_color,
        borderRadius:7,
        flexDirection:"row",
        margin:110
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
        disabled={disible}
         onPress={()=>{navigation.navigate("Let_price_3")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-end",
        flexDirection:"row",
        backgroundColor: disible ? 'gray': blue_color,
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


  
   

 export default Tittle_3