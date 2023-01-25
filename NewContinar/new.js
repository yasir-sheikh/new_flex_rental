import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';



const New = () => {
 

    const [newsscolor,setnewsscolor]=useState({colors:"red",})

       

  return (
   
<View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
<View  style={{width:"100%",height:"9%",justifyContent:"center",alignItems:"center"}}>

 <View style={{width:"90%",height:"80%",justifyContent:"center",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}} >
    <TouchableOpacity>
   <Text style={{color:"black",fontWeight:"bold"}} >COLOSE</Text>
   </TouchableOpacity>
 </View>

</View>
 
<View style={{width:"100%",height:"91%",alignItems:"center",borderTopLeftRadius:60,borderTopRightRadius:60,
backgroundColor:"#daddfe",
shadowColor: '#000',
shadowOffset: { width: 3, height: 3 },
shadowOpacity: 0.8,
shadowRadius: 2,  
elevation: 5
}}>


    <View  style={{width:"100%",height:"40%",alignItems:"center",borderTopLeftRadius:60,borderTopRightRadius:60,
borderLeftColor:"#daddfe",borderRightColor:"#daddfe",borderTopColor:"#daddfe"
}}>
      <View   style={{width:"90%",height:"38%",justifyContent:"center",alignItems:"center"}}>
        <Text  style={{fontSize:28,fontWeight:"900",color:"#1d48a3"}}>wigg Pro</Text>
        <Text  style={{color:"#1d48a3"}}>Send bigger files right your phone</Text>
      </View>
      <View   style={{width:"46%",height:"62%",alignItems:"center",}}>

        <Image
        style={{width:"100%",height:"100%",alignItems:"center",}}
        
        source={require('../assets/palpal_logo.png') }
        resizeMode="contain"
        
        />
      </View>
    </View>

<View style={{width:"100%",height:"60%",alignItems:"center",
}}>
    <View style={{width:"90%",height:"60%",alignItems:"center",}}>
     <View style={{width:"95%",height:"20%",justifyContent:"center"}}>
     <Text style={{color:"#1d48a3",fontWeight:"bold",fontSize:17}}>Choose subscription</Text>

     </View>
     <View style={{width:"100%",height:"50%",flexDirection:"row",justifyContent:"center",alignItems:"center",justifyContent:"space-between"}}>
     
     <TouchableOpacity style={{width:"42%",height:"55%",borderRadius:25,backgroundColor:"#ffffff",
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    borderColor: newsscolor,
    // borderWidth: newsscolor,
    justifyContent:"center",alignItems:"center",
    

    
    }} 
    onPress={()=>{setnewsscolor(true)}}
    
    >
     <Text style={{color:"#1d48a3",fontWeight:"bold"}}>$ 11.99/month</Text>

    </TouchableOpacity >
     <TouchableOpacity  style={{width:"42%",height:"55%",   borderRadius:25,backgroundColor:"#ffffff",
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    borderWidth:2,
    borderColor:"#1d48a3",justifyContent:"center",alignItems:"center",
    }} >

<Text style={{color:"#1d48a3",fontWeight:"bold"}}>$ 119.99/year</Text>

    </TouchableOpacity >

     </View>
     <View style={{width:"100%",height:"30%",justifyContent:"center",alignItems:"center",}}>
      
      <TouchableOpacity  style={{width:"90%",height:"65%",borderRadius:20,backgroundColor:"#1d48a3",justifyContent:"center",alignItems:"center",
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 3 },
       shadowOpacity: 0.8,
       shadowRadius: 2,  
       elevation: 5,
    //    borderWidth:2,
    
    }}>
        <Text style={{color:"#ffffff",fontWeight:"900", }}>Payment</Text>
      </TouchableOpacity>

     </View>
       
    </View>



    <View  style={{width:"100%",height:"40%",justifyContent:"space-around",alignItems:"center",}}> 

<Text style={{color:"#1d48a3",fontWeight:"bold", fontSize:12}}>
    Restore purcase
</Text>
<Text style={{color:"#1d48a3",fontWeight:"bold", fontSize:12 }}>
   Terms of S Srvices . Privicy Policy
</Text>
{/* <View style={{width:"100%",height:"30%",borderWidth:1,justifyContent:"center",alignItems:"center",}}> */}
<Text style={{color:"#d2a379",fontWeight:"bold",  fontSize:12}}>

    Inviting team members is not support with App Store
</Text>
<Text  style={{color:"#d2a379",fontWeight:"bold",  fontSize:12}}> subscriptions.</Text>
{/* </View> */}


</View>

</View>





</View>



</View>

  
  );
};



export default New;