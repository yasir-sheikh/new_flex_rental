
import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions} from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from "react";
import {updateUser} from "../Main_Ridux/redux/actions/Authacion"
import { useDispatch } from "react-redux";
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

  // const screen = Dimensions.get("screen");
    // const [text, setText] =useState('');
    // const [textpass, setTextpass] =useState('');
    const [onpen_eyes,setonpen_eyes]= useState(true)
    // const[Loders,setLoders]=useState(false)


    const dispatch=useDispatch()


    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
      
  
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
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
    }, [Props]);

    const [Loders, setLoders] = useState(false)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [ShowPas,setShowPass]=useState(false)
    const[data_save,setdata_save]=useState("")

    const logins = () => {
    let formData = new FormData()
    formData.append("email",email)
    formData.append("password",password)
    setLoders(true)
       
    fetch('https://wigg.developer-um.xyz/api/login',{
  
        method: 'POST',
        headers: {  "Content-Type": "multipart/form-data",
        "Accept": "application/json"
        
    
    },
        body: formData
    })
    .then(Response=> Response.json())
    // setdata_save( Response.json())
    .then(json=>{
        console.log("heloojson",json)
  
        setdata_save(json)
        // console.log(data_save,"hhhhhh>>>>>>>>>>>>>>>>>>>>>")
        if(json.status =="false"){
           
            alert("hhh")
           
        }else{
           
        }
        
        dispatch(updateUser(json.token))
        setLoders(false)
    })
  
    .catch(e=>{
        alert("Login Error")
        
        setLoders(true)
    })
  
    console.log(data_save,"datattttttttttt")
      
     };
  
// const images = { uri :"https://assets-news.housing.com/news/wp-content/uploads/2022/03/15102726/Vastu-for-flats-in-apartments.jpg"}

return(
  <ScrollView   contentContainerStyle={{justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}

 >
<View   style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>

  <View style={{width:"90%",height:Dimensions.get("screen").height/4.8,justifyContent:"center",alignItems:"center",}}>
    <View style={{width:"90%",height:"27%",justifyContent:"center",alignItems:"center",top:"10%"}}> 
    <Icon name="account" size={50} color="#00bfff" />

    </View>

    <View style={{width:"90%",height:"25%",justifyContent:"center",alignItems:"center",top:"10%",}}> 
    {/* <Icon name="account" size={30} color="#900" /> */}
    <Text style={{fontWeight:"bold",fontSize:28,color:"#00bfff"}}>Log In Acount</Text>

    </View>


  </View>

     <View style={{width:"90%",height:Dimensions.get("screen").height/2.4,justifyContent:"center",alignItems:"center",}}>
     <View  style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",}}> 
     <View style={{width:"100%",height:"5%",justifyContent:"center",alignItems:"center",}}> 

     {
    Loders ?
     <SkypeIndicator    color='#00bfff' />:Loders

     }
     </View>
      <View  style={{width:"90%",height:30,justifyContent:"center",}} > 
     {/* <Text>
      Email
     </Text> */}
      {/* <DotIndicator color='white'   /> */}
      
      </View>
      <View  style={{width:"90%",height:"20%",justifyContent:"center",}} > 
     <TextInput 
     
     mode="outlined"
     value={email}
     label="Email"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setemail(textdata)}}
     placeholder=" Enter Your Password" style={{height:"80%",width:"100%"}} />
      
      </View>
      <View  style={{width:"90%",height:22,justifyContent:"center",}} > 
     {/* <Text>
      Password
     </Text> */}
      
      </View>
      <View  style={{width:"90%",height:"20%",justifyContent:"center", flexDirection:"row",alignItems:"center"}} > 

      <View style={{width:"100%",height:"90%",justifyContent:"center", flexDirection:"row",alignItems:"center"}}>
        
      <TextInput 
       mode="outlined"
       value={password}
       label="Password"
       onChangeText={(textdata)=>{setpassword(textdata)}}
       right={<TextInput.Icon  onPress={()=>{setonpen_eyes(false)}}  icon="eye" />}
      placeholder="Enter Your Password"  secureTextEntry={onpen_eyes} style={{height:"80%",width:"100%",}} />


    
      </View>
      </View>
         
     </View>
     </View>
    {/* { ! isKeyboardVisible ? */}
    
    <View  style={{width:"100%",height:"26%",justifyContent:"center",alignItems:"center",}} > 

     <ImageBackground

     resizeMode="cover"
    //  source={images}
    source={require("../assets/Login_main.png")}
     style={{width:"100%",height:"100%",alignItems:"center"}}
     
     >
      


      <View  style={{width:"80%",height:85,justifyContent:"space-between",flexDirection:"row",}} > 

      <View  style={{width:"60%",height:"100%",justifyContent:"center",}} >
       
       <TouchableOpacity  onPress={()=>{Props.navigation.navigate("SignUp")}}>
       <Text style={{color:"black" ,fontWeight:"bold"}} >
        Forgot Password ?
       </Text>
       </TouchableOpacity>

      </View>

       
      <View  style={{width:80,height:100,bottom:32,justifyContent:"center",alignItems:"center",}}>

       <TouchableOpacity   style={{width:60,height:60,justifyContent:"center",alignItems:"center",    
    }}
    onPress={logins}

    
    
    >
      <View style={{width:60,height:60,backgroundColor:"#00bfff",justifyContent:"center",alignItems:"center",bottom:10,borderRadius:33,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    
    
    }}>
        
      <Icon name="arrow-right-thin" size={40} color="black" />

      
      </View>
      </TouchableOpacity>
      <Text style={{color:"black" ,fontWeight:"bold"}}>
        Sign IN
      </Text>

      </View>
   

</View>

     </ImageBackground>

    </View>
    {/* // : null } */}

</View>
</ScrollView>


)



}
export default Login2