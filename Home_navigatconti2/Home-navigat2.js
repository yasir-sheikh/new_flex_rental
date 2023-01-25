



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatlist2 from '../Flatlistcontinar2/Flatlist2';
import Imageview2 from '../Imageview2continar/Imageview2';
import Map from '../MapContnar/Map';
import New from '../NewContinar/new';
const Stack = createNativeStackNavigator();

const Homenavigat2 =()=>{
//   const [pass,setpass]=useState(true)



return(

   
  <Stack.Navigator  initialRouteName='HomeFlatlist' screenOptions={{headerShown:false}}>




  <Stack.Screen name="Flatlist2" component={Flatlist2} />
  <Stack.Screen name="Imageview2" component={Imageview2} />
  <Stack.Screen name="Map" component={Map} />
  <Stack.Screen name="New" component={New} />


</Stack.Navigator>




)
}

export default Homenavigat2