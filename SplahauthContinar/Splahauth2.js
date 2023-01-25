
import Auth2 from '../AuthContinar/Auth2';
import Splash2 from '../SplashContinar/Splash2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

const Splashauth =()=>{
  const [pass,setpass]=useState(true)


  setTimeout(()=>{
  setpass(false)
  },2000)
return(

   
  <Stack.Navigator  initialRouteName='Splash2' screenOptions={{headerShown:false}}>
    { 
     
     pass ? 
  <Stack.Screen name="Splash2" component={Splash2} />:
  <Stack.Screen name="Auth2" component={Auth2} /> 
}
  
</Stack.Navigator>




)
}

export default Splashauth