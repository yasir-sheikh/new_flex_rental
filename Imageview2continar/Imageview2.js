import { StyleSheet, Text, View ,Image,ImageBackground, TouchableOpacity, ScrollView,Dimensions,
   Settings,dotActive,FlatList,Modal, Pressable, StatusBar,TextInput,RefreshControl, Alert} from 'react-native';
import React,{useState,useEffect,useRef,useCallback} from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
 import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome5';
import Icondot from 'react-native-vector-icons/Octicons';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';
import SelectList from 'react-native-dropdown-select-list';
import * as Animatable from 'react-native-animatable';
import Image_view_flatlist from './Image_view_flatlst';
import { blue_color,white_color } from '../Constants_continar/Constant.js';
import {useSelector} from 'react-redux';
import {
  item_redux,
  save_date_pikar

} from '../Main_Ridux/redux/actions/Authacion';
import {useDispatch} from 'react-redux';





 const data_2 = [
    {img: 'bed', id: 1 ,so: 'soon'},
    {img: 'bathtub-outline', id: 2,so: 'soon'},
    {img: 'car', id: 3,so: 'soon'},
  ];
  


function Imageview2({route,navigation}) {
  console.log(blue_color,'kkk')
  console.log(route.params.item.rate_per_night,'//////////')
  const[store_rout,setstore_rout]=useState(route.params.item)
  const redux_api = useSelector(state => state.authReducer.redux_data);
  const item_data_image = useSelector(state => state.authReducer.new_item)
  const date_redux = useSelector(state => state.authReducer.save_date_redux)
  const save_date_redux_out_2 = useSelector(state => state.authReducer.save_date_redux_out)
  console.log(save_date_redux_out_2,'redux_date_out>>>>>>>>>>>>>>>>>>>>>>>>>.')
  const dispatch = useDispatch();
  const dispatch_date = useDispatch();

  
  
  // console.log(redux_api,'///////////////api_nettttt');
  
  // const item = props.route.params;
  const [imgActive,setimgActive]=useState()
  const [up_date_state_date, setup_date_state_date] = useState(false);

    // const [selectedStartDate, setSelectedStartDate] = useState(false);
    // const [selectedEndDate, setSelectedEndDate] = useState(null);
    // const [celender, setcelender] = useState(false);
    const [checkAvail, setCheckAvalmodal] = useState({open: false});
    const [modal_item, setmodal_item] = useState({item_open: false});
    // const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [up_date_state_date_out, setup_date_state_date_out] = useState(false);

    //  console.log(selectedStartDate,'.............../////........>>>>>>>>')

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
    
  const ImagesOK = ({item}) => {

    return (
      <>
              <ImageBackground
              resizeMode="stretch"
              imageStyle={{
                borderBottomLeftRadius: 60,
                borderBottomRightRadius: 60,
                // borderRadius:50

              }

              }
                source={{uri:`https://flexrental.developer-um.xyz/storage/${item.cover_photo}`}}
                style={{
                  height: Dimensions.get("screen").height /2.2,
                  width:  Dimensions.get("screen").width,
                 alignItems:"center"
                }}
              >
                <TouchableOpacity 
                onPress={()=>{ setmodal_item({item_open:true})  ;dispatch(item_redux(item.cover_photo));}}
                style={{
                  height: Dimensions.get("screen").height /2.2,
                  width:  Dimensions.get("screen").width,
                  borderBottomLeftRadius: 60,
                  borderBottomRightRadius: 60,
                  }}>

                </TouchableOpacity>
              </ImageBackground>
       
      </>
    );
  };




  return (
   <>
   
<ScrollView   
 contentContainerStyle={{backgroundColor:"black"}}
 
>
  <View style={styles.container}>
  
      <StatusBar   backgroundColor={"black"}/>
          <View 
          style={{
            width:Dimensions.get("screen").width,
             height:Dimensions.get("screen").height/2.2,}}>
         

         <FlatListSlider
          data={redux_api}
          width={ Dimensions.get("screen").width}
          height={ Dimensions.get("screen").height /2.2}
          timer={5000}
          imagekey="img"
          component={<ImagesOK/>}
          indicatorActiveWidth={20}
          onPress={item => alert(JSON.stringify(item))}
          contentContainerStyle={{
            alignItems:"center"
            
          }}
        />



       
         
           </View>
          
     <View
          style={{
            height: Dimensions.get("screen").height/4.5 ,
            width: '100%',
            position: 'absolute',
            // borderWidth:1,
            alignItems: 'center',
            justifyContent:"center",
          }}>
            <View 
               style={{
                height: Dimensions.get("screen").height/9,
                width: '90%',
                flexDirection: 'row',
                justifyContent: "space-between",
               
                // borderWidth:1
              }} >
          <Icon
            name="arrow-back"
            color={'white'}
            size={ Dimensions.get("screen").width / 12}
            onPress={() => {
              // props.navigation.navigate('Home_screen_tab');
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '25%',
              justifyContent: "space-between",
              // borderWidth:1
            }}>
            <Icon name="heart-outline" color={'white'} size={ Dimensions.get("screen").width / 12} />
            <Iconf name="share-square" color={'white'} size={ Dimensions.get("screen").width / 14} />
          </View>
          </View>
        </View>
      

      

        <View
        style={{
          height: '50.5%',
          width: '100%',

          // top: height / 912,

          // borderWidth:1,
          // borderColor:"red"
        }}>
        <View
          style={{
            height: Dimensions.get("screen").height/11,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth:1,
            padding: 5,
          }}>
          <View
            style={{
              height: '100%',
              width: '40%',
              justifyContent: 'space-around',
              // borderWidth:1
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: Dimensions.get('screen').fontScale * 17,
              }}>
              Studio Apartment
            </Text>
            <Text style={{fontSize:  Dimensions.get("screen").height / 50, color: 'white'}}>
              Ontario Canada
            </Text>
          </View>
          <TouchableOpacity  
          onPress={()=>{navigation.navigate("Map")}}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize:  Dimensions.get("screen").width / 20,
                textDecorationLine: 'underline',
                alignSelf: 'flex-end',
              }}>
              Map Location
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: Dimensions.get("screen").height/13, width: '100%', justifyContent: 'center'}}>
          <FlatList
            // showsVerticalScrollIndicator={true}
            data={data_2}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>{ Alert.alert(item.img,'soon')}}
                style={{
                  height: '90%',
                  width:  Dimensions.get("screen").width / 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 3,
                  shadowColor: 'black',
                  shadowOpacity: 0.26,
                  shadowOffset: {width: 4, height: 2},
                  shadowRadius: 10,
                  elevation: 5,
                  margin: 5,
                  backgroundColor: 'white',
                  borderRadius:5
                  // borderWidth:1
                }}>
                <Iconm name={item.img} size={ Dimensions.get("screen").width / 10} color={'black'} />
                <Text
                  style={{
                    fontSize:  Dimensions.get("screen").width / 29,
                    color:blue_color,
                    fontWeight: 'bold',
                  }}>
                  {item.id} bed rooms
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

       
        <Image_view_flatlist    item={route.params.item}/>
       
        
      </View>
    
    {/* M O D A L . C A L A N D E R.... */}

      <Modal
        visible={checkAvail.open}
        transparent
        onRequestClose={() => {
          setCheckAvalmodal({open: false});
          setcelender(false);
          // setSelectedEndDate(null);
          // setSelectedStartDate(null);
        }}>
        <Pressable
        
          style={{
            height: Dimensions.get('screen').height,
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100%',
            justifyContent: 'center',
          }}>
              <Animatable.View

// 'normal' |
// 'reverse' |
// 'alternate' |
// 'alternate-reverse';
             style={{
              height: Dimensions.get('screen').height / 1.8,
              width:  Dimensions.get("screen").width / 1.05,
              alignSelf: 'center',
              shadowOpacity: 3,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 4, height: 2},
              shadowRadius: 10,
              elevation: 5,
              // backgroundColor: 'white',
              borderRadius: 20,
             }}
             animation="fadeInDownBig"
            //  itesrationCount={5}
             direction="alternate"
             easing="ease-out"
             >
          <View
            style={{
              height: Dimensions.get('screen').height / 1.8,
              width:  Dimensions.get("screen").width/ 1.05,
              alignSelf: 'center',
              shadowOpacity: 3,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 4, height: 2},
              shadowRadius: 10,
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 20,
            }}>
              <>
                <ScrollView
                  contentContainerStyle={{height: '100%', width: '100%',}}>
                    <TouchableOpacity
                       style={{alignSelf: 'flex-end'}}>
                  {/* <Icon
                    name="close-circle-outline"
                    size={ Dimensions.get("screen").width / 12}
                    color={'black'}
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => {
                      setCheckAvalmodal({open: false});
                      setcelender(false);
                      // setSelectedEndDate(null);
                      // setSelectedStartDate(null);
                    }}
                  /> */}
                  </TouchableOpacity>
                  <View style={{height: '52%', width: '100%'}}>
                    <View
                      style={{
                        height: '35%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor: blue_color,
                          width: '38%',
                          borderRadius: 15,
                          alignItems: 'center',
                          height: '40%',
                          justifyContent: 'space-around',
                          shadowOpacity: 3,
                          shadowColor: 'black',
                          shadowOpacity: 0.26,
                          shadowOffset: {width: 4, height: 2},
                          shadowRadius: 10,
                          elevation: 10,
                        }}
                        onPress={() => {
                          // setcelender(true);
                          setCheckAvalmodal({
                            open:false
                           })
                          navigation.navigate("Clander_view")
                        }}>
                        
                        {  up_date_state_date ?
                        <Text
                              style={{
                                color: 'white',
                                fontSize:  Dimensions.get("screen").width / 25,
                                fontWeight: 'bold',
                              }}>
                            {date_redux}
                            </Text>:
                             <Text
                             style={{
                               color: 'white',
                               fontSize:  Dimensions.get("screen").width / 29,
                               fontWeight: 'bold',
                             }}>
                             Check in date
                           </Text>
                        }
                             
                      
                        
                      
                        <Icon
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 19}
                          color={'white'}
                         
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor: blue_color,
                          width: '38%',
                          borderRadius: 15,
                          alignItems: 'center',
                          height: '40%',
                          justifyContent: 'space-around',
                          shadowOpacity: 3,
                          shadowColor: 'black',
                          shadowOpacity: 0.26,
                          shadowOffset: {width: 4, height: 2},
                          shadowRadius: 10,
                          elevation: 10,
                        }}
                        onPress={() => {
                          // setcelender(true);
                          setCheckAvalmodal({
                            open:false
                           })
                          navigation.navigate("Clander_view_out")
                        }}>
                        
                           {  up_date_state_date_out ?
                        <Text
                              style={{
                                color: 'white',
                                fontSize:  Dimensions.get("screen").width / 25,
                                fontWeight: 'bold',
                              }}>
                            {save_date_redux_out_2}
                            </Text>:
                             <Text
                             style={{
                               color: 'white',
                               fontSize:  Dimensions.get("screen").width / 29,
                               fontWeight: 'bold',
                             }}>
                             Check out date
                        </Text>}
                        <Icon
                        
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 19}
                          color={'white'}
                        />
                      </TouchableOpacity>
                    </View>


                    <TextInput
                        style={{
                          width: '90%',
                          alignSelf: 'center',
                          borderWidth: 2,
                          color: 'black',
                          borderRadius: 10,
                          borderColor:blue_color,
                          height:Dimensions.get("screen").height/17,
                          padding:10


                        }}
                        keyboardType={'number-pad'}
                        maxLength={3}
                        placeholder={'no. of guests'}
                        placeholderTextColor={'gray'}
                      />

                      {/* </TouchableOpacity> */}
                      <View
                        style={{
                          height: '80%',
                          width: '90%',
                          alignSelf: 'center',
                          justifyContent: 'space-around',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: '20%',
                            // borderWidth: 0.3,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize:  Dimensions.get("screen").height /45,
                              color: 'black',
                              fontWeight: 'bold',
                            }}>
                            Rate per Night
                          </Text>
                          <Text style={{fontSize:  Dimensions.get("screen").height / 45, color: 'black'}}>
                            ${store_rout?.rate_per_night}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: '20%',
                            // borderWidth: 0.3,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize:  Dimensions.get("screen").height / 45,
                              color: 'black',
                              fontWeight: 'bold',
                            }}>
                            Cleaning fee
                          </Text>
                          <Text style={{fontSize:  Dimensions.get("screen").height / 45, color: 'black'}}>
                            ${store_rout?.cleaning_fee}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: '20%',
                            // borderWidth: 0.3,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize:  Dimensions.get("screen").height/ 45,
                              color: 'black',
                              fontWeight: 'bold',
                            }}>
                            security_deposit
                          </Text>
                          <Text style={{fontSize:  Dimensions.get("screen").height / 45, color: 'black'}}>
                            ${store_rout?.security_deposit}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: '20%',
                            // borderWidth: 0.3,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize:  Dimensions.get("screen").height / 45,
                              color: 'black',
                              fontWeight: 'bold',
                            }}>
                            Taxes
                          </Text>
                          <Text style={{fontSize:  Dimensions.get("screen").height / 45, color: 'black'}}>
                            $4
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '20%',
                          // borderWidth: 0.3,
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '90%',
                          alignSelf: 'center',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            fontSize:  Dimensions.get("screen").height / 45,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Total
                        </Text>
                        <Text style={{fontSize:  Dimensions.get("screen").height / 45, color: 'black'}}>
                          $
                          {store_rout?.rate_per_night +
                            store_rout?.cleaning_fee +
                            store_rout?.security_deposit}
                        </Text>
                      </View>
                      <Pressable
                      onPress={() => {
                       setCheckAvalmodal({
                        open:false
                       })
                      }}
                      android_ripple={{color: 'grey'}}
                      style={{
                        height:  Dimensions.get("screen").height/22,
                        width: '50%',
                        justifyContent: 'center',
                        borderRadius: 20,
                        alignItems: 'center',
                        backgroundColor: blue_color,
                        shadowOpacity: 3,
                        shadowColor: 'black',
                        shadowOpacity: 0.26,
                        shadowOffset: {width: 4, height: 2},
                        shadowRadius: 10,
                        elevation: 8,
                        alignSelf:"center",
                        // borderWidth:1
                        margin:25
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize:  Dimensions.get("screen").height / 50,
                        }}>
                       Cancel
                      </Text>
                    </Pressable>
                  </View>
                </ScrollView>
              </>
       
          </View>
          </Animatable.View>
        </Pressable>
      </Modal>
   
     {/* M O D A L .  I T E M . I M A G */}
    
    <Modal transparent 
    animationType="slide"
    visible={modal_item.item_open} 
    onRequestClose={()=>{setmodal_item({item_open:false})}}
    >
   <Animatable.View style={{flex:1,
   justifyContent:"center",alignItems:"center",
   backgroundColor:"rgba(0,0,0,0.7)"}}  
    //  animation="fadeInDownBig"
     //  itesrationCount={5}
      direction="alternate"
      easing="ease-out"
   >
    <TouchableOpacity 
    onPress={()=>{setmodal_item({item_open:false})}}
     style={{width:"100%",height:"100%",
    // ,borderWidth:2,
    justifyContent:"center",alignItems:"center",
    
  }}>

      <View style={{width:"90%",height:"45%",}} >
    <Image
              resizeMode="stretch"
              imageStyle={{
               borderRadius:20
                // borderRadius:50

              }

              }
                source={{uri:`https://flexrental.developer-um.xyz/storage/${item_data_image}`}}
                style={{
                  height:"100%",
                  width:"100%"  
                }}
              />
                </View>
    </TouchableOpacity>
   </Animatable.View>
    </Modal>
      
  </View>
   </ScrollView>


   <View
          style={{
            height: '9%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            shadowOpacity: 3,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 6, height: 6},
            shadowRadius: 10,
            elevation: 20,
            // margin: 5,
            backgroundColor: 'black',
            // borderWidth:1
          }}>
          <TouchableOpacity
              // onPress={()=>{navigation.navigate("Payment_screen",{store_rout})}}

            style={{
              width: '60%',
              height: '100%',
              borderBottomEndRadius:  Dimensions.get("screen").width / 4,
              backgroundColor: blue_color,
              alignItems: 'center',
              justifyContent: 'center',
              shadowOpacity: 3,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 4, height: 2},
              shadowRadius: 10,
              elevation: 5,
              // margin: 5,
              // backgroundColor: 'white',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize:  Dimensions.get("screen").height / 40,
              }}>
              ${store_rout.rate_per_night}/Night
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCheckAvalmodal({open: true});
            }}>
            <Text
              style={{
                fontSize:  Dimensions.get("screen").height / 45,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Check Avaibility
            </Text>
          </TouchableOpacity>
        </View>
   
   </>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  raaup:{
    width: Dimensions.get("screen").width,
    // height:HIGHT,
    // borderWidth:1
  },
  raaupdot:{
    // position:"absolute",
    flexDirection:"row",
    alignSelf:"center",
    // Bottom:50,
    // marginBottom:40,
    // borderWidth:1
  },
  dotActive:{
    margin:5,
    color:"black",
    fontSize:21
  },
  dot:{
    margin:5,
    color:"white",
    fontSize:20
  }
 
});
export default Imageview2
















