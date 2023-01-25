
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login2 from '../Login2Continar/Login2';
import SignUp2 from '../SignupContinar/Signup2';


const Stack = createNativeStackNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Auth2 =()=>{


return(

   <>
  


<Tab.Navigator 


initialRouteName="Login2"
screenOptions={{
  tabBarActiveTintColor: 'black',
  tabBarLabelStyle: { fontSize: 12 ,fontWeight:"bold",},
  tabBarItemStyle: { width: 80,top:10,justifyContent:"center" ,alignItems:"center",height:70,borderBottomColor:"black",}
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