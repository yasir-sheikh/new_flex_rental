import {
    View,
    Text,
    Image,
    TextInput,
    FlatList,
    StyleSheet,
    ScrollView,
    Keyboard,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Pressable,
    Button,
    Dimensions,
    StatusBar,
    RefreshControl,
    ActivityIndicator
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import React, {useState, useEffect, useRef, useCallback} from 'react';
  import Iconacount from 'react-native-vector-icons/MaterialCommunityIcons';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {
    updateUser,
    api_store_redux_data,
    image_redux,
  } from '../Main_Ridux/redux/actions/Authacion';
  import {useDispatch} from 'react-redux';
  import {connect} from 'react-redux';
  import {
    launchCamera,
    launchImageLibrary,
    remove,
  } from 'react-native-image-picker';
  import {useSelector} from 'react-redux';
 
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';




const Personal_infoo = ({navigation,...props}) => {


   const All_data_response_user = useSelector(state => state.authReducer.user);
  

  const image_get_redux = useSelector(state => state.authReducer.redux_image);
  // console.log(image_get_redux,'reduxx resssssssss////////////////.........')

    const logout = () => {
        setlog_loder (true)
        setTimeout(() => {
            props.removeUser();
            setlog_loder (false)
        },2000);
        console.log('logOut');
       
        
      };
      const [date, setDate] = useState(new Date());
      const [log_loder , setlog_loder ] = useState(false);
      const [open_modal, setopen_modal] = useState({open_modals: false});
      const [Filterdata, setFilterdatar] = useState([]);
      const [Masterdata, setMasterdata] = useState([]);
      const [Search, setSearch] = useState('');
      const [loder, setloder] = useState(true);
      const [save_image_type,setsave_image_type]=useState([])
      const [celender,setcelender]=useState(false)
      const [selected,setSelected]=useState("")
      const [selectedStartDate, setSelectedStartDate] = useState(null);
      const [selectedEndDate, setSelectedEndDate] = useState(null);
      const [searched_Data,set_search_data]=useState(null)
      const [save,setsave]=useState(false)


  



    // useEffect(() => {
    //     if (image_get_redux) {
    //       setsave(true);
    //     } else {
    //       setsave(false);
    //     }
    //   });


      

    return(

        <View style={{height:"100%",width:"100%",backgroundColor:"#00bfff",alignItems:"center"}}>

        <View style={{height:"40%",width:"100%",backgroundColor:"black",alignItems:"center",justifyContent:"center"}} >
          <View style={{height:180,width:180,borderWidth:3,alignItems:"center",borderRadius:100,margin:10,borderColor:"#ffffff"}} >
          {image_get_redux ? 
            <Image
              resizeMode='cover'
              // source={images}
              source={{

                uri: `https://flexrental.developer-um.xyz/storage/${image_get_redux?.user[0]?.image}`,

              }}
              style={{width: '100%', height: '100%', borderRadius: 100}}
            />:
          <Image    
      resizeMode="contain"
      source={require("../assets/my_profile_image.jpg")}
      style={{width:"100%",height:"100%",borderRadius:100}}
      />
      }
          </View>
          { image_get_redux ?
             <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/40,
             margin:10,fontWeight:"900"}}>Personal User Profile</Text>:
             <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/40,
             margin:10,fontWeight:"900"}}>No Profile</Text>
          }
         
          </View>    
          <View style={{height:"60%",width:"100%",backgroundColor:"black",alignItems:"center"}} >
          <View style={{height:"20%",width:"100%",
          alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
             <View style={{height:"45%",width:"92%",justifyContent:"center"}}>
               <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/50,fontWeight:"bold"}} >Name</Text>
             </View>
             <View style={{height:"40%",width:"92%",alignItems:"center",justifyContent:"center",
            flexDirection:"row",justifyContent:"space-between"
            }}>
            <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >{All_data_response_user.user.first_name}</Text>
             <Iconacount name="account" size={Dimensions.get("screen").height/30} color={blue_color} />
           </View>
          </View>
          <View style={{height:"20%",width:"100%",
          alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
             <View style={{height:"45%",width:"92%",justifyContent:"center"}}>
               <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/50,fontWeight:"bold"}} >Email</Text>
             </View>
             <View style={{height:"40%",width:"92%",alignItems:"center",justifyContent:"center",
            flexDirection:"row",justifyContent:"space-between"
            }}>
             <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >{All_data_response_user.user.email}</Text>
             <Iconacount name="email" size={Dimensions.get("screen").height/30} color={blue_color} />
           </View>
          </View>
          <View style={{height:"20%",width:"100%",
          alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
             <View style={{height:"45%",width:"92%",justifyContent:"center",flexDirection:"row",alignItems:"center",
             justifyContent:"flex-start"}}>
               <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/50,fontWeight:"bold"}} >Number</Text>
               { log_loder ?
               <ActivityIndicator size="small" color="#ffffff" style={{marginLeft:110}}/>:null

               }
             </View>
             <View style={{height:"40%",width:"92%",alignItems:"center",justifyContent:"center",
            flexDirection:"row",justifyContent:"space-between"
            }}>
             <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >{All_data_response_user.user.phone}</Text>
             <Iconacount name="cellphone-check" size={Dimensions.get("screen").height/30} color={blue_color} />
           </View>
          </View>
          <View style={{height:"20%",width:"100%",
          alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
             <View style={{height:"45%",width:"92%",justifyContent:"center"}}>
               <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/50,fontWeight:"bold"}} >Flex_rental</Text>
             </View>
             <View style={{height:"40%",width:"92%",alignItems:"center",justifyContent:"center",
            flexDirection:"row",justifyContent:"space-between"
            }}>
             <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Profile</Text>
             <Iconacount name="professional-hexagon" size={Dimensions.get("screen").height/30} color={blue_color} />
           </View>
          </View>
          <View style={{height:"20%",width:"100%",
          alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
             <View style={{height:"45%",width:"92%",justifyContent:"center"}}>
               <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/50,fontWeight:"bold"}} >Flex_rental</Text>
             </View>
             <View style={{height:"40%",width:"92%",alignItems:"center",justifyContent:"center",
            flexDirection:"row",justifyContent:"space-between"
            }}>
              <TouchableOpacity onPress={()=>{logout()}}>
             <Text style={{color:white_color,fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >LogOut</Text>
             </TouchableOpacity>
             <Iconacount name="logout" size={Dimensions.get("screen").height/30} color={blue_color} />
           </View>
          </View>
          </View>      
         
        </View>
  )

}


   

  const mapStateToProps = (state) => ({

    // inventory: state.userReducer.inventory,
    // data: state.authReducer,
  
    // user: state.user.details.user
  })
  const mapDispatchToProps = {
    removeUser,
    removeImage
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Personal_infoo);