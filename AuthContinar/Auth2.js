
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login2 from '../Login2Continar/Login2';
import SignUp2 from '../SignupContinar/Signup2';


const Stack = createNativeStackNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Auth2 =()=>{


return(

   <>
  


<Tab.Navigator 


initialRouteName="Login2"
screenOptions={{
  tabBarActiveTintColor: 'white',
  tabBarLabelStyle: { fontSize: Dimensions.get("screen").height/57 ,fontWeight:"900",},
  tabBarItemStyle: { width:Dimensions.get("screen").width/2,justifyContent:"center" ,alignItems:"center",height:Dimensions.get("screen").height/14
  ,borderBottomColor:"#ffffff",borderWidth:1,backgroundColor:"black"}
  // tabBarStyle: { backgroundColor: 'powderblue' },
}}




>

<Tab.Screen name="Login" component={Login2} />
<Tab.Screen name="SignUp" component={SignUp2} />

</Tab.Navigator>

</>
)
}

export default Auth2