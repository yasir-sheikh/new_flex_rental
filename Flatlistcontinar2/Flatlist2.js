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
import Icond from 'react-native-vector-icons/Ionicons';
import Iconh from 'react-native-vector-icons/Feather';
import Iconc from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconacount from 'react-native-vector-icons/MaterialCommunityIcons';
import Icondrop from 'react-native-vector-icons/AntDesign';
import Iconfont from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';

import {
  updateUser,
  api_store_redux_data,
  image_redux,
  Listin_item
} from '../Main_Ridux/redux/actions/Authacion';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import DrawerLayout from 'react-native-drawer-layout';
import ImagePicker from 'react-native-image-picker';
import {
  launchCamera,
  launchImageLibrary,
  remove,
} from 'react-native-image-picker';
import {blue_color, white_color} from '../Constants_continar/Constant.js';
import { BlurView } from "@react-native-community/blur";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {useSelector} from 'react-redux';
import Flatlists from './Flatlist';
import { base_url } from '../BaseUrl/base_url';


// const WIDTH=Dimensions.get("screen").width;
// const width = Dimensions.get("screen").width;
const Flatlist2 = ({navigation, ...props}) => {

  const redux_api = useSelector(state => state.authReducer.redux_data);
  const image_get_redux = useSelector(state => state.authReducer.redux_image);
  const date_redux = useSelector(state => state.authReducer.save_date_redux)
  const save_date_redux_out_2 = useSelector(state => state.authReducer.save_date_redux_out)
   const items = useSelector(state => state.authReducer.item_data);
    console.log(items?.facilities,"................reduxxxxxxxxxxxx.")
  const dispatch_item = useDispatch()

  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [up_date_state_date, setup_date_state_date] = useState(false);
  const [open, setOpen] = useState(false);
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
  const [up_date_state_date_out,setup_date_state_date_out]=useState(false)
  // var newstate = image_get_redux.user[0].image
  useEffect(()=>{

    if(save_date_redux_out_2){
      setup_date_state_date_out(true)
    }else{
      setup_date_state_date_out(false)
    }
         
    if(date_redux){
      setup_date_state_date(true)
    }else{
      setup_date_state_date(false)
    }
    
   })
  const countries = [1, 2, 3, 4, 5, 6, 7];

  const [isKeyboardVisible, setKeyboardVisible] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible('fadeOutDownBig');
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible('fadeInUpBig');
      },
    );
  

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [props]);
 
  //   var options = {
  //     storageOptions: {
  //       path: 'image',
  //       mediaType: 'photo',
  //     },
  //     incluedeBass64: true,
  //   };

  //   launchImageLibrary(options, res => {
  //     console.log(res);
  //     if (res.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (res.error) {
  //       console.log('ImagePicker Error: ', res.error);
  //     } else if (res.customButton) {
  //       console.log('User tapped custom button: ', res.customButton);
  //       alert(res.customButton);
  //     } else {
  //       let source = res;
  //       // console.log("I am image",source?.assets[0].uri)
  //       // setsaveimage(source?.assets[0].uri)
  //       const obj = {
  //         name: source.assets[0].fileName,
  //         uri: source.assets[0].uri,
  //         type: source.assets[0].type,
  //       };

  //       profiles(obj)
  //     }
  //   });
  // };

  // console.log(save_image_type.name,'.................');

  // const profiles = (obj) => {
  //   setwaitetin_loder(true)
  //   console.log('helooooo',obj)
  //   const formData = new FormData();
  //   formData.append('email', All_data_response_user.user.email);
  //   formData.append('first_name', All_data_response_user.user.first_name);
  //   formData.append('last_name', All_data_response_user.user.last_name);
  //   formData.append('phone', All_data_response_user.user.phone);
  //   formData.append('image', obj);
  //   formData.append('role', 'customer');
  //   console.log('formdata=======',formData)
  //   fetch(`https://flexrental.developer-um.xyz/api/profile/update`, {
  //     method: 'POST',
  //     // mode: 'no-cors',

  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${All_data_response_user.token}`,
  //     },

  //     body: formData,
  //   })
  //     .then(Response => Response.json())
  //     // setdata_save( Response.json())
  //     .then(json => {
  //       console.log('image.........................', json);
  //       dispatch_1(image_redux(json));
  //     setwaitetin_loder(false)

       
  //       if ((message = 'Unauthenticated.')) {
  //         console.log(message, '////////');
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e, 'eeeeeeeeeeeeeeee');
  //     });
  // };

 

  const apibutn = () => {
    // setloder(true)
    const getapi = 'https://fakestoreapi.com/products';

    fetch(getapi)
      .then(response => response.json())

      .then(responsejson => {
        // setloder(true)
        // console.log(responsejson)
        setFilterdatar(responsejson);
        setMasterdata(responsejson);
        // setloder(false)
      })
      .catch(
        // error => setloder(true),
        //  console.error(error)
      );
  };
  const Searchfilter = text => {
    if (text) {
      const NewData = Masterdata.filter(item => {
        const itemdata = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const Textdata = text.toUpperCase();
        return itemdata.indexOf(Textdata) > -1;
      });
      setFilterdatar(NewData);
      setSearch(text);
    } else {
      // setFilterdatar(newData);
      // console.log(newData)
      setSearch(text);
    }
  };

  useEffect(() => {
    // apibutn();
    // profiles();
    return () => {};
  }, []);

  const ItemSeparaterView = item => {
    return <View style={{height: 5, width: '100%', padding: 10}} />;
  };

  const listingApI = () => {
    setloder(true);
    fetch(`${base_url}/listning`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }).then(async response => {
      try {
        const data = await response.json();
        setloder(false);
        const res = data.listnings;
        console.log(data.listnings,'LLLLLLLLLLLLLISTTTTTTTTTTTTTTTTT................==================================')
        dispatch(api_store_redux_data(res));

      } catch (error) {
        setloder(true);
        console.log('Error happened here!');
        console.error(error);
      }
    });
  }
  useEffect(() => {
  listingApI()
  }, []);


  //   <View
  //     style={{
  //       height: '100%',
  //       width: '100%',
  //       backgroundColor: blue_color,
  //       alignItems: 'center',
  //     }}>
  //     <View
  //       style={{
  //         height: '40%',
  //         width: '100%',
  //         backgroundColor: blue_color,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           save_image_redux()
  //         }}
  //         style={{
  //           height:180 ,
  //           width: 180,
  //           borderWidth: 3,
  //           alignItems: 'center',
  //           borderRadius: 100,
  //           margin: 10,
  //           borderColor: white_color,
  //           justifyContent:"center"
  //         }}>
  //         {image_get_redux ? 
  //           <Image
  //             resizeMode='cover'
  //             // source={images}
  //             source={{

  //               uri: `https://flexrental.developer-um.xyz/storage/${image_get_redux?.user[0]?.image}`,

  //             }}
  //             style={{width: '100%', height: '100%', borderRadius: 100}}
  //           />
  //          : waitetin_loder ?
  //          <ActivityIndicator size="large" color="#ffffff" />: <Image
  //           resizeMode="contain"
  //           source={require('../assets/user_profile.jpg')}
  //           style={{width: '100%', height: '100%', borderRadius: 100}}
  //         />
  //         }
  //       </TouchableOpacity>
  //       <TouchableOpacity  onPress={()=>{props.removeImage()}}>
  //         { save ? <Text   
  //         style={{
  //           color: '#ffffff',
  //           fontSize: Dimensions.get('screen').height / 40,
  //           margin: 10,
  //           fontWeight: '900',
  //         }}>
  //         Profile  Remove
  //       </Text>:  <Text   
  //         style={{
  //           color: '#ffffff',
  //           fontSize: Dimensions.get('screen').height / 40,
  //           margin: 10,
  //           fontWeight: '900',
  //         }}>
  //         Select Profile
  //       </Text>
        
        
  //       }
      
  //       </TouchableOpacity>
  //     </View>
  //     <View
  //       style={{
  //         height: '60%',
  //         width: '100%',
  //         backgroundColor: white_color,
  //         alignItems: 'center',
  //       }}>
  //       <View
  //         style={{
  //           height: '20%',
  //           width: '100%',
  //           backgroundColor: white_color,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: white_color,
  //         }}>
  //         <View
  //           style={{
  //             height: '45%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 55,
  //               fontWeight: 'bold',
  //             }}>
  //             Name
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             height: '40%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 65,
  //               fontWeight: 'bold',
  //             }}>
  //             {All_data_response_user.user.first_name}
  //           </Text>
  //           <Iconacount
  //             name="account"
  //             size={Dimensions.get('screen').height / 32}
  //             color={blue_color}
  //           />
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           height: '20%',
  //           width: '100%',
  //           backgroundColor: white_color,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: '#00bfff',
  //         }}>
  //         <View
  //           style={{
  //             height: '45%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 55,
  //               fontWeight: 'bold',
  //             }}>
  //             Email
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             height: '40%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 65,
  //               fontWeight: 'bold',
  //             }}>
  //             {All_data_response_user.user.email}
  //           </Text>
  //           <Iconacount
  //             name="email"
  //             size={Dimensions.get('screen').height / 35}
  //             color={blue_color}
  //           />
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           height: '20%',
  //           width: '100%',
  //           backgroundColor: white_color,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: blue_color,
  //         }}>
  //         <View
  //           style={{
  //             height: '45%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 55,
  //               fontWeight: 'bold',
  //             }}>
  //             Number
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             height: '40%',
  //             width: '95%',
  //             backgroundColor: '#FFFFFF',
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 65,
  //               fontWeight: 'bold',
  //             }}>
  //             {All_data_response_user.user.phone}
  //           </Text>
  //           <Iconacount
  //             name="cellphone-check"
  //             size={Dimensions.get('screen').height / 35}
  //             color={blue_color}
  //           />
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           height: '20%',
  //           width: '100%',
  //           backgroundColor: white_color,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: blue_color,
  //         }}>
  //         <View
  //           style={{
  //             height: '45%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 55,
  //               fontWeight: 'bold',
  //             }}>
  //             Flex_rental Date
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             height: '40%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //             { date_redux ?
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 65,
  //               fontWeight: 'bold',
  //             }}>
  //            Date : in  {date_redux} Date out : {save_date_redux_out_2}
  //           </Text>:
  //            <Text
  //            style={{
  //              color: 'black',
  //              fontSize: Dimensions.get('screen').height / 65,
  //              fontWeight: 'bold',
  //            }}>
  //             Date in ? Date out ?
  //          </Text>
  //           }
  //           <Iconacount
  //             name="google-classroom"
  //             size={Dimensions.get('screen').height / 35}
  //             color={blue_color}
  //           />
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           height: '20%',
  //           width: '100%',
  //           backgroundColor: white_color,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: blue_color,
  //         }}>
  //         <View
  //           style={{
  //             height: '45%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               color: 'black',
  //               fontSize: Dimensions.get('screen').height / 55,
  //               fontWeight: 'bold',
  //             }}>
  //             Flex_rental
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             height: '40%',
  //             width: '95%',
  //             backgroundColor: white_color,
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <TouchableOpacity
  //             onPress={() => {
  //             //  props.removeImage(), 
  //              logout()
  //             }}>
  //             <Text
  //               style={{
  //                 color: 'black',
  //                 fontSize: Dimensions.get('screen').height / 65,
  //                 fontWeight: 'bold',
  //               }}>
  //               LogOut
  //             </Text>
  //           </TouchableOpacity>
  //           <Iconacount
  //             name="logout"
  //             size={Dimensions.get('screen').height / 35}
  //             color={blue_color}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  return (
    
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'black',
        }}
        scrollEnabled={true}>
        <StatusBar backgroundColor={'black'} />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '92%',
              height: Dimensions.get("screen").height/16,
              backgroundColor: 'black',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth:1,
              borderColor:"white"
            }}>
            <View
              style={{
                width: '78%',
                height: '100%',
                backgroundColor: 'black',
                flexDirection: 'row',
                
              }}>
              <View
                style={{
                  width: '28%',
                  height: '100%',
                  backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
             
                <Image
                  resizeMode="contain"
                  // source={images}
                  source={require('../assets/new_flex_rental_icon.png')}
                  style={{width: '100%', height: '100%'}}
                />
            
              </View>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  backgroundColor: 'black',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
           
              <TouchableOpacity
               style={{
                width: '22%',
                height: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor:'white',
                // borderWidth:1
              }}
              onPress={() =>navigation.navigate("Profile_main")}>
                      {image_get_redux ? 
            <Image
              resizeMode='cover'
              source={{

                uri: `https://flexrental.dev-um.xyz/storage/${image_get_redux?.user[0]?.image}`,

              }}
              style={{width: 45, height: 45,borderRadius:50}}
            />:
              <Image
                  resizeMode="contain"
                  // source={images}
                  source={require('../assets/my_profile_image.jpg')}
                  style={{width: 45, height: 45,borderRadius:50}}
                />
            }
              </TouchableOpacity>
            {/* H E A T H E R .. I N P U T */}
          </View>
          <View
            style={{
              width: '92%',
              height:  Dimensions.get('screen').height/15,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              //  borderWidth:1,
               borderColor:"white"
            }}>
            <View
              style={{
                width: '90%',
                height: '87%',
                backgroundColor: 'black',
                justifyContent: 'center',
                // flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.5,
                
              }}>
              <Text style={{color:white_color,fontSize:15,fontWeight:"bold"}}>RENTALS AROUND THE GLOBE</Text>
            </View>
          </View>
          <View
            style={{
              width: '92%',
              height:  Dimensions.get('screen').height/15,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              //  borderWidth:1,
               borderColor:"white"
            }}>
            <View
              style={{
                width: '90%',
                height: '87%',
                backgroundColor: 'white',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.5,
                borderLeftColor: 'black',
                borderRightColor: 'black',
                borderTopColor: 'black',
                borderRadius: 5,
              }}>
              <Icon name="my-location" size={20} color={blue_color} />
              <View
                style={{
                  width: '75%',
                  height: Dimensions.get('screen').height / 32,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder="Search location"
                  placeholderTextColor={'black'}
                  style={{height:Dimensions.get("screen").height/20,color:"black"}}
                  onChangeText={text => Searchfilter(text)}
                />
              </View>
              <Icond
                name="search-outline"
                size={20}
                color={blue_color}
                style={{marginRight: 7}}
              />
              <TouchableOpacity
                onPress={() => {
                  setopen_modal({open_modals: true});
                }}>
                <Iconh name="sliders" size={20} color={blue_color} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '92%',
              height: Dimensions.get('screen').height/16,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              //  borderWidth:1,
               borderColor:"white"
            }}>
            <View
              style={{
                width: '90%',
                height: '87%',
                backgroundColor: 'white',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderLeftColor: 'black',
                borderRightColor: 'black',
                borderTopColor: 'black',
                borderRadius: 5,
              }}>
              <View
                style={{
                  width: '75%',
                  height: Dimensions.get('screen').height / 32,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder="Search When"
                  placeholderTextColor={'black'}
                  style={{height:Dimensions.get("screen").height/20,margin:3,color:"black"}}
                  onChangeText={text => Searchfilter(text)}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setopen_modal({open_modals: true});
                }}>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: Dimensions.get('screen').height/16,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              //  borderWidth:1,
               borderColor:"white"
            }}>
            <View
              style={{
                width: '92%',
                height: '87%',
                backgroundColor: 'white',
                justifyContent: 'center',
                // flexDirection: 'row',
                // alignItems: 'center',
                borderWidth: 0.5,
                borderLeftColor: 'black',
                borderRightColor: 'black',
                borderTopColor: 'black',
                borderRadius: 5,
              }}>
              <View
                style={{
                  width: '75%',
                  height: Dimensions.get('screen').height / 32,
                  // backgroundColor: 'white',
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder="Search many guests"
                  placeholderTextColor={'black'}
                  style={{height:Dimensions.get("screen").height/20,margin:3,color:"black"}}
                  onChangeText={text => Searchfilter(text)}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setopen_modal({open_modals: true});
                }}>
                {/* <Iconh name="sliders" size={20} color={blue_color} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '92%',
              height:  Dimensions.get('screen').height/11,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              //  borderWidth:1,
               borderColor:"white"
            }}>
            <View
              style={{
                width: '90%',
                height: '87%',
                backgroundColor: 'black',
                justifyContent: 'center',
                // flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.5,
                
              }}>
                <TouchableOpacity   style={{
                width: '50%',
                height: '65%',
                backgroundColor: blue_color,
                justifyContent: 'center',
                // flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.5,
                borderRadius:7
                
              }}>
              <Text style={{color:white_color,fontSize:15,fontWeight:"bold"}}>SEARCH</Text>
              </TouchableOpacity>
            </View>
          </View>

          {loder ? 
            <SkypeIndicator color="white" size={40} />
          :
            <FlatList
              data={redux_api}
              //  keyExtractor={(item, index) => index.toString()}
              style={{height: 100, width: 320}}
              ItemSeparatorComponent={ItemSeparaterView}
              renderItem={({item, index}) => (
                <Flatlists item={item} navigation={navigation} />
              )}
            />
          }

          {/* {! isKeyboardVisible ? */}
          <Animatable.View
            animation={isKeyboardVisible}
            //  itesrationCount={5}
            direction="alternate"
            easing="ease-out"
            style={{
              width: '100%',
              height: 70,
              backgroundColor: blue_color,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '77%',
                height: 60,
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
              // onPress={()=>{navigation.navigate("Payment_screen")}}
                style={{
                  width: 56,
                  height: 56,
                  borderWidth: 2,
                  borderRadius: 100,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Iconh name="home" size={32} color="white" />
              </TouchableOpacity>
              <View style={{width: '37%', height: '100%'}}></View>
              <TouchableOpacity
              onPress={() =>navigation.navigate("Profile_main")}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // justifyContent: 'flex-end',
                  // flexDirection: 'row',
                  borderWidth:2,
                  borderColor:white_color
                }}>
                <Iconc name="account-outline" size={45} color="white" />
              </TouchableOpacity>
            </View>
          </Animatable.View>

       {/* M O D A L ... R 0 W */}

          <Modal 
          // animationType="slide"
          transparent visible={open_modal.open_modals}  
           
           onRequestClose={()=>{ setopen_modal({open_modals: false});}}
          
          >
            <ScrollView   showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <TouchableOpacity
                style={{width: '100%', height:Dimensions.get("screen").height/2.6}}
                onPress={() => {
                  setopen_modal({open_modals: false})
                  setcelender(false)
                  setSelectedEndDate(null);
                  setSelectedStartDate(null);
                }}>
              </TouchableOpacity>

              <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
          // onPointerCancel
          
        />
              <Animatable.View
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                }}
                animation="fadeInUpBig"
                //  itesrationCount={5}
                direction="alternate"
                easing="ease-out">
                  
                <View
                  style={{
                    width: '100%',
                    height: Dimensions.get("screen").height/1.9,
                    backgroundColor: 'black',
                    borderTopLeftRadius: 38,
                    borderTopRightRadius: 38,
                    alignItems: 'center',
                  }}>
                 
                 
              <>

<View
                    style={{
                      width: '90%',
                      height: 70,
                      borderTopLeftRadius: 40,
                      borderTopRightRadius: 40,
                      justifyContent: 'center',
                      flexDirection:"row",
                      justifyContent:"center",
                      alignItems:"center",
                      justifyContent:"space-between"
                    }}>
                    <Text
                      style={{
                        color: white_color,
                        fontSize: 27,
                        fontWeight: 'bold',
                      }}>
                      Filter by{' '}
                    </Text>
                    <TouchableOpacity  onPress={()=>{setopen_modal({open_modals: false})}}>
                    <Text   style={{
                        color: white_color,
                        fontSize:18,
                        fontWeight: 'bold',
                      }} >Cancel</Text>
                      </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      height: 35,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: white_color, fontSize: 16}}>Type </Text>
                  </View>

                  <View
                    style={{
                      width: '90%',
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '90%',
                        height: '100%',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderWidth: 0.4,

                        borderTopColor: '#f3f4f6',
                        borderRightColor: '#f3f4f6',
                        borderLeftColor: '#f3f4f6',
                        backgroundColor:white_color,
                        borderRadius:8
                      }}>
                      <TextInput
                        placeholder="Shearch"
                        style={{
                          width: '80%',
                          height: '100%',
                          justifyContent: 'center',
                          backgroundColor:white_color,
                          borderRadius:8
                        }}
                        placeholderTextColor="black"
                      />
                      <Icond
                        name="search-outline"
                        size={28}
                        color="rgba(0,0,0.8)"
                        style={{marginRight: 7}}
                      />
                    </View>
                  </View>
                <ScrollView
                  contentContainerStyle={{height: Dimensions.get("screen").height/1, width: '100%'}}
                  showsVerticalScrollIndicator={false}
                  >
                    <TouchableOpacity
                       style={{alignSelf: 'flex-end',margin:10}}
                       >
                
                  </TouchableOpacity>
                  <View style={{height: '52%', width: '100%',}}>
                    <View
                      style={{
                        height: '35%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // width:'100%',
                        // justifyContent:"center",
                        // borderWidth:1,borderColor:"red"

                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor: white_color,
                          width: '38%',
                          borderRadius: 15,
                          alignItems: 'center',
                          height: Dimensions.get("screen").width/10,
                          justifyContent: 'space-around',
                          shadowOpacity: 3,
                          shadowColor: 'black',
                          shadowOpacity: 0.26,
                          shadowOffset: {width: 4, height: 2},
                          shadowRadius: 10,
                          elevation: 10,
                          justifyContent:"center"
                          // borderWidth:1
                        }}
                        onPress={() => {
                          // setcelender(true);
                          setopen_modal({open_modals: false})
                          navigation.navigate("Clander_view")

                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: Dimensions.get("screen").width / 29,
                            fontWeight: 'bold',margin:5
                          }}>
                              {  up_date_state_date ?
                        <Text
                              style={{
                                color: 'black',
                                fontSize:  Dimensions.get("screen").width / 29,
                                fontWeight: 'bold',
                                margin:5
                              }}>
                            {date_redux}
                            </Text>:
                             <Text
                             style={{
                               color: 'black',
                               fontSize:  Dimensions.get("screen").width / 29,
                               fontWeight: 'bold',
                             }}>
                             Check in date
                           </Text>
                        }
                      
                        </Text>
                        <Icond
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 20}
                          color={'black'}
                          // style={{alignSelf: 'center', right: 40}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor: white_color,
                          width: '40%',
                          borderRadius: 15,
                          alignItems: 'center',
                          height: Dimensions.get("screen").width/10,
                          justifyContent: 'space-around',
                          shadowOpacity: 3,
                          shadowColor: 'black',
                          shadowOpacity: 0.26,
                          shadowOffset: {width: 4, height: 2},
                          shadowRadius: 10,
                          elevation: 10,
                          justifyContent:"center"
                        }}
                        onPress={() => {
                          // setcelender(true);
                          setopen_modal({open_modals: false})
                          navigation.navigate("Clander_view_out")
                        }}>
                        <Text
                          style={{
                            color: blue_color,
                            fontSize: Dimensions.get("screen").width / 29,
                            fontWeight: 'bold',
                          }}>
                              {  up_date_state_date_out ?
                        <Text
                              style={{
                                color: 'black',
                                fontSize:  Dimensions.get("screen").width / 29,
                                fontWeight: 'bold',
                              }}>
                            {save_date_redux_out_2}
                            </Text>:
                             <Text
                             style={{
                               color: 'black',
                               fontSize:  Dimensions.get("screen").width / 29,
                               fontWeight: 'bold',
                               
                             }}>
                             Check out date
                        </Text>}
                        
                        </Text>
                        <Icond
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 20}
                          color={'black'}
                          style={{margin:3}}
                          // style={{alignSelf: 'center', right: 40}}
                        />
                      </TouchableOpacity>
                    </View>
                    <SelectDropdown
                      data={countries}
                      // defaultValueByIndex={1}
                      // defaultValue={'Egypt'}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                      }}
                      defaultButtonText={'No Of Gest'}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      buttonStyle={styles.dropdown1BtnStyle}
                      buttonTextStyle={styles.dropdown1BtnTxtStyle}
                      renderDropdownIcon={isOpened => {
                        return (
                          <Icondrop
                            name={isOpened ? 'caretup' : 'caretdown'}
                            color={'black'}
                            size={16}
                          />
                        );
                      }}
                      dropdownIconPosition={'right'}
                      dropdownStyle={styles.dropdown1DropdownStyle}
                    />
                  </View>
                </ScrollView>
              </>
              
                                  
                </View>
              </Animatable.View>
            </View>
            </ScrollView>
          </Modal>
        </View>
      </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff6900',
    alignItems: 'center',
    justifyContent: 'center',
    //  marginLeft: 0
  },
  continarview: {
    // height:,
    width: '100%',
    borderWidth: 1,

    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    // borderRadius:20
  }, absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  dropdown1BtnStyle: {
    width: Dimensions.get('window').width/1.2,
    height: 50,
    backgroundColor: '#ffffff',
    // paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
    justifyContent: 'space-evenly',
    flexDirection: 'row-reverse',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Flatlist2



// header link youtub...

//  https://www.youtube.com/watch?v=YC17-JnrYQE

// header sested staky

// https://www.youtube.com/watch?v=xutPT1oZL2M&t=6s

// 



// drawer work
{
  /* <View   style={{width:"78%",height:"35%" ,justifyContent:"center",alignItems:"center",top:10}}>
        
       <TouchableOpacity  onPress={()=>{filessave(),setproimg(false)}}
         style={{width:"100%",height:"100%" ,justifyContent:"center",alignItems:"center" }}
       >
        <TouchableOpacity  style={{width:"55%",height:"15%",backgroundColor:"gray" ,alignItems:"center",justifyContent:"center",top:13}}
         onPress={()=>{setproimg(true)}}
        
        >
          <Text style={{color:"white",fontWeight:"bold"}} > REMOVE PROFILE</Text></TouchableOpacity>
        { proimg ?
        <Image
        
        style={{width:"100%",height:"100%" ,justifyContent:"center",alignItems:"center",top:10}}

        source={
        //  {uri:saveimage}
      require('../assets/profiles.jpg')

        // proimg
        }
      
      />:
        <Image
        
        style={{width:"80%",height:"70%" ,justifyContent:"center",alignItems:"center",borderRadius:200,top:20}}
        resizeMode="cover"

        source={
         {uri:saveimage}
      // require('../assets/profiles.jpg')

        // proimg
        }
      
      />
    }

       </TouchableOpacity>

       </View>
       <TouchableOpacity >
       <Text style={{fontWeight:"900",fontSize:25,color:"black",top:30}}> USER  PROFILE </Text>
       </TouchableOpacity> */
}
