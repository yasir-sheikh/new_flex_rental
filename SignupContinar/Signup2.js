import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard, Dimensions,Image} from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { blue_color,white_color } from '../Constants_continar/Constant.js';
import CheckBox from '@react-native-community/checkbox';
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

const SignUp2 =(props)=>{

    // const [text, setText] =useState('');
    // const [textpass, setTextpass] =useState('');
    
    const [onpen_eyes,setopen_eyes]= useState(true)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [Loders, setLoders] = useState(false)



    const [email, setemail] = useState('');
    const [Name, setName] = useState('');
    const [Pass, setPass] = useState('');
    const [Num, setNum] = useState('');
    const [LastName, setLastName] = useState('');
   
   //  const [isEnabled, SetIsEnabled] = useState(true);
    const Form_Handle = async () => {
     //  setisloading(true);
     setLoders(true)
      console.log('Login');
      const URL = `https://flexrental.developer-um.xyz/api/signup`;
      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('first_name', Name);
      formdata.append('last_name', LastName);
      formdata.append('password', Pass);
      formdata.append('phone', Num);
      formdata.append('role', "customer");
           console.log(formdata,'................')
      await fetch(URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formdata,
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
      })
        .then(response => response.json())
        .then(result => {
          console.log('User in DB created', result);
          setLoders(false)
          if(result?.status==true){
            alert("user created successfully")
            setLoders(false)
            props.navigation.navigate('Login');
          }
          else{
            alert("this email already exist")
          }
        
        })
        .catch(error => setLoders(false),
          console.log('error', error));
    };
   




    // useEffect(() => {
      
  
    //   const keyboardDidShowListener = Keyboard.addListener(
    //     'keyboardDidShow',
    //     () => {
    //       setKeyboardVisible(null);
    //       setscrol(0)
    //     },
    //   );
    //   const keyboardDidHideListener = Keyboard.addListener(
    //     'keyboardDidHide',
    //     () => {
    //       setKeyboardVisible('pulse');
    //       setscrol(1)
    //     },
    //   );
    //   // if (! isKeyboardVisible) {
    //   //   // setanimate("fadeOut")
    //   //   setKeyboardVisible(false)
    //   //   // setalternate(1)
    //   // } else {
    //   //   // setanimate("fadeInLeft")
    //   // }
      
    //   return () => {
    //     keyboardDidHideListener.remove();
    //     keyboardDidShowListener.remove();
    //   };
    // }, [props]);

const [scrol,setscrol]=useState(1)

return(



  <View   style={{backgroundColor:"black",alignItems:"center",justifyContent:"center",flex:1}}>
{/* <StatusBar backgroundColor={"black"}/> */}

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
          height:Dimensions.get("screen").height/8,
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          justifyContent:"space-around"}}>
             <View  style={{
          width:"62%",
          height:"62%",
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
       color='white' size={30}  />:
         
    <Text style={{
      color:white_color,
      fontSize:Dimensions.get("screen").height/40,
      fontWeight:"bold"
    }}>Personal Information</Text>
  }
 </View>

 <View style={{
          width:'100%',
          height:Dimensions.get("screen").height/1.8,
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
       }}>Name</Text>
     <TextInput 
     
     mode="flat"
     label="Name"
         onChangeText={(textdata)=>{setName(textdata)}}
     style={{
      height:Dimensions.get("screen").height/17,
      width:'100%',
      backgroundColor:"#ffffff"}} />
       <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>Last Nmae</Text>
     <TextInput 
     
     mode="flat"
     
     label="Last NAME"
    onChangeText={(textdata)=>{setLastName(textdata)}}
     style={{
      height:Dimensions.get("screen").height/17,
      width:'100%',
      backgroundColor:"#ffffff"}} />
       <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>Email</Text>
     <TextInput 
     
     mode="flat"
    label="Email"
        onChangeText={(textdata)=>{setemail(textdata)}}
     style={{
      height:Dimensions.get("screen").height/17,
      width:'100%',
      backgroundColor:"#ffffff"}} />
       <Text style={{
         color:white_color,
         fontSize:Dimensions.get("screen").height/45,
         fontWeight:"bold"
       }}>Phone Number</Text>
     <TextInput 
     
     mode="flat"
     label="Number"
      onChangeText={(textdata)=>{setNum(textdata)}}
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
      // value={password}
      label="Password"
       onChangeText={(textdata)=>{setPass(textdata)}}
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
          height:Dimensions.get("screen").height/7,
          // borderWidth:1,
          borderColor:'white',
          justifyContent:"center",
          alignItems:"center",
          justifyContent:"space-evenly"
          }}>

            <TouchableOpacity 
            onPress={()=>{Form_Handle()}}
              style={{
          width:'50%',
          height:'40%',
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
           

          </View>

</ScrollView>


</View>
  




)




}
export default SignUp2