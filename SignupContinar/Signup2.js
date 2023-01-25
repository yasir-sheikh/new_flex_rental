import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard, Dimensions} from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from "react";
import CheckBox from '@react-native-community/checkbox';

const SignUp2 =(props)=>{

    // const [text, setText] =useState('');
    // const [textpass, setTextpass] =useState('');
    const [onpen_eyes,setopen_eyes]= useState(true)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);



    const [email, setemail] = useState('');
    const [Name, setName] = useState('');
    const [Pass, setPass] = useState('');
    const [LastName, setLastName] = useState('');
   
   //  const [isEnabled, SetIsEnabled] = useState(true);
    const Form_Handle = async () => {
     //  setisloading(true);
      console.log('Login');
      const URL = 'https://wigg.developer-um.xyz/api/signup';
      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('first_name', Name);
      formdata.append('last_name', LastName);
      formdata.append('password', Pass);
   
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
          if (result.message == 'User Successfully Added') {
            // props.Updated_Land_Owners(Math.random())
            props.navigation.navigate('Login2');
           //  setisloading(false);
            console.log(result);
          } else {
            alert(result.errors.email);
            // setisloading(false);
            console.log('error==============', result.errors.email);
          }
        })
        .catch(error => console.log('error', error));
    };
   




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
    }, [props]);

const images = { uri :"https://assets-news.housing.com/news/wp-content/uploads/2022/03/15102726/Vastu-for-flats-in-apartments.jpg"}

return(



  
 <ScrollView   contentContainerStyle={{flex:1}} scrollEnabled={true} > 

<View   style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>

  <View style={{width:"90%",height:Dimensions.get("screen").height/5.9,justifyContent:"center",alignItems:"center",}}>
    <View style={{width:"90%",height:"40%",justifyContent:"center",alignItems:"center"}}> 
    <Icon name="account-multiple-plus-outline" size={40} color="#00bfff" />

    </View>

    <View style={{width:"90%",height:"40%",justifyContent:"center",alignItems:"center"}}> 
    <Text style={{fontWeight:"bold",fontSize:23,color:"#00bfff"}}>Create Acount</Text>

    </View>

  </View>

     
     <View  style={{width:"90%",height:Dimensions.get("screen").height/2.1, justifyContent:"center",alignItems:"center",}}> 
      <View  style={{width:"90%",height:10,justifyContent:"center",}} > 
     
       
      
      </View>
         
         <View  style={{width:"90%",height:"20%",justifyContent:"center", }} > 
     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Name"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setName(textdata)}}
     placeholder=" Enter Your Name" style={{height:"80%",width:"100%"}} />
      
      </View>

      <View  style={{width:"90%",height:5,justifyContent:"center",}} > 
     
      
     </View>

<View  style={{width:"90%",height:"20%",justifyContent:"center",}} > 
     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Last NAME"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setLastName(textdata)}}
     placeholder=" Enter Your LastName" style={{height:"80%",width:"100%"}} />
      
      </View>

      <View  style={{width:"90%",height:5,justifyContent:"center",}} > 
     
      
     </View>

      <View  style={{width:"90%",height:"20%",justifyContent:"center", }} > 
     <TextInput 
     
     mode="outlined"
    //  value={text}
     label="Email"
    //  ={(textdata)=>{setText(textdata)}}
    onChangeText={(textdata)=>{setemail(textdata)}}
     placeholder=" Enter Your Password" style={{height:"80%",width:"100%"}} />
      
      </View>
      <View  style={{width:"90%",height:5,justifyContent:"center"}} > 
     
      
     </View>
      {/* <View  style={{width:"90%",height:"8%",justifyContent:"center",}} > 
    
      
      </View> */}
      <View  style={{width:"90%",height:"20%",justifyContent:"center", flexDirection:"row",alignItems:"center"}} > 

      <View style={{width:"100%",height:"90%",justifyContent:"center", flexDirection:"row",alignItems:"center", }}>
        
      <TextInput 
       mode="outlined"
      //  value={textpass}
       label="Password"
       onChangeText={(textdata)=>{setPass(textdata)}}
       right={<TextInput.Icon onPress={()=>{setonpen_eyes(false)}}   icon="eye" />}
      placeholder="Enter Your Password"  secureTextEntry={onpen_eyes} style={{height:"80%",width:"100%",}} />

      {/* <Icon name="eye-off" size={20} color="#c0c0c0" /> */}

    
      </View>
      </View>
         
     </View>

{/* {!isKeyboardVisible? <TouchableOpacity style={{width:"100%",height:"23%",justifyContent:"center",alignItems:"center",}}   
          onPress={!isKeyboardVisible ? () => { props.navigation.navigate('Login') } : null}
     
     > */}

{ ! isKeyboardVisible ?  <View  style={{width:"100%",height:"23%",justifyContent:"center",alignItems:"center",}} > 

     <ImageBackground

     resizeMode="cover"
     source={require("../assets/Login_main.png")}
     style={{width:"100%",height:"100%",alignItems:"center",}}
     
     >
      <View  style={{width:"80%",height:85,justifyContent:"space-between",flexDirection:"row",}} > 

<View  style={{width:"60%",height:"70%",flexDirection:"row",alignItems:"center"}} >
 
 
<CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
    box
    // tintColors="black"
    
  />
  
  <Text style={{color:"black",fontSize:12,fontWeight:"bold"}}>I agree to & Conditions</Text>

</View>

 
<View  style={{width:80,height:100,bottom:32,justifyContent:"center",alignItems:"center",}}>

 <TouchableOpacity   style={{width:60,height:60,justifyContent:"center",alignItems:"center",
}}
onPress={()=>{Form_Handle()}}
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
  Sign Up
</Text>

</View>


</View>

     </ImageBackground>

    </View>: null}
    
    {/* </TouchableOpacity>:null} */}

</View>
</ScrollView>



)




}
export default SignUp2