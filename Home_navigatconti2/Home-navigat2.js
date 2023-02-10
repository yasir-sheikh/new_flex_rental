



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatlist2 from '../Flatlistcontinar2/Flatlist2';
import Imageview2 from '../Imageview2continar/Imageview2';
import Map from '../MapContnar/Map';
import Clander_view from '../Clander_view_continar/Clander_view';
import Clander_view_out from '../Clander_view_continar/Clander_view_out';
import Profile_main from '../Profile_main_continar/Profile_main';
import Personal_infoo from '../Personal_info_continar/Personal_infoo';

const Stack = createNativeStackNavigator();

const Homenavigat2 =()=>{
//   const [pass,setpass]=useState(true)



return(

   
  <Stack.Navigator  initialRouteName='HomeFlatlist' screenOptions={{headerShown:false}}>




  <Stack.Screen name="Flatlist2" component={Flatlist2} />
  <Stack.Screen name="Imageview2" component={Imageview2} />
  <Stack.Screen name="Map" component={Map} />
  <Stack.Screen name="Clander_view" component={Clander_view} />
  <Stack.Screen name="Clander_view_out" component={Clander_view_out} />
  <Stack.Screen name="Profile_main" component={Profile_main} />
  <Stack.Screen name="Personal_infoo" component={Personal_infoo} />

   

</Stack.Navigator>




)
}

export default Homenavigat2