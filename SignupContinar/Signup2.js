import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard, Dimensions,Image} from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from "react";
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
   




    useEffect(() => {
      
  
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
          setscrol(0)
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
          setscrol(1)
        },
      );
      // if (! isKeyboardVisible) {
      //   // setanimate("fadeOut")
      //   setKeyboardVisible(false)
      //   // setalternate(1)
      // } else {
      //   // setanimate("fadeInLeft")
      // }
      
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [props]);

const [scrol,setscrol]=useState(1)

return(



  
 <ScrollView   contentContainerStyle={{flex:scrol,backgroundColor:"black"}} scrollEnabled={true} > 

<View   style={{backgroundColor:"black",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>

  <View style={{width:"90%",height:Dimensions.get("screen").height/7,justifyContent:"center",alignItems:"center",
  borderWidth:1,backgroundColor:"black"}}>
    <View style={{width:"60%",height:"80%",justifyContent:"center",alignItems:"center",borderWidth:1,backgroundColor:"black"}}> 
    {/* <Icon name="account-multiple-plus-outline" size={40} color="#00bfff" /> */}
    {
    Loders ?
     <SkypeIndicator    color='white'  />:
    <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"100%",height:"100%"}}
    />
    }
    </View>

  
  </View>

     
     <View  style={{width:"90%",height:Dimensions.get("screen").height/1.9, justifyContent:"center",alignItems:"center",
     }}> 
     
    

     
  <Text style={{fontSize:Dimensions.get("screen").height/50,color:"white",fontWeight:"bold"}}>Create account</Text>

      

         
     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Name"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setName(textdata)}}
     placeholder=" Enter Your Name" style={{height:Dimensions.get("screen").height/17,width:"90%",margin:5,backgroundColor:"#ffffff"}} />
      

      

     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Last NAME"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setLastName(textdata)}}
     placeholder=" Enter Your LastName" style={{height:Dimensions.get("screen").height/17,width:"90%",margin:5,backgroundColor:"#ffffff"}} />
      

     

     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Email"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setemail(textdata)}}
     placeholder=" Enter Your Password" style={{height:Dimensions.get("screen").height/17,width:"90%",margin:5,backgroundColor:"#ffffff"}} />
      
     
     
        
      <TextInput 
       mode="outlined"
      //  value={textpass}
       label="Number"
       onChangeText={(textdata)=>{setNum(textdata)}}
      placeholder="Enter Your number"  secureTextEntry={onpen_eyes} style={{height:Dimensions.get("screen").height/17
      ,width:"90%",margin:5,backgroundColor:"#ffffff"}} />

      <TextInput 
       mode="outlined"
      //  value={textpass}
       label="Password"
       onChangeText={(textdata)=>{setPass(textdata)}}
       right={<TextInput.Icon onPress={()=>{setonpen_eyes(false)}}   icon="eye" />}
      placeholder="Enter Your Password"  secureTextEntry={onpen_eyes} style={{height:Dimensions.get("screen").height/17
      ,width:"90%",margin:5,backgroundColor:"#ffffff"}} />
         
     </View>



  <View  style={{width:"100%",height:"23%",justifyContent:"center",alignItems:"center",backgroundColor:"black"}} > 

     <ImageBackground

     resizeMode="cover"
     source={require("../assets/login_last.png")}
     style={{width:"100%",height:"100%",alignItems:"center",}}
     
     >
      <View  style={{width:"80%",height:85,justifyContent:"space-between",flexDirection:"row",}} > 

<View  style={{width:"60%",height:"70%",flexDirection:"row",alignItems:"center"}} >
 
 
<CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
    box
    tintColors="white"
    
  />
  
  <Text style={{color:"white",fontSize:12,fontWeight:"bold"}}>I agree to & Conditions</Text>

</View>

 
<View  style={{width:80,height:100,bottom:32,justifyContent:"center",alignItems:"center",}}>


 <TouchableOpacity   style={{width:60,height:60,justifyContent:"center",alignItems:"center",
}}
onPress={()=>{Form_Handle()}}
>
<View style={{width:60,height:60,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center",bottom:10,borderRadius:33,
shadowColor: '#000',
shadowOffset: { width: 3, height: 1 },
shadowOpacity: 0.8,
shadowRadius: 2,  
elevation: 5


}}>
  
<Icon name="arrow-right-thin" size={40} color="black" />


</View>
</TouchableOpacity>
<Text style={{color:"white" ,fontWeight:"bold"}}>
  Sign Up
</Text>

</View>


</View>

     </ImageBackground>

    </View>
    
    {/* </TouchableOpacity>:null} */}

</View>
</ScrollView>



)




}
export default SignUp2