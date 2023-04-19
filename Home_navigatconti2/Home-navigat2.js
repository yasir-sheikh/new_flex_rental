

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatlist2 from '../Flatlistcontinar2/Flatlist2';
import Imageview2 from '../Imageview2continar/Imageview2';
import Map from '../MapContnar/Map';
import Clander_view from '../Clander_view_continar/Clander_view';
import Clander_view_out from '../Clander_view_continar/Clander_view_out';
import Profile_main from '../Profile_main_continar/Profile_main';
import Personal_infoo from '../Personal_info_continar/Personal_infoo';
import Hosting from '../Hosting_Continar/Hosting';
import Try_host from '../Try_host_continar/Try_host';
import Listing from '../Listing_continar/Listing';
import Listing_2 from '../Listing_continar/Listing_2';
import Map_Adress from '../Map_adress_continar/Map_Address';
import Select_listing from '../Select_listing_continar/Select_listing';
import Multiple_upload_image from '../Multiple_uplod_image_continar/Multiple_upload_image';
import Tittle from '../Tittle_continar/Tittle';
import Tittle_2 from '../Tittle_continar/Tittle_2';
import Let_price from '../Let_a_price_continar/Let_price';
import Let_price_2 from '../Let_a_price_continar/Let_price_2';
import Tittle_3 from '../Tittle_continar/Tittle_3';
import Let_price_3 from '../Let_a_price_continar/Let_price_3';
import Let_price_4 from '../Let_a_price_continar/Let_price_4';
import Up_load_salfi from '../Multiple_uplod_image_continar/Up_load_salfi';
import Date_show from '../Date_show_continar/Date_show';
import Submit from '../Submit_continar/Submit';
import Payment_screen from '../Scroll_continar/Scroll';
import Header from '../HeaderCantinar/Header';
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
  <Stack.Screen name="Hosting" component={Hosting} />
  <Stack.Screen name="Try_host" component={Try_host} />
  <Stack.Screen name="Listing" component={Listing} />
  <Stack.Screen name="Listing_2" component={Listing_2} />
  <Stack.Screen name="Map_Adress" component={Map_Adress} />
  <Stack.Screen name="Select_listing" component={Select_listing} />
  <Stack.Screen name="Multiple_upload_image" component={Multiple_upload_image} />
  <Stack.Screen name="Up_load_salfi" component={Up_load_salfi} />
  <Stack.Screen name="Tittle" component={Tittle} />
  <Stack.Screen name="Tittle_2" component={Tittle_2} />
  <Stack.Screen name="Tittle_3" component={Tittle_3} />
  <Stack.Screen name="Let_price" component={Let_price} />
  <Stack.Screen name="Let_price_2" component={Let_price_2} />
  <Stack.Screen name="Let_price_3" component={Let_price_3} />
  <Stack.Screen name="Let_price_4" component={Let_price_4} />
  <Stack.Screen name="Date_show" component={Date_show} />
  <Stack.Screen name="Submit" component={Submit} />
  <Stack.Screen name="Payment_screen" component={Payment_screen} />
  {/* <Stack.Screen name="Header" component={Header} /> */}
  
  
  

   

</Stack.Navigator>




)
}

export default Homenavigat2