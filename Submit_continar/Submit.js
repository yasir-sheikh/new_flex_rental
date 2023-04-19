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
import Iconok from 'react-native-vector-icons/Ionicons';
import Icondone from 'react-native-vector-icons/MaterialIcons';
import {blue_color, white_color} from '../Constants_continar/Constant.js';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import {removeUser, removeImage} from '../Main_Ridux/redux/actions/Authacion';
import {BlurView} from '@react-native-community/blur';
import DocumentPicker, {types} from 'react-native-document-picker';
import Iconright from 'react-native-vector-icons/Entypo';

const Submit = ({navigation, ...props}) => {
  const date_redux = useSelector(state => state.authReducer.save_date_redux);
  const save_date_redux_out_2 = useSelector(
    state => state.authReducer.save_date_redux_out,
  );

  const [tittle, settitle] = useState('');
  const [disible, setdisible] = useState(true);
  const [up_date_state_date, setup_date_state_date] = useState(false);
  const [up_date_state_date_out, setup_date_state_date_out] = useState(false);
  const [icc, seticc] = useState(false);
  const [loder, setloder] = useState(false);
  const loder_waite = () => {
    if (loder) {
      setloder(true);
      setTimeout(() => {
        navigation.navigate('Flatlist2');
        alert('Listing Add Successfully');
      }, 2000);
    } else {
      setloder(true);
      setTimeout(() => {
        navigation.navigate('Flatlist2');
        alert('Listing Add Successfully');
      }, 2000);
    }
  };
  // useEffect(()=>{
  //     if(tittle){
  //     setdisible(false)
  //     }else{
  //         setdisible(true)
  //     }
  // })
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
            height: Dimensions.get('screen').height / 5,
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
            Privacy Policy
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
            {loder ? (
              <ActivityIndicator size="large" color="#ffffff" />
            ) : (
              <Text
                style={{
                  fontSize: Dimensions.get('window').width / 23,
                  fontWeight: '900',
                  color: white_color,
                }}>
                SUBMIT PLEZZ
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
            justifyContent: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: 'gray'}}>
            What Is Lorem Ipsum? Lorem Ipsum\ Is Simply Dummy Text Of The
            Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
            Printer Took A Galley Of Type And Scrambled It To Make A Type
            Specimen Book. It Has Survived Not Only Five Centuries, But Also The
            Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
            It Was Popularised In The 1960s With The Release Of Letraset Sheets
            Containing Lorem Ipsum Various Versions Have Evolved Over The Years,
            Sometimes By Accident, Sometimes On Purpose (Injected Humour And The
            Like
          </Text>

          <View
            style={{
              width: '100%',
              height: '10%',
              //  borderWidth:1,borderColor:white_color,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (!icc) {
                  seticc(true);
                  setdisible(false);
                } else {
                  seticc(false);
                  setdisible(true);
                }
              }}
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderColor: white_color,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}>
              {icc ? (
                <Icondone
                  name="done"
                  // onPress={() => {setcounter(counter - 5)}}
                  size={18}
                  color="white"
                />
              ) : null}
            </TouchableOpacity>
            <Text style={{margin: 10, color: white_color}}>
              Agree & Continue with our privacy policy
            </Text>
          </View>

          <View
            style={{
              height: '15%',
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
              disabled={disible}
              onPress={() => {
                loder_waite();
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
                backgroundColor: disible ? 'gray' : blue_color,
                borderRadius: 7,
              }}>
              <Iconok
                name="checkmark-done-circle-sharp"
                //    onPress={() => {setcounter_1(counter_1 + 5)}}
                size={48}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Submit;
