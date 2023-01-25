import { View ,Text , Button, ImageBackground} from "react-native"




const Splash2 =(Props)=>{

    const images = { uri :"https://assets-news.housing.com/news/wp-content/uploads/2022/03/15102726/Vastu-for-flats-in-apartments.jpg"}

return(

<View  style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>


<View style={{width:"100%",height:"23%"}} >



</View>
<View style={{width:"100%",height:"47%",alignItems:"center",justifyContent:"center"}} >

<View style={{width:"38%",height:"33%"}}>
<ImageBackground   


resizeMode="contain"
// source={images}
source={require("../assets/Splash_logo.png")}
style={{width:"100%",height:"100%"}}

>
 


</ImageBackground>
</View>
<View style={{width:"90%",height:"25%",alignItems:"center",justifyContent:"center"}}>
  <Text  style={{fontSize:35, color:"black",fontWeight:"900",fontStyle:"italic"}}> 
  FLEX RENTLS

  </Text>
</View>

</View>
<View style={{width:"100%",height:"30%"}} >
<ImageBackground   


resizeMode="cover"
// source={images}
source={require("../assets/Login_bottom.png")}
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