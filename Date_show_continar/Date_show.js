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
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Iconfile from 'react-native-vector-icons/FontAwesome';
import Iconpng from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue_color, white_color} from '../Constants_continar/Constant.js';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import {removeUser, removeImage} from '../Main_Ridux/redux/actions/Authacion';
import {BlurView} from '@react-native-community/blur';
import DocumentPicker, {types} from 'react-native-document-picker';
import Iconright from 'react-native-vector-icons/Entypo';

const Date_show = ({navigation, ...props}) => {
  const date_redux = useSelector(state => state.authReducer.save_date_redux);
  const save_date_redux_out_2 = useSelector(
    state => state.authReducer.save_date_redux_out,
  );

  const [tittle, settitle] = useState('');
  const [disible, setdisible] = useState(true);
  const [up_date_state_date, setup_date_state_date] = useState(false);
  const [up_date_state_date_out, setup_date_state_date_out] = useState(false);
  useEffect(() => {
    if (tittle) {
      setdisible(false);
    } else {
      setdisible(true);
    }
  });
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

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{
          width: Dimensions.get('window').width / 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            height: Dimensions.get('screen').height / 3.5,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Text style={{
        fontSize:Dimensions.get("window").width/18,margin:10,
       fontWeight:"900",color:white_color

       }}>Let Give Your Place A Name</Text> */}
          <Text
            style={{
              fontSize: Dimensions.get('window').width / 18,
              fontWeight: '900',
              color: white_color,
              margin: 10,
            }}>
            Check In Or Out Date ?
          </Text>
          <View
            style={{
              width: '100%',
              height: '40%',
              borderWidth: 1,
              //    borderColor:"red",
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            {up_date_state_date ? (
              <Text
                style={{
                  fontSize: Dimensions.get('window').width / 23,
                  fontWeight: '900',
                  color: white_color,
                }}>
                Date {date_redux}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: Dimensions.get('window').width / 23,
                  fontWeight: '900',
                  color: white_color,
                }}>
                Check in Date
              </Text>
            )}

            {up_date_state_date_out ? (
              <Text
                style={{
                  fontSize: Dimensions.get('window').width / 23,
                  fontWeight: '900',
                  color: white_color,
                }}>
                Date {save_date_redux_out_2}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: Dimensions.get('window').width / 23,
                  fontWeight: '900',
                  color: white_color,
                }}>
                Check Out Date
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: Dimensions.get('screen').height / 1.7,
            borderWidth: 1,
            alignItems: 'center',
            //    borderWidth:2,
            // borderColor:white_color,
          }}>
          <View
            style={{
              height: '14%',
              width: '100%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth:1,borderColor:white_color,
              justifyContent: 'space-around',
              // backgroundColor:blue_color,
              borderRadius: 7,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // disabled={disible}
              onPress={() => {
                navigation.navigate('Clander_view');
              }}
              style={{
                height: '70%',
                width: '40%',
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: white_color,
                justifyContent: 'space-around',
                backgroundColor: blue_color,
                borderRadius: 7,
                // margin:60
              }}>
              <Text style={{fontWeight: 'bold', color: white_color}}>
                {' '}
                Check In Date
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // disabled={disible}
              onPress={() => {
                navigation.navigate('Clander_view_out');
              }}
              style={{
                height: '70%',
                width: '40%',
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: white_color,
                justifyContent: 'space-around',
                backgroundColor: blue_color,
                borderRadius: 7,
                // margin:70
              }}>
              <Text style={{fontWeight: 'bold', color: white_color}}>
                Check Out Date
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '60%',
              width: '100%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth:1,borderColor:white_color,
              justifyContent: 'space-around',
              // backgroundColor:blue_color,
              borderRadius: 7,
              flexDirection: 'row',
              // margin:150
            }}>
            <View
              style={{
                height: '25%',
                width: '80%',
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                // borderWidth:1,borderColor:  white_color,
                justifyContent: 'space-between',
                // backgroundColor: disible ? 'gray': blue_color,
                borderRadius: 7,
                flexDirection: 'row',
                // margin:110
              }}>
              <TouchableOpacity
                // disabled={disible}
                onPress={() => {
                  navigation.navigate('Profile_main');
                }}
                style={{
                  height: '85%',
                  width: '25%',
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderWidth:1,borderColor:  white_color,
                  // justifyContent:"flex-start",
                  flexDirection: 'row',
                  backgroundColor: blue_color,
                  borderRadius: 7,
                }}>
                <Iconright
                  name="arrow-with-circle-left"
                  //    onPress={() => {setcounter_1(counter_1 + 5)}}
                  size={45}
                  color={'white'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                // disabled={disible}
                onPress={() => {
                  navigation.navigate('Submit');
                }}
                style={{
                  height: '85%',
                  width: '25%',
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderWidth:1,borderColor:  white_color,
                  // justifyContent:"flex-end",
                  flexDirection: 'row',
                  backgroundColor: blue_color,
                  borderRadius: 7,
                }}>
                <Iconright
                  name="arrow-with-circle-right"
                  //    onPress={() => {setcounter_1(counter_1 + 5)}}
                  size={45}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Profile_main")}}
        style={{height:"70%",width:"40%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor:  white_color,
        justifyContent:"space-around",
        backgroundColor:  blue_color,
        borderRadius:7,
        // margin:60
        }}>
<Text style={{fontWeight:"bold",color:white_color}}> BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Submit")}}
        style={{height:"70%",width:"40%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor: white_color,
        justifyContent:"space-around",
        backgroundColor: blue_color,
        borderRadius:7,
        // margin:70
        }}>
<Text style={{fontWeight:"bold",color:white_color}}>NEXT</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Date_show;
