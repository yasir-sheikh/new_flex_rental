import { StyleSheet, Text, View ,Image,ImageBackground, TouchableOpacity, ScrollView,Dimensions, Settings,dotActive,FlatList,Modal, Pressable, StatusBar} from 'react-native';
import React,{useState,useEffect} from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
 import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome5';
import Icondot from 'react-native-vector-icons/Octicons';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';
import SelectList from 'react-native-dropdown-select-list';
import * as Animatable from 'react-native-animatable';
import Image_view_flatlist from './Image_view_flatlst';

const DATA = [
  {
   img:require('../assets/veiw.png'),
  },
 {
   img:require('../assets/room.png'),
 },
 {
  img:require('../assets/balldin.jpg'),
},
 ];
 const text_objact = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere ",
    "body": " molestiae ut ut ",
    "pro": " molestiae ut ut "
  },
  {  
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum ",
    "pro": "est thns "
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea mole",
    "body": "et iusto ",
    "pro": "et iusto "
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et",
    "body": "ullam ",
    "uk": "ukk "
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt ",
    "body": "dolor ",
    "uk": "dolor "
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": " doloremque molestiae"
  },
 ]
const WIDTH=Dimensions.get("screen").width;
const screen = Dimensions.get("screen");


 const data_2 = [
    {img: 'bed', id: 1},
    {img: 'bathtub-outline', id: 2},
    {img: 'car', id: 3},
  ];
  const options = [
      {key: 1, value: '1'},
      {key: 2, value: '2'},
      {key: 3, value: '3'},
    ];


function Imageview2({route,navigation}) {
  console.log(route.params.item,'//////////')
  // const item = props.route.params;
  const [imgActive,setimgActive]=useState()

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [celender, setcelender] = useState(false);
    const [checkAvail, setCheckAvalmodal] = useState({open: false});
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [selected, setSelected] = useState('');

    const [Listning_data, SetListinig_data] = useState('');
    useEffect(() => {
      fetch(`https://flexrental.developer-um.xyz/api/listning`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }).then(async response => {
        try {
          const data = await response.json();
          // const DATA = data
       
          // SetListinig_data(item)
        } catch (error) {
          console.log('Error happened here!');
          console.error(error);
        }
      });
    }, []);

    
  const ImagesOK = () => {
    return (
      <>
        {DATA.map(val => {
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
                source={val.img}
                style={{
                  height: Dimensions.get("screen").height /2.2,
                  width: WIDTH,
                 alignItems:"center"
                }}
              >
              </ImageBackground>
            </>
          );
        })}
      </>
    );
  };



  return (
   <>
   
<ScrollView   
 contentContainerStyle={{backgroundColor:"black"}}
>
  <View style={styles.container}>
  
      <StatusBar  translucent backgroundColor={"transparent"}/>
          <View style={{width:WIDTH, height:Dimensions.get("screen").height/2.2,}}>
         

<FlatListSlider
          data={DATA}
          width={WIDTH}
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
            size={WIDTH / 12}
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
            <Icon name="heart-outline" color={'white'} size={WIDTH / 12} />
            <Iconf name="share-square" color={'white'} size={WIDTH / 14} />
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
                color: 'black',
                fontSize: Dimensions.get('screen').fontScale * 17,
              }}>
              Studio Apartment
            </Text>
            <Text style={{fontSize: WIDTH / 29, color: 'black'}}>
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
                fontSize: WIDTH / 20,
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
                style={{
                  height: '90%',
                  width: WIDTH / 3,
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
                  // borderWidth:1
                }}>
                <Iconm name={item.img} size={WIDTH / 10} color={'black'} />
                <Text
                  style={{
                    fontSize: WIDTH / 29,
                    color:"#00bfff",
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
    
      <Modal
        visible={checkAvail.open}
        transparent
        onRequestClose={() => {
          setCheckAvalmodal({open: false});
          setcelender(false);
          setSelectedEndDate(null);
          setSelectedStartDate(null);
        }}>
        <Pressable
        
          style={{
            height: Dimensions.get('screen').height,
            backgroundColor: 'rgba(0,0,0,0.3)',
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
              width: WIDTH / 1.05,
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
             animation="fadeInUpBig"
            //  itesrationCount={5}
             direction="alternate"
             easing="ease-out"
             >
          <View
            style={{
              height: Dimensions.get('screen').height / 1.8,
              width: WIDTH / 1.05,
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
            {!celender ? (
              <>
                <ScrollView
                  style={{height: '100%', width: '100%'}}
                  contentContainerStyle={{height: '100%', width: '100%'}}>
                    <TouchableOpacity
                       style={{alignSelf: 'flex-end'}}>
                  <Icon
                    name="close-circle-outline"
                    size={WIDTH / 12}
                    color={'black'}
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => {
                      setCheckAvalmodal({open: false});
                      setcelender(false);
                      setSelectedEndDate(null);
                      setSelectedStartDate(null);
                    }}
                  />
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
                          backgroundColor: "#00bfff",
                          width: '35%',
                          borderRadius: 15,
                          alignItems: 'center',
                          height: '40%',
                          justifyContent: 'space-around',
                        }}
                        onPress={() => {
                          setcelender(true);
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: WIDTH / 25,
                            fontWeight: 'bold',
                          }}>
                          {selectedStartDate
                            ? selectedStartDate
                                ?.format('YYYY-MM-DD')
                                ?.toString()
                            : 'Check in date'}
                        </Text>
                        <Icon
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 17}
                          color={'white'}
                          // style={{alignSelf: 'center', right: 40}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor: "#00bfff",
                          width: '38%',
                          borderRadius: 10,
                          alignItems: 'center',
                          height: '40%',
                          justifyContent: 'space-around',
                        }}
                        onPress={() => {
                          setcelender(true);
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: WIDTH / 25,
                            fontWeight: 'bold',
                          }}>
                          {selectedEndDate
                            ? selectedEndDate?.format('YYYY-MM-DD')?.toString()
                            : 'Check Out Date'}
                        </Text>
                        <Icon
                          name={'calendar-outline'}
                          size={Dimensions.get('screen').width / 17}
                          color={'white'}
                          // style={{alignSelf: 'center', right: 40}}
                        />
                      </TouchableOpacity>
                    </View>

                    <SelectList
                      search={false}
                      setSelected={setSelected}
                      data={options}
                      dropdownItemStyles={{color: 'black'}}
                      dropdownTextStyles={{color: 'black'}}
                      inputStyles={{color: 'black'}}
                      placeholder="No. of guest"
                      boxStyles={{width: '90%', alignSelf: 'center'}}
                    />

                    {/* </TouchableOpacity> */}
                    <View
                      style={{
                        height: '100%',
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-around',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '20%',
                          borderWidth: 0.3,
                          justifyContent:'space-around' ,
                          alignItems: 'center',
                          borderRadius: 15,
                        }}>
                        <Text
                          style={{
                            fontSize: WIDTH / 24,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Rate per Night
                        </Text>
                        <Text style={{fontSize: WIDTH / 24, color: 'black'}}>
                          $30
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '20%',
                          borderWidth: 0.3,
                          justifyContent: "space-around",
                          alignItems: 'center',
                          borderRadius: 15,
                        }}>
                        <Text
                          style={{
                            fontSize: WIDTH / 24,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Cleaning fee
                        </Text>
                        <Text style={{fontSize: WIDTH / 24, color: 'black'}}>
                          $2
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '20%',
                          borderWidth: 0.4,
                          justifyContent:"space-around",
                          alignItems: 'center',
                          borderRadius: 15,
                        }}>
                        <Text
                          style={{
                            fontSize: WIDTH / 24,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Service fee
                        </Text>
                        <Text style={{fontSize: WIDTH / 24, color: 'black'}}>
                          $12
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: '20%',
                          borderWidth: 0.4,
                          justifyContent: "space-around",
                          alignItems: 'center',
                          borderRadius: 15,
                        }}>
                        <Text
                          style={{
                            fontSize: WIDTH / 24,
                            color: 'black',
                            fontWeight: 'bold',
                          }}>
                          Taxes
                        </Text>
                        <Text style={{fontSize: WIDTH / 24, color: 'black'}}>
                          $4
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: '20%',
                        borderWidth: 0.4,
                        justifyContent:"space-around",
                        alignItems: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        borderRadius: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: WIDTH / 20,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        Total
                      </Text>
                      <Text style={{fontSize: WIDTH / 20, color: 'black'}}>
                        $38
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </>
            ) : celender ? (
              <>
                <CalendarPicker
                  selectedDayColor={"green"}
                  onDateChange={e => {
                    if (!selectedStartDate) {
                      setSelectedStartDate(e);
                    } else {
                      setSelectedEndDate(e);
                    }
                  }}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "#00bfff",
                    height: '10%',
                    width: '25%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    alignSelf: 'center',
                    top: 15,
                  }}
                  onPress={() => {
                    setcelender(false);
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                    Done
                  </Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
          </Animatable.View>
        </Pressable>
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
            backgroundColor: 'white',
            // borderWidth:1
          }}>
          <View
            style={{
              width: '60%',
              height: '100%',
              borderBottomEndRadius: WIDTH / 4,
              backgroundColor: "#00bfff",
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
                fontSize: WIDTH / 16,
              }}>
              $120/Night
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setCheckAvalmodal({open: true});
            }}>
            <Text
              style={{
                fontSize: WIDTH / 20,
                color: 'black',
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
    backgroundColor: 'wh',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  raaup:{
    width:WIDTH,
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


















// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';

// export default class Clounder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }
//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     return (
//       <View style={styles.container}>
//         <CalendarPicker
//           onDateChange={this.onDateChange}
//         />


//         <View>
//           <Text>SELECTED DATE:{ startDate }</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   }
//   })







// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   ScrollView,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   Modal,
//   Keyboard,
//   TextInput,
// } from 'react-native';
// import Picker from 'react-native-picker-select';
// import React, {useState,useEffect} from 'react';
// // import {height, main_color, width} from '../../Constants/constant';
// import {FlatListSlider} from 'react-native-flatlist-slider';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Iconf from 'react-native-vector-icons/FontAwesome5';
// import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
// // import {useEffect} from 'react';
// // import CalendarPicker from 'react-native-calendar-picker';
// // import SelectList from 'react-native-dropdown-select-list';
// // import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// const options = [
//   {key: 1, value: '1'},
//   {key: 2, value: '2'},
//   {key: 3, value: '3'},
// ];
// const data = [
//   {img:"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
//     },
//   {img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
//     },
//   {img: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
// },
// ];
// const data_2 = [
//   {img: 'bed', id: 1},
//   {img: 'bathtub-outline', id: 2},
//   {img: 'car', id: 3},
// ];
// export default function Imageview2({...props}) {
//   const [imgActive, setimgActive] = useState(0);
//   const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);
//   const [celender, setcelender] = useState(false);
//   const [checkAvail, setCheckAvalmodal] = useState({open: false});
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [selected, setSelected] = useState('');
//   // onchange=(nativeEvent)=>{

//   // }
//   // setInterval(() => {
//   //   setimgActive(imags)

//   const [index, setindex] = useState(0);
//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         setKeyboardVisible(true);
//       },
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         setKeyboardVisible(false);
//       },
//     );
//     return () => {
//       keyboardDidHideListener.remove();
//       keyboardDidShowListener.remove();
//     };
//   }, [props]);
//   return (
//     // <View style={{flex: 1}}>
//     <ScrollView contentContainerStyle={{flex: 1}}>
//       <View style={styles.raaup}>
//         <FlatListSlider
//           data={data}
//           width={width}
//           height={height / 2.3}
//           timer={5000}
//           imagekey="img"
//           component={<Images />}
//           onPress={item => alert(JSON.stringify(item))}
//           indicatorActiveWidth={20}
//           contentContainerStyle={{
//             borderBottomLeftRadius: width / 6,
//             borderBottomRightRadius: width / 6,
//             shadowOpacity: 3,
//             shadowColor: 'black',
//             shadowOpacity: 0.26,
//             shadowOffset: {width: 4, height: 2},
//             shadowRadius: 10,
//             elevation: 5,
//             backgroundColor: 'white',
//           }}
//         />
//         <View
//           style={{
//             height: '15%',
//             width: '100%',
//             position: 'absolute',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <Icon
//             name="arrow-back"
//             color={'white'}
//             size={width / 12}
//             onPress={() => {
//               props.navigation.navigate('Home_screen_tab');
//             }}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               width: '30%',
//               justifyContent: 'space-evenly',
//             }}>
//             <Icon name="heart-outline" color={'white'} size={width / 12} />
//             <Iconf name="share-square" color={'white'} size={width / 14} />
//           </View>
//         </View>
//       </View>

//       {/* b  o  t t  o  m   d   i   v  */}
//       <View
//         style={{
//           height: '50.5%',
//           width: '100%',
//           // top: height / 912,
//           // borderWidth:1
//         }}>
//         <View
//           style={{
//             height: '13%',
//             width: '100%',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             // borderWidth:1,
//             padding: 5,
//           }}>
//           <View
//             style={{
//               height: '100%',
//               width: '40%',
//               justifyContent: 'space-around',
//             }}>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: 'black',
//                 fontSize: Dimensions.get('screen').fontScale * 17,
//               }}>
//               Studio Apartment
//             </Text>
//             <Text style={{fontSize: width / 29, color: 'black'}}>
//               Ontario Canada
//             </Text>
//           </View>
//           <TouchableOpacity>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: 'red',
//                 fontSize: width / 20,
//                 textDecorationLine: 'underline',
//                 alignSelf: 'flex-end',
//               }}>
//               Map Location
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{height: '20%', width: '100%', justifyContent: 'center'}}>
//           <FlatList
//             // showsVerticalScrollIndicator={true}
//             data={data_2}
//             contentContainerStyle={{
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             horizontal
//             keyExtractor={item => {
//               item.id;
//             }}
//             renderItem={({item}) => (
//               <TouchableOpacity
//                 style={{
//                   height: '90%',
//                   width: width / 3,
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   shadowOpacity: 3,
//                   shadowColor: 'black',
//                   shadowOpacity: 0.26,
//                   shadowOffset: {width: 4, height: 2},
//                   shadowRadius: 10,
//                   elevation: 5,
//                   margin: 5,
//                   backgroundColor: 'white',
//                 }}>
//                 <Iconm name={item.img} size={width / 10} color={'black'} />
//                 <Text
//                   style={{
//                     fontSize: width / 29,
//                     color: main_color,
//                     fontWeight: 'bold',
//                   }}>
//                   {item.id} bed rooms
//                 </Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//         {/* d  i   s  c  r  i   p   t  i  o  n  s */}

//         <View style={{height: '40%', width: '100%', paddingHorizontal: 20}}>
//           <ScrollView>
//             <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
//               Features
//             </Text>
//             <View>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: width / 30,
//                   color: 'black',
//                   opacity: 0.7,
//                 }}>
//                 4 bad rooms
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: width / 30,
//                   color: 'black',
//                   opacity: 0.7,
//                 }}>
//                 3 launch
//               </Text>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: width / 30,
//                   color: 'black',
//                   opacity: 0.7,
//                 }}>
//                 1 drawing room
//               </Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: width / 28,
//                   color: 'black',
//                 }}>
//                 Garden and car parking
//               </Text>
//               <Text
//                 style={{color: 'black', fontSize: width / 35, opacity: 0.6}}>
//                 Garden and car parking Garden and car parking Garden and car
//                 parking Garden and car parking Garden and car parking Garden and
//                 car parking Garden and car parking Garden and car parking Garden
//                 and car parking Garden and car parking z
//               </Text>
//             </View>
//           </ScrollView>
//         </View>
//         <View
//           style={{
//             height: '17.8%',
//             width: '100%',
//             flexDirection: 'row',
//             alignItems: 'center',
//             shadowOpacity: 3,
//             shadowColor: 'black',
//             shadowOpacity: 0.26,
//             shadowOffset: {width: 6, height: 6},
//             shadowRadius: 10,
//             elevation: 20,
//             // margin: 5,
//             backgroundColor: 'white',
//           }}>
//           <View
//             style={{
//               width: '60%',
//               height: '100%',
//               borderBottomEndRadius: width / 4,
//               backgroundColor: main_color,
//               alignItems: 'center',
//               justifyContent: 'center',
//               shadowOpacity: 3,
//               shadowColor: 'black',
//               shadowOpacity: 0.26,
//               shadowOffset: {width: 4, height: 2},
//               shadowRadius: 10,
//               elevation: 5,
//               // margin: 5,
//               // backgroundColor: 'white',
//             }}>
//             <Text
//               style={{
//                 color: 'white',
//                 fontWeight: 'bold',
//                 fontSize: width / 16,
//               }}>
//               $120/Night
//             </Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => {
//               setCheckAvalmodal({open: true});
//             }}>
//             <Text
//               style={{
//                 fontSize: width / 20,
//                 color: 'black',
//                 textAlign: 'center',
//                 fontWeight: 'bold',
//               }}>
//               Check Avaibility
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* C   h    e   c   k   a   v    a    i  l    i   b   i    l   i   t   y    Modal */}

//       <Modal
//         visible={checkAvail.open}
//         transparent
//         onRequestClose={() => {
//           setCheckAvalmodal({open: false});
//           setcelender(false);
//           setSelectedEndDate(null);
//           setSelectedStartDate(null);
//         }}>
//         <TouchableWithoutFeedback
        
//           style={{
//             height: Dimensions.get('screen').height,
//             backgroundColor: 'rgba(0,0,0,0.3)',
//             width: '100%',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               height: Dimensions.get('screen').height / 1.8,
//               width: width / 1.05,
//               alignSelf: 'center',
//               shadowOpacity: 3,
//               shadowColor: 'black',
//               shadowOpacity: 0.26,
//               shadowOffset: {width: 4, height: 2},
//               shadowRadius: 10,
//               elevation: 5,
//               backgroundColor: 'white',
//               borderRadius: 20,
//             }}>
//             {!celender ? (
//               <>
//                 <ScrollView
//                   style={{height: '100%', width: '100%'}}
//                   contentContainerStyle={{height: '100%', width: '100%'}}>
//                     <TouchableOpacity
//                        style={{alignSelf: 'flex-end'}}>
//                   <Icon
//                     name="close-circle-outline"
//                     size={width / 12}
//                     color={'red'}
//                     style={{alignSelf: 'flex-end'}}
//                     onPress={() => {
//                       setCheckAvalmodal({open: false});
//                       setcelender(false);
//                       setSelectedEndDate(null);
//                       setSelectedStartDate(null);
//                     }}
//                   />
//                   </TouchableOpacity>
//                   <View style={{height: '52%', width: '100%'}}>
//                     <View
//                       style={{
//                         height: '35%',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-evenly',
//                       }}>
//                       <TouchableOpacity
//                         style={{
//                           flexDirection: 'row',
//                           backgroundColor: "green",
//                           width: '35%',
//                           borderRadius: 10,
//                           alignItems: 'center',
//                           height: '40%',
//                           justifyContent: 'space-around',
//                         }}
//                         onPress={() => {
//                           setcelender(true);
//                         }}>
//                         <Text
//                           style={{
//                             color: 'white',
//                             fontSize: width / 25,
//                             fontWeight: 'bold',
//                           }}>
//                           {/* {selectedStartDate
//                             ? selectedStartDate
//                                 ?.format('YYYY-MM-DD')
//                                 ?.toString()
//                             : 'Check in date'} */}
//                         </Text>
//                         <Icon
//                           name={'calendar-outline'}
//                           size={Dimensions.get('screen').width / 17}
//                           color={'white'}
//                           // style={{alignSelf: 'center', right: 40}}
//                         />
//                       </TouchableOpacity>
//                       <TouchableOpacity
//                         style={{
//                           flexDirection: 'row',
//                           backgroundColor: main_color,
//                           width: '38%',
//                           borderRadius: 10,
//                           alignItems: 'center',
//                           height: '40%',
//                           justifyContent: 'space-around',
//                         }}
//                         onPress={() => {
//                           setcelender(true);
//                         }}>
//                         <Text
//                           style={{
//                             color: 'white',
//                             fontSize: width / 25,
//                             fontWeight: 'bold',
//                           }}>
//                           {/* {selectedEndDate
//                             ? selectedEndDate?.format('YYYY-MM-DD')?.toString()
//                             : 'Check Out Date'} */}
//                         </Text>
//                         <Icon
//                           name={'calendar-outline'}
//                           size={Dimensions.get('screen').width / 17}
//                           color={'white'}
//                           // style={{alignSelf: 'center', right: 40}}
//                         />
//                       </TouchableOpacity>
//                     </View>

//                     <SelectList
//                       search={false}
//                       setSelected={setSelected}
//                       data={options}
//                       dropdownItemStyles={{color: 'black'}}
//                       dropdownTextStyles={{color: 'black'}}
//                       inputStyles={{color: 'black'}}
//                       placeholder="No. of guest"
//                       boxStyles={{width: '90%', alignSelf: 'center'}}
//                     />

//                     {/* </TouchableOpacity> */}
//                     <View
//                       style={{
//                         height: '100%',
//                         width: '90%',
//                         alignSelf: 'center',
//                         justifyContent: 'space-around',
//                       }}>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           height: '20%',
//                           borderWidth: 0.3,
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           borderRadius: 10,
//                         }}>
//                         <Text
//                           style={{
//                             fontSize: width / 24,
//                             color: 'black',
//                             fontWeight: 'bold',
//                           }}>
//                           Rate per Night
//                         </Text>
//                         <Text style={{fontSize: width / 24, color: 'black'}}>
//                           $30
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           height: '20%',
//                           borderWidth: 0.3,
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           borderRadius: 10,
//                         }}>
//                         <Text
//                           style={{
//                             fontSize: width / 24,
//                             color: 'black',
//                             fontWeight: 'bold',
//                           }}>
//                           Cleaning fee
//                         </Text>
//                         <Text style={{fontSize: width / 24, color: 'black'}}>
//                           $2
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           height: '20%',
//                           borderWidth: 0.3,
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           borderRadius: 10,
//                         }}>
//                         <Text
//                           style={{
//                             fontSize: width / 24,
//                             color: 'black',
//                             fontWeight: 'bold',
//                           }}>
//                           Service fee
//                         </Text>
//                         <Text style={{fontSize: width / 24, color: 'black'}}>
//                           $12
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           height: '20%',
//                           borderWidth: 0.3,
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           borderRadius: 10,
//                         }}>
//                         <Text
//                           style={{
//                             fontSize: width / 24,
//                             color: 'black',
//                             fontWeight: 'bold',
//                           }}>
//                           Taxes
//                         </Text>
//                         <Text style={{fontSize: width / 24, color: 'black'}}>
//                           $4
//                         </Text>
//                       </View>
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         height: '20%',
//                         borderWidth: 0.3,
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         width: '90%',
//                         alignSelf: 'center',
//                         borderRadius: 10,
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: width / 20,
//                           color: 'black',
//                           fontWeight: 'bold',
//                         }}>
//                         Total
//                       </Text>
//                       <Text style={{fontSize: width / 20, color: 'black'}}>
//                         $38
//                       </Text>
//                     </View>
//                   </View>
//                 </ScrollView>
//               </>
//             ) : celender ? (
//               <>
//                 <CalendarPicker
//                   selectedDayColor={main_color}
//                   onDateChange={e => {
//                     if (!selectedStartDate) {
//                       setSelectedStartDate(e);
//                     } else {
//                       setSelectedEndDate(e);
//                     }
//                   }}
//                 />
//                 <TouchableOpacity
//                   style={{
//                     backgroundColor: main_color,
//                     height: '10%',
//                     width: '25%',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     borderRadius: 20,
//                     alignSelf: 'center',
//                     top: 15,
//                   }}
//                   onPress={() => {
//                     setcelender(false);
//                   }}>
//                   <Text
//                     style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
//                     Done
//                   </Text>
//                 </TouchableOpacity>
//               </>
//             ) : null}
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </ScrollView>
//     // </View>
//   );
// }

// const Images = () => {
//   return (
//     <>
//       {data.map(val => {
//         return (
//           <>
//             <Image
//               source={val.img}
//               style={{
//                 height: height / 2.3,
//                 width: width,
//                 borderBottomLeftRadius: width / 6,
//                 borderBottomRightRadius: width / 6,
//                 shadowOpacity: 3,
//                 shadowColor: 'black',
//                 shadowOpacity: 0.26,
//                 shadowOffset: {width: 4, height: 2},
//                 shadowRadius: 10,
//                 elevation: 5,
//                 backgroundColor: 'white',
//               }}
//             />
//           </>
//         );
//       })}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#ffc107',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   raaup: {
//     width: width,
//     height: Dimensions.get('screen').height / 2,
//     // borderWidth: 2,
//     // borderBottomLeftRadius: width / 6,
//     // borderBottomRightRadius: width / 6,
//   },
//   raaupdot: {
//     position: 'relative',
//     flexDirection: 'row',
//     alignSelf: 'center',
//     Bottom: 50,
//     marginBottom: 40,
//   },
//   dotActive: {
//     margin: 5,
//     color: 'red',
//   },
//   dot: {
//     margin: 5,
//     color: 'black',
//   },
// });