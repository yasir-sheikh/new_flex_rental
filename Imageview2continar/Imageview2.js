import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Settings,
  dotActive,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  TextInput,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome5';
import Icondot from 'react-native-vector-icons/Octicons';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';
import SelectList from 'react-native-dropdown-select-list';
import * as Animatable from 'react-native-animatable';
import Image_view_flatlist from './Image_view_flatlst';
import {blue_color, white_color} from '../Constants_continar/Constant.js';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';
import {
  item_redux,
  save_date_pikar,
} from '../Main_Ridux/redux/actions/Authacion';
import {BlurView} from '@react-native-community/blur';
import {useDispatch} from 'react-redux';
import { base_url } from '../BaseUrl/base_url';
import { set } from 'react-native-reanimated';

const data_2 = [
  {img: 'bed', id: 1, so: 'soon'},
  {img: 'bathtub-outline', id: 2, so: 'soon'},
  {img: 'car', id: 3, so: 'soon'},
];

function Imageview2({route, navigation}) {
 
    const shere_option = async() =>{
      const shere_options = {
        message:"DONE"
      }
    
      try{
        const response = await Share.open(shere_options)
        console.log(response,'r........................')
      }catch(errer){
        console.log(errer,'eeeeerrrrr')
      }

    }
  const [store_rout, setstore_rout] = useState(route.params?.item);
  const redux_api = useSelector(state => state.authReducer.redux_data);
  const item_data_image = useSelector(state => state.authReducer.new_item);
  const date_redux = useSelector(state => state.authReducer.save_date_redux);

  const save_date_redux_out_2 = useSelector(
    state => state.authReducer.save_date_redux_out,
  );
  // console.log(route.params?.item.id,'redux_date_out>>>>>>>>>>>>>>>>>>>>>>>>>.')
  const dispatch = useDispatch();
  const dispatch_date = useDispatch();

  const [imgActive, setimgActive] = useState();
  const [up_date_state_date, setup_date_state_date] = useState(false);


  const [checkAvail, setCheckAvalmodal] = useState({open: false});
  const [modal_item, setmodal_item] = useState({item_open: false});
  const [up_date_state_date_out, setup_date_state_date_out] = useState(false);
  const [like_hrart, setlike_hrart] = useState(false);
  const [animate, setanimate] = useState('');
  const [save_data,setsave_data]=useState('')
  // const [ss,setss]=useState('')




  useEffect(() => {
    if (save_date_redux_out_2) {
      setup_date_state_date_out(true);
    } else {
      setup_date_state_date_out(false);
    }

    if (date_redux) {
      setup_date_state_date(true);
    } else {
      setup_date_state_date(false);
    }
  });

  const listingApI = () => {
    fetch(`${base_url}/listning/${route.params.item.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }).then(async response => {
      try {
        const data = await response.json();
        setsave_data(data.listning.photos)
        // console.log(data.listning.photos,'res===========================================')
      } catch (error) {
        console.log('Error happened here!');
        console.error(error);
      }
    });
  }
  useEffect(() => {
  listingApI()
  }, []);
  
  const AUTO_SCROLL_DELAY = 2000;
  const ITEM_WIDTH = Dimensions.get("window").width/1;

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = isScrollingRight
        ? currentIndex + 1
        : currentIndex - 1;

      if (nextIndex >= save_data.length) {
        setIsScrollingRight(false);
      } else if (nextIndex <= 0) {
        setIsScrollingRight(true);
      }

      flatListRef.current.scrollToOffset({
        offset: nextIndex * ITEM_WIDTH,
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(intervalId);
  }, [currentIndex, isScrollingRight]);



  const ImagesOK = ({item,index}) => {
   

    return (
      <>
       
          <ImageBackground
            resizeMode="stretch"
            imageStyle={{
            }}
            source={{
              uri: `https://flexrental.dev-um.xyz/storage/${item.image}`,
            }}
            //  source={{  uri:item.uri}}
            style={{
              height: Dimensions.get('screen').height / 2.2,
              width: Dimensions.get('screen').width,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setmodal_item({item_open: true});
                dispatch(item_redux(item.image));
              }}
              style={{
                height: Dimensions.get('screen').height / 2.2,
                width: Dimensions.get('screen').width,
                borderBottomLeftRadius: 60,
                borderBottomRightRadius: 60,
              }}></TouchableOpacity>
          </ImageBackground>
      </>
    );
  };









  return (
    <>
      <ScrollView
        contentContainerStyle={{backgroundColor: 'black'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor={'black'} />

          <View
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height / 2.2,
            }}>
            {/* <FlatListSlider
              data={save_data}
              width={Dimensions.get('screen').width}
              height={Dimensions.get('screen').height / 2.2}
              timer={5000}
              imagekey="img"
              component={()=>  <ImagesOK />}
              indicatorActiveWidth={30}
              onPress={item => alert(JSON.stringify(item))}
              // onPress={()=>{alert('sas')}}
              contentContainerStyle={{
                alignItems: 'center',
              }}
            /> */}
              <FlatList
              data={save_data}
              renderItem={({item,index}) => <ImagesOK item={item} />}
              horizontal={true}
              // keyExtractor={(item) => item.key}
              showsHorizontalScrollIndicator={false}
              ref={flatListRef}
            />

          </View>

          <View
            style={{
              height: Dimensions.get('screen').height / 4.5,
              width: '100%',
              position: 'absolute',
              // borderWidth:1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: Dimensions.get('screen').height / 6,
                width: '92%',
                flexDirection: 'row',
                justifyContent: 'space-between',

                // borderWidth:1
              }}>
              <TouchableOpacity>
                <Icon
                  name="arrow-back"
                  color={'white'}
                  size={Dimensions.get('screen').width / 12}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  width: '25%',
                  justifyContent: 'space-between',
                  // borderWidth:1
                }}>
                <TouchableOpacity>
                  <Animatable.View
                    animation={animate}
                    // duration={600}
                    delay={400}
                    iterationCount={animate == 'fadeInDown' ? 2 : 1}
                    direction={'alternate'}>
                    <Icon
                      name="heart"
                      color={like_hrart ? 'red' : 'white'}
                      size={Dimensions.get('screen').width / 12}
                      onPress={() => {
                        if (!like_hrart) {
                          setlike_hrart(true);
                          setanimate('rubberBand');
                        } else {
                          setlike_hrart(false);
                          setanimate('swing');
                        }
                      }}
                    />
                  </Animatable.View>
                </TouchableOpacity>
              <TouchableOpacity onPress={()=>{shere_option()}}>
                <Iconf
                  name="share-square"
                  color={'white'}
                  size={Dimensions.get('screen').width / 14}
                />
                </TouchableOpacity>
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
                height: Dimensions.get('screen').height / 11,
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
                <Text
                  style={{
                    fontSize: Dimensions.get('screen').height / 50,
                    color: 'white',
                  }}>
                  Ontario Canada
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map');
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'red',
                    fontSize: Dimensions.get('screen').width / 20,
                    textDecorationLine: 'underline',
                    alignSelf: 'flex-end',
                  }}>
                  Map Location
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: Dimensions.get('screen').height / 13,
                width: '100%',
                justifyContent: 'center',
              }}>
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
                    onPress={() => {
                      Alert.alert(item.img, 'soon');
                    }}
                    style={{
                      height: '90%',
                      width: Dimensions.get('screen').width / 3,
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
                      borderRadius: 5,
                      // borderWidth:1
                    }}>
                    <Iconm
                      name={item.img}
                      size={Dimensions.get('screen').width / 10}
                      color={'black'}
                    />
                    <Text
                      style={{
                        fontSize: Dimensions.get('screen').width / 29,
                        color: blue_color,
                        fontWeight: 'bold',
                      }}>
                      {item.id} bed rooms
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <Image_view_flatlist item={route.params.item} />
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
            <BlurView
              style={styles.absolute}
              blurType="light"
              blurAmount={5}
              reducedTransparencyFallbackColor="white"
              // onPointerCancel
            />
            <Pressable
              style={{
                height: Dimensions.get('screen').height,

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
                  width: Dimensions.get('screen').width / 1.05,
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
                easing="ease-out">
                <View
                  style={{
                    height: Dimensions.get('screen').height / 1.8,
                    width: Dimensions.get('screen').width / 1.05,
                    alignSelf: 'center',
                    shadowOpacity: 3,
                    shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: {width: 4, height: 2},
                    shadowRadius: 10,
                    elevation: 5,
                    backgroundColor: 'black',
                    borderRadius: 20,
                  }}>
                  <>
                    <ScrollView
                      contentContainerStyle={{height: '100%', width: '100%'}}>
                      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
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
                                open: false,
                              });
                              navigation.navigate('Clander_view');
                            }}>
                            {up_date_state_date ? (
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: Dimensions.get('screen').width / 25,
                                  fontWeight: 'bold',
                                }}>
                                {date_redux}
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: Dimensions.get('screen').width / 29,
                                  fontWeight: 'bold',
                                }}>
                                Check in date
                              </Text>
                            )}

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
                                open: false,
                              });
                              navigation.navigate('Clander_view_out');
                            }}>
                            {up_date_state_date_out ? (
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: Dimensions.get('screen').width / 25,
                                  fontWeight: 'bold',
                                }}>
                                {save_date_redux_out_2}
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: Dimensions.get('screen').width / 29,
                                  fontWeight: 'bold',
                                }}>
                                Check out date
                              </Text>
                            )}
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
                            color: 'white',
                            borderRadius: 10,
                            borderColor: blue_color,
                            height: Dimensions.get('screen').height / 17,
                            padding: 10,
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
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                                fontWeight: 'bold',
                              }}>
                              Rate per Night
                            </Text>
                            <Text
                              style={{
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                              }}>
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
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                                fontWeight: 'bold',
                              }}>
                              Cleaning fee
                            </Text>
                            <Text
                              style={{
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                              }}>
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
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                                fontWeight: 'bold',
                              }}>
                              security_deposit
                            </Text>
                            <Text
                              style={{
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                              }}>
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
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                                fontWeight: 'bold',
                              }}>
                              Taxes
                            </Text>
                            <Text
                              style={{
                                fontSize: Dimensions.get('screen').height / 45,
                                color: white_color,
                              }}>
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
                              fontSize: Dimensions.get('screen').height / 45,
                              color: white_color,
                              fontWeight: 'bold',
                            }}>
                            Total
                          </Text>
                          <Text
                            style={{
                              fontSize: Dimensions.get('screen').height / 45,
                              color: white_color,
                            }}>
                            $
                            {store_rout?.rate_per_night +
                              store_rout?.cleaning_fee +
                              store_rout?.security_deposit}
                          </Text>
                        </View>
                        <Pressable
                          onPress={() => {
                            setCheckAvalmodal({
                              open: false,
                            });
                          }}
                          android_ripple={{color: 'grey'}}
                          style={{
                            height: Dimensions.get('screen').height / 22,
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
                            alignSelf: 'center',
                            // borderWidth:1
                            margin: 25,
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: 'white',
                              fontSize: Dimensions.get('screen').height / 50,
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

          <Modal
            transparent
            animationType="slide"
            visible={modal_item.item_open}
            onRequestClose={() => {
              setmodal_item({item_open: false});
            }}>
            <Animatable.View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.7)',
              }}
              //  animation="fadeInDownBig"
              //  itesrationCount={5}
              direction="alternate"
              easing="ease-out">
              <TouchableOpacity
                onPress={() => {
                  setmodal_item({item_open: false});
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  // ,borderWidth:2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{width: '90%', height: '45%'}}>
                  {route.params?.fileResponse ? (
                    <Image
                      resizeMode="stretch"
                      imageStyle={{
                        borderRadius: 20,
                        // borderRadius:50
                      }}
                      source={{uri: route.params?.fileResponse.uri}}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  ) : (
                    <Image
                      resizeMode="stretch"
                      imageStyle={{
                        borderRadius: 20,
                        // borderRadius:50
                      }}
                      source={{
                        uri: `https://flexrental.dev-um.xyz/storage/${item_data_image}`,
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  )}
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
          onPress={() => {
            navigation.navigate('Payment_screen', {store_rout});
          }}
          style={{
            width: '60%',
            height: '100%',
            borderBottomEndRadius: Dimensions.get('screen').width / 4,
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
              fontSize: Dimensions.get('screen').height / 40,
            }}>
            ${store_rout?.rate_per_night}/Night
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCheckAvalmodal({open: true});
          }}>
          <Text
            style={{
              fontSize: Dimensions.get('screen').height / 45,
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
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  raaup: {
    width: Dimensions.get('screen').width,
    // height:HIGHT,
    // borderWidth:1
  },
  raaupdot: {
    // position:"absolute",
    flexDirection: 'row',
    alignSelf: 'center',
    // Bottom:50,
    // marginBottom:40,
    // borderWidth:1
  },
  dotActive: {
    margin: 5,
    color: 'black',
    fontSize: 21,
  },
  dot: {
    margin: 5,
    color: 'white',
    fontSize: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Imageview2;


// const ImagesOKs = ({item}) => {
//   //  console.log(news,'nnnnnnnnnnnnnnnnnnnnnn')

//   //  useEffect(()=>{
//   //   setnews(item)
//   //  },[use])

//   return (
//     <>
//       {route.params?.fileResponse ? (
//         <ImageBackground
//           resizeMode="stretch"
//           imageStyle={{
//             borderBottomLeftRadius: 60,
//             borderBottomRightRadius: 60,
//             // borderRadius:50
//           }}
//           // source={{uri:`https://flexrental.developer-um.xyz/storage/${item.cover_photo}`}}
//           source={{uri: item.uri}}
//           style={{
//             height: Dimensions.get('screen').height / 2.2,
//             width: Dimensions.get('screen').width,
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               setmodal_item({item_open: true, item});
//               dispatch(item_redux(item.cover_photo));
//             }}
//             style={{
//               height: Dimensions.get('screen').height / 2.2,
//               width: Dimensions.get('screen').width,
//               borderBottomLeftRadius: 60,
//               borderBottomRightRadius: 60,
//             }}></TouchableOpacity>
//         </ImageBackground>
//       ) : (
//         <ImageBackground
//           resizeMode="stretch"
//           imageStyle={{
//             borderBottomLeftRadius: 60,
//             borderBottomRightRadius: 60,
//             // borderRadius:50
//           }}
//           source={{
//             uri: `https://flexrental.dev-um.xyz/storage/${item.cover_photo}`,
//           }}
//           //  source={{  uri:item.uri}}
//           style={{
//             height: Dimensions.get('screen').height / 2.2,
//             width: Dimensions.get('screen').width,
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               setmodal_item({item_open: true});
//               dispatch(item_redux(item.cover_photo));
//             }}
//             style={{
//               height: Dimensions.get('screen').height / 2.2,
//               width: Dimensions.get('screen').width,
//               borderBottomLeftRadius: 60,
//               borderBottomRightRadius: 60,
//             }}></TouchableOpacity>
//         </ImageBackground>
//       )}
//     </>
//   );
// };