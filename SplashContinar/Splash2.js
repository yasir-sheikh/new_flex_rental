import { StatusBar } from "react-native"
import { View ,Text , Button, ImageBackground} from "react-native"




const Splash2 =(Props)=>{


return(

<View  style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
  <StatusBar backgroundColor={"black"}/>


<View style={{width:"100%",height:"23%",backgroundColor:"black"}} >



</View>
<View style={{width:"100%",height:"47%",alignItems:"center",justifyContent:"center",backgroundColor:"black"}} >

<View style={{width:"70%",height:"50%",backgroundColor:"black"}}>
<ImageBackground   


resizeMode="contain"
// source={images}
source={require("../assets/new_flex_rental_icon.png")}
style={{width:"100%",height:"100%"}}


>
 


</ImageBackground>
</View>
<View style={{width:"90%",height:"25%",alignItems:"center",justifyContent:"center"}}>
 
</View>

</View>
<View style={{width:"100%",height:"30%",backgroundColor:"black"}} >
<ImageBackground   


resizeMode="cover"
// source={images}
source={require("../assets/login_last.png")}
style={{width:"100%",height:"100%"}}

>
 


</ImageBackground>

</View>

{/* <Text  style={{Button:400}} > Splash</Text> */}
{/* <Button title="home" onPress={()=>{Props.navigation.navigate("Login")}} /> */}

{/* <ImageBackground   


resizeMode="cover"
source={images}
style={{width:"100%",height:"100%"}}

>
 


</ImageBackground> */}

</View>


)




}
export default Splash2