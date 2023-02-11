
import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions,Image,
   StatusBar,SafeAreaView} from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from "react";
import {updateUser} from "../Main_Ridux/redux/actions/Authacion"
import { useDispatch } from "react-redux";
import { blue_color,white_color } from '../Constants_continar/Constant.js';
import * as Animatable from 'react-native-animatable';
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



const Login2 =(Props)=>{

  
    const [onpen_eyes,setonpen_eyes]= useState(true)


    const dispatch=useDispatch()


    // const [isKeyboardVisible, setKeyboardVisible] = useState("");

    // useEffect(() => {
      
  
    //   const keyboardDidShowListener = Keyboard.addListener(
    //     'keyboardDidShow',
    //     () => {
    //       setKeyboardVisible('pulse');
    //    setscrol(0)

    //     },
    //   );
    //   const keyboardDidHideListener = Keyboard.addListener(
    //     'keyboardDidHide',
    //     () => {
    //       setKeyboardVisible(null);
    //    setscrol(1)

    //     },
    //   );
    
      
    //   return () => {
    //     keyboardDidHideListener.remove();
    //     keyboardDidShowListener.remove();
    //   };
    // }, [Props]);

    const [Loders, setLoders] = useState(false)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [ShowPas,setShowPass]=useState(false)
    const[data_save,setdata_save]=useState("")

    const logins = () => {
    setLoders(true)

    const formData = new FormData()
    formData.append("email",email)
    formData.append("password",password)
    formData.append('role', "customer");
       
    fetch(`https://flexrental.developer-um.xyz/api/login`,{
  
        method: 'POST',
        // mode: 'no-cors',
        headers: {  "Content-Type": "multipart/form-data",
        "Accept": "application/json"
        
    
    },
        body: formData
    })
    
    .then(Response=> Response.json())
    // setdata_save( Response.json())
    .then(json=>{
        console.log("heloojson",json)
  
        // setdata_save(json)
        setLoders(false)
        if(json.status==false){
          alert(json?.message)
        }
         
        console.log(json.token,"tokenn")
        
        dispatch(updateUser(json))
        setLoders(false)
    })
  
    .catch(e=>{
        // alert(e,"Login Error")
        
        // setLoders(true)
    })
  
    // console.log(data_save,"datattttttttttt")
      
     };


return(
  

 
<View   style={{backgroundColor:"black",alignItems:"center",justifyContent:"center",flex:1}}>
<StatusBar backgroundColor={"black"}/>

<ScrollView   
  scrollEnabled={true}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
         backgroundColor:"black",
         width:Dimensions.get("window").width/1
        }}

 >
 
 <View style={{
          width:'100%',
          height:Dimensions.get("screen").height/4.5,
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          justifyContent:"space-around"}}>
             <View  style={{
          width:"50%",
          height:"50%",
          justifyContent:"center",
          alignItems:"center",
          borderColor:'white',
          // borderWidth:1
  }}>
    <Image    
      resizeMode="contain"
      source={require("../assets/new_flex_rental_icon.png")}
      style={{width:"100%",
      height:"100%"}}
    />
    </View>

    {
    Loders ?
     <SkypeIndicator  
       color='white'  />:
         
    <Text style={{
      color:white_color,
      fontSize:Dimensions.get("screen").height/37,
      fontWeight:"bold"
    }}>Login to your Account</Text>
  }
 </View>

 <View style={{
          width:'100%',
          height:Dimensions.get("screen").height/3.5,
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          justifyContent:"space-around"}}>
           
 <View style={{
          width:'85%',
          height:"100%",
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          // alignItems:"center",
          justifyContent:"space-evenly"}} > 
        
        <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>Email</Text>
     <TextInput 
     
     mode="flat"
     value={email}
     label="Email"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setemail(textdata)}}
    //  placeholder=" Enter Your Password" 
     style={{
      height:Dimensions.get("screen").height/17,
      width:'100%',
      backgroundColor:"#ffffff"}} />

       <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>Password:</Text>
     
     <TextInput 
      mode="flat"
      value={password}
      label="Password"
      onChangeText={(textdata)=>{setpassword(textdata)}}
      right={<TextInput.Icon  onPress={()=>{setonpen_eyes(false)}} 
       icon="eye" color={"black"} />}
     // placeholder="Enter Your Password" 
      secureTextEntry={onpen_eyes}
      style={{height:Dimensions.get("screen").height/17,
      width:'100%',
      backgroundColor:"#ffffff"}} />

 </View>

 </View>
 <View style={{
          width:'100%',
          height:Dimensions.get("screen").height/3.1,
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          justifyContent:"space-evenly"
          }}>

            <TouchableOpacity 
            onPress={()=>{logins()}}
              style={{
          width:'50%',
          height:'18%',
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:blue_color,
          borderRadius:7
          }}>
   <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>
              SIGN IN
            </Text>
            </TouchableOpacity>
            <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>
              New to Flex Rental
            </Text>
            <TouchableOpacity 
            onPress={()=>{Props.navigation.navigate('SignUp')}}
            >
            <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold",
         textDecorationLine:"underline ",
       }}>
              CREATE AN ACCOUNT
            </Text>
            </TouchableOpacity>

          </View>

</ScrollView>


</View>



)



}
export default Login2



// "@stripe/stripe-react-native": "^0.20.0",