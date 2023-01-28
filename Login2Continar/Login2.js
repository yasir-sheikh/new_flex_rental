
import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions,Image, StatusBar} from "react-native"

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
    }, [Props]);

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
     const [scrol,setscrol]=useState(1)


return(
  <ScrollView   
  scrollEnabled={true}
  contentContainerStyle={{backgroundColor:"black",flex:scrol}}

 >
  <StatusBar backgroundColor={"black"}/>
 
<View   style={{backgroundColor:"black",alignItems:"center",justifyContent:"center",flex:1}}>
 



    <View style={{width:"70%",height:Dimensions.get("screen").height/4,justifyContent:"center",alignItems:"center",
  // borderWidth:1
  }}> 
   <View  style={{width:"70%",height:"80%",justifyContent:"center",alignItems:"center",
  // borderWidth:1
  }}>
    <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"100%",height:"100%"}}
    />
    </View>
    {
    Loders ?
     <SkypeIndicator    color='white'  />:
    <Text style={{fontWeight:"bold",fontSize:Dimensions.get("screen").height/35,color:"#ffffff"}}>Log In Acount</Text>


     }

   
    

  </View>

     <View style={{width:"90%",height:Dimensions.get("screen").height/2.4,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
     <View  style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",}}> 
     
  
     <TextInput 
     
     mode="outlined"
     value={email}
     label="Email"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setemail(textdata)}}
     placeholder=" Enter Your Password" 
     style={{height:Dimensions.get("screen").height/15,width:Dimensions.get("window").width/1.2,backgroundColor:"#ffffff",margin:5}} />
      
      

     
        
      <TextInput 
       mode="outlined"
       value={password}
       label="Password"
       onChangeText={(textdata)=>{setpassword(textdata)}}
       right={<TextInput.Icon  onPress={()=>{setonpen_eyes(false)}}  icon="eye" color={"black"} />}
      placeholder="Enter Your Password"  secureTextEntry={onpen_eyes}
       style={{height:Dimensions.get("screen").height/15,width:Dimensions.get("window").width/1.2,backgroundColor:"#ffffff"}} />


    
         
     </View>
     </View>
    {/* { ! isKeyboardVisible ? */}
    
    <View  style={{width:"100%",height:Dimensions.get("screen").height/6,justifyContent:"center",alignItems:"center",backgroundColor:"black"}} > 

     <ImageBackground

     resizeMode="cover"
    //  source={images}
    source={require("../assets/login_last.png")}
     style={{width:"100%",height:Dimensions.get("screen").height/5,alignItems:"center",backgroundColor:"black"}}
     
     >
      


      <View  style={{width:"80%",height:85,justifyContent:"space-between",flexDirection:"row",}} > 

      <View  style={{width:"60%",height:"100%",justifyContent:"center",}} >
       
       <TouchableOpacity  onPress={()=>{Props.navigation.navigate("SignUp")}}>
       <Text style={{color:"white" ,fontWeight:"bold"}} >
        Forgot Password ?
       </Text>
       </TouchableOpacity>

      </View>

       
      <View  style={{width:80,height:100,bottom:32,justifyContent:"center",alignItems:"center",}}>

       <TouchableOpacity   style={{width:60,height:60,justifyContent:"center",alignItems:"center",    
    }}
    onPress={logins}

    
    
    >
      <View style={{width:60,height:60,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center",bottom:10,borderRadius:33,
    shadowColor: '#ffffff',
    shadowOffset: { width: 5, height: 3},
    shadowOpacity: 0.5,
    // shadowRadius: 2,  
    elevation: 20
    
    
    }}>
        
      <Icon name="arrow-right-thin" size={40} color="black" />

      
      </View>
      </TouchableOpacity>
      <Text style={{color:"white" ,fontWeight:"bold"}}>
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