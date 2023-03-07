import { View ,Text, TouchableOpacity, ImageBackground,ScrollView,Keyboard,Dimensions,
  ActivityIndicator,
  Image, StatusBar,Modal,StyleSheet} from "react-native"
import React, {useState, useEffect, useRef, useCallback} from 'react';
import FastImage from "react-native-fast-image";
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { initStripe } from '@stripe/stripe-react-native';
import { blue_color,white_color } from '../Constants_continar/Constant.js';
import Iconcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconcrous from 'react-native-vector-icons/Entypo';
import Iconcard from 'react-native-vector-icons/Fontisto';
// import Iconuni from 'react-native-vector-icons/';
import * as Animatable from 'react-native-animatable';
import { BlurView } from "@react-native-community/blur";
import Icondone from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";


const DATA = [
  {
   img:require('../assets/Mastercard_1.png'),
  },
 {
   img:require('../assets/all_card.png'),
 },
 {
  img:require('../assets/Debit-Card_1.png'),
},
{
  img:require('../assets/new_visa.png'),
},

 ];

const Payment_screen =({route,navigation})=>{

  const [icc,seticc]=useState(false)
    const [select,setselect]=useState(null)
    const[desible,setdesible]=useState(true)
  const[loder,setloder]=useState(false)
  const [open_modal, setopen_modal] = useState({open_modals: false});
  const [open_modal_2, setopen_modal_2] = useState({open_modals_2: false});
  const wait_loder =()=>{
    setloder(true)
      
    setTimeout(() => {
      setloder(false)
      setopen_modal({open_modals:false})
      setopen_modal_2({open_modals_2: true})
    }, 2000);
    setTimeout(() => {
      // setloder(false)
      // setopen_modal({open_modals:false})
      setopen_modal_2({open_modals_2: false})
    }, 4000);


  }
  
   const card_select =  [
    {
      "userId": 1,
      "id": 1,
      "title": "Card",
      img: 'credit-card',
      color:'black'
    },
    {
      "userId": 1,
      "id": 2,
      "title": "iDAL",
      img: 'mastercard',
      color:'red'
    },
    {
      "userId": 1,
      "id": 3,
      "title": "SPEEA Debit",
      img: 'credit-card',
      color:'yellow'
    },
  ]  
  // console.log(route.params.store_rout.rate_per_night,'//////////pppppppppppppppp')
     

  useEffect(() => {
    // initStripe({
    //   // publishableKey: '',
    //   // merchantIdentifier: 'merchant.identifier',
    //   // urlScheme: "your-url-scheme",
    // });
  }, []);


  const ImagesOK = () => {
    return (
      <>
        {DATA.map(val => {
          return (
            <>
              <ImageBackground
              resizeMode="cover"
              imageStyle={{

              }

              }
                source={val.img}
                style={{
                  height: Dimensions.get("screen").height /4.3,
                  width: Dimensions.get("screen").width/1.3,
                 alignItems:"center",
                 justifyContent:"space-evenly",

                //  ,marginLeft:20,
                 marginHorizontal:5,
                 margin:5,
                 backgroundColor:"black"
                //  borderWidth:1

                }}
              >
              </ImageBackground>
            </>
          );
        })}
      </>
    );
  };



const { confirmPayment } = useStripe();

return (
  <ScrollView scrollEnabled={true}  
  contentContainerStyle={{
    flex:1,
    backgroundColor:"black",
    
  }}
  >
      <StatusBar backgroundColor={'black'}   />
    {/* <StatusBar backgroundColor={"red"}/> */}
  <View  style={{
    flex:1,
    // justifyContent:"center",
    alignItems:"center",
    // borderWidth:1,
    backgroundColor:"white"
    
  }}>
     <View  style={{
    width:"100%",
    height:Dimensions.get("screen").height/5,
    justifyContent:"center",
    alignItems:"center",
    // borderWidth:1,
    backgroundColor:"white",
    shadowColor: "#000",
shadowOffset: {
	width: 1,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,

    // borderColor:'red'

  }} >

    <View style={{
      width:70,
      height:69,
      borderWidth:1,
      borderRadius:100,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black"
      }}>
        <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"90%",height:"90%",borderRadius:100}}
    />
        

    </View>
    <View style={{
      width:"90%",
      height:"50%",
      // borderWidth:1,
      justifyContent:"center",
      alignItems:"center",
      justifyContent:"flex-end"
      }}>
        <View style={{
      width:"100%",
      height:"50%",
      // borderWidth:1,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      }}>
        
     <Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 16,
      fontWeight:"900",
      }}> Flex Rental</Text>
     
     <Iconcon
  name="account"
  color={'black'}
  size={ Dimensions.get("screen").width / 11}
  // onPress={()=>{navigation.goBack()}
/>

      </View>



      </View>
  


  </View>
    <View  style={{
    width:"100%",
    height:Dimensions.get("screen").height/3.5,
    justifyContent:"center",
    alignItems:"center",
    // borderWidth:1

  }} >

    <View style={{
      width:"90%",
      height:'100%',
      justifyContent:"center",
      // alignItems:"center",
      // borderWidth:1,
      justifyContent:"space-evenly",
      // backgroundColor:white_color
      }}>
        <View style={{
      width:"100%",
      height:'20%',
      justifyContent:"center",
      // alignItems:"center",
      // borderWidth:1
      }}>

        <Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 20,
      fontWeight:"bold"
      }} >Your Card</Text>
      </View>
   
   <View style={{
      width:"100%",
      height:'22%',
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",
      
      borderRadius:10,

      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      // shadowRadius: ,  
      elevation: 5
  
  // borderBottomLeftRadius:20,
  // borderBottomRightRadius:20,
      }} >

<Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 27,
      fontWeight:"bold",
      margin:9
      }} >Rate per Night</Text>

      <Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 27,
      fontWeight:"bold",
      margin:9
      }} >$
        {
          route.params?.store_rout?.rate_per_night 
         
        }
      
      </Text>
    

   </View>
   <View style={{
      width:"100%",
      height:'22%',
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      // shadowRadius: ,  
      elevation: 5,
  borderRadius:10
  // borderBottomLeftRadius:20,
  // borderBottomRightRadius:20,
      }} >

<Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 27,
      fontWeight:"bold",
      margin:7
      }} > Cleaning fee</Text>

      <Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 27,
      fontWeight:"bold",
      margin:9
      }} >${
        route.params?. store_rout?.cleaning_fee 
      }</Text>
    

   </View>
   <View style={{
      width:"100%",
      height:'22%',
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      // shadowRadius: ,  
      elevation: 5,
  // shadowRadius: 16.00,
  
  // elevation: 24,
  borderRadius:10
  // borderBottomLeftRadius:20,
  // borderBottomRightRadius:20,
      }} >

<Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} >Your Card</Text>

      <Text style={{
      color:"black",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} >${route.params?. store_rout?.security_deposit}</Text>
    

   </View>
  

      <View>

      </View>
         
       

    </View>


    

      {/* <CardField
    postalCodeEnabled={true}
    placeholders={{
      number: '4242 4242 4242 4242',
    }}
    
    cardStyle={{
      backgroundColor:'red',
      textColor: 'black',
      borderColor:white_color,
      borderWidth:2,
      borderRadius:5
    }}
    style={{
      width: '100%',
      height: Dimensions.get("screen").height/10,
      borderWidth:1,
      borderColor:"red"
      
      // marginVertical: 30,
      // borderRadius:10
    }}
    onCardChange={(cardDetails) => {
      console.log('cardDetails', cardDetails);
    }}
    onFocus={(focusedField) => {
      console.log('focusField', focusedField);
    }}
  /> */}

  </View>

  <View style={{
       width:"100%",
       height:Dimensions.get("screen").height/2.5,
       justifyContent:"center",
       alignItems:"center",
      //  borderWidth:1,
      //  justifyContent:"space-evenly"
  }}>
    <View style={{
       width:"90%",
       height:'60%',
      //  justifyContent:"center",
       alignItems:"center",
      //  borderWidth:1,
      //  justifyContent:"space-evenly"
  }}>

    
     <View style={{
      width:"100%",
      height:'25%',
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",

  borderRadius:10,
  
  // borderBottomLeftRadius:20,
  // borderBottomRightRadius:20,
      }} >

<Text style={{
      color:"gray",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} >Subtotal</Text>

      <Text style={{
      color:"gray",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} >${
        route.params?.store_rout?.rate_per_night +
        route.params?. store_rout?.cleaning_fee +
        route.params?. store_rout?.security_deposit
}</Text>
    

   </View>
   <View style={{
      width:"100%",
      height:'25%',
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",

  borderRadius:10,
  borderBottomWidth:0.5
  // borderBottomLeftRadius:20,
  // borderBottomRightRadius:20,
      }} >

<Text style={{
      color:"gray",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} >Total</Text>

      <Text style={{
      color:"gray",
      fontSize:Dimensions.get("screen").width / 26,
      fontWeight:"bold",
      margin:9
      }} > ${
              route.params?.store_rout?.rate_per_night +
              route.params?. store_rout?.cleaning_fee +
              route.params?. store_rout?.security_deposit
      }</Text>
    

   </View>

   </View>

    
    <TouchableOpacity  
    onPress={()=>{setopen_modal({open_modals: true})}}
    style={{
      width:"85%",
      height:"15%",
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:2,
      // borderColor:blue_color,
      backgroundColor:blue_color,
      borderRadius:7
 }}
    >
    <Text style={{color:"white",fontWeight:"900"}}>CHECK OUT</Text>
    </TouchableOpacity>
  </View>
  </View>
  <Modal 
          // animationType="slide"
          transparent visible={open_modal.open_modals}  
           
           onRequestClose={()=>{ setopen_modal({open_modals: false});}}
          
          >
            <ScrollView   showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <TouchableOpacity
                style={{width: '100%', height:Dimensions.get("screen").height/5,
              justifyContent:"center",
              alignItems:"center",
              }}
                onPress={() => {
                  setopen_modal({open_modals: false})
                  
                }}>
                  { loder ? 
                  <ActivityIndicator size="large" color="#ffffff" />:null

                  }
             

              </TouchableOpacity>

              {/* <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
          // onPointerCancel
          
        /> */}
              <Animatable.View
                style={{
                  width: '100%',
                  height:Dimensions.get("screen").height/1.4,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  // borderWidth:1,
                  backgroundColor:"white"
                }}
                animation="fadeInUpBig"
                //  itesrationCount={5}
                direction="alternate"
                easing="ease-out">
                  
                <View
                  style={{
                    width: '100%',
                    height: Dimensions.get("screen").height/1,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    alignItems: 'center',
                    // borderWidth:1,
                    backgroundColor:"white"
                  }}>
                 
                 
              <>

<View
                    style={{
                      width: '90%',
                      height: 50,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      justifyContent: 'center',
                      flexDirection:"row",
                      justifyContent:"center",
                      alignItems:"center",
                      justifyContent:"space-between",
                      // borderWidth:1
                    }}>
                   
                    <TouchableOpacity  onPress={()=>{setopen_modal({open_modals: false})}}>
                    {/* <Text   style={{
                        color: 'green',
                        fontSize:18,
                        fontWeight: 'bold',
                      }} >Cancel</Text> */}
                           <Iconcrous
  name="circle-with-cross"
  color={'gray'}
  size={ Dimensions.get("screen").width / 15}
 
  // onPress={()=>{navigation.goBack()}
/>
                      
                      </TouchableOpacity>
                  </View>
                

                
                <ScrollView
                  contentContainerStyle={{height: Dimensions.get("screen").height/1, width: '100%',
                   jalignItems:"center"
                }}
                  showsVerticalScrollIndicator={false}
                  >
                    <TouchableOpacity
                       style={{alignSelf: 'flex-end',
                      //  borderWidth:1,
                       height:'3%',width: Dimensions.get("window").width/1.1,}}
                       >
                  <Text style={{
                    color:"black",
                    fontWeight:"bold",
                    // margin:

                }}>Pay Select Using</Text>
                  </TouchableOpacity>
                  <View style={{height: '62%', width: Dimensions.get('window').width/1,}}>
                    <View
                      style={{
                        height: '18%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // width:'100%',
                        justifyContent:"center",
                        // borderWidth:1,
                        flexDirection:"row",
                        justifyContent:"space-evenly"
                        // borderColor:"red"

                      }}>
                    { card_select.map((iten,index)=>{
                      return(
                        <>
                        <TouchableOpacity
                        onPress={() =>{setselect(index == select ? null : index)}}
                        // backgroundColor: index == select ? "#666666": "black"
                        style={{
                          height: '64%',
                          width:"30%",
                          backgroundColor:index == select ? '#eff3f1': white_color,
                          // flexDirection: 'row',
                          // alignItems: 'center',
                          justifyContent: 'space-between',
                          // width:'100%',
                          justifyContent:"center",
                          borderWidth:2,
                          borderRadius:8,
                          borderColor:index == select ? 'black': white_color,
                          shadowColor: 'black',
          shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.5,
        // shadowRadius: ,  
           elevation: 5
                        }} >
    <Iconcard
  name={iten.img}
  color={iten.color}
  size={ Dimensions.get("screen").width / 20}
  style={{margin:5}}/>
<Text style={{color: iten.color,margin:5}}>{iten.title}</Text>
                        </TouchableOpacity>

                        </>
                      )
                    })

                    }
                    </View>
                    <View style={{
                        height: '24%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width:'100%',
                        justifyContent:"center",
                        justifyContent:"space-evenly"

                      }}>
                     <View  style={{
                        height: '100%',
                        width:'90%',
                        justifyContent:"center",
                        justifyContent:"space-evenly"

                      }}>
                        <Text style={{
                    color:"black",
                    fontWeight:"bold",
                    // margin:
                }}>Pay Select Using</Text>
                   <CardField
    postalCodeEnabled={true}
    placeholders={{
      number: '4242 4242 4242 4242',
    }}
    
    cardStyle={{
      backgroundColor:'#afb1b0',
      textColor: 'black',
      borderColor:'gray',
      borderWidth:2,
      borderRadius:5,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      // shadowRadius: ,  
      elevation: 5,
      shadowColor:"black"
    }}
    style={{
      width: '100%',
      height: Dimensions.get("screen").height/10,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      // shadowRadius: ,  
      elevation: 5,
      shadowColor:"black"
      // borderWidth:1,
      // borderColor:"red"
      
      // marginVertical: 30,
      // borderRadius:10
    }}
    onCardChange={(cardDetails) => {
      console.log('cardDetails', cardDetails);
    }}
    onFocus={(focusedField) => {
      console.log('focusField', focusedField);
    }}
  />

                     </View>

                    </View>

                    <View style={{
                        height: '24%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width:'100%',
                        justifyContent:"center",
                        justifyContent:"space-evenly",
                        // borderWidth:1


                      }}>
                     <View  style={{
                        height: '100%',
                        width:'90%',
                        justifyContent:"center",
                        justifyContent:"space-evenly",
                        
                        // borderWidth:1

                      }}>
                        <Text style={{
                    color:"black",
                    fontWeight:"bold",
                    // margin:
                }}>Country Of Region</Text>
                 <View style={{
                        height: '70%',
                        width:'100%',
                        justifyContent:"center",
                        justifyContent:"space-between",
                        // borderWidth:1
                        // shadowColor: 'black',
                        shadowOffset: { width: 1, height: 1 },
                          shadowOpacity: 0.5,
                      // shadowRadius: ,  
                         elevation: 8,
                         backgroundColor:"white",
                         borderRadius:5

                      }}>
                        <View style={{
                        height: '50%',
                        width:'100%',
                        justifyContent:"center",
                        justifyContent:"space-between",
                        // borderWidth:1,
                        flexDirection:"row",
                        alignItems:"center"

                      }}>
                          <Text style={{
                    color:"gray",
                    fontWeight:"bold",
                    margin:7
                }}>United State</Text>

<Iconcon
  name={'state-machine'}
  color={'red'}
  size={ Dimensions.get("screen").width / 18}
  style={{ margin:7}}
  />

                        </View>
                        <View style={{
                        height: '50%',
                        width:'100%',
                        justifyContent:"center",
                        justifyContent:'space-between',
                        flexDirection:"row",
                        alignItems:"center",
                        // borderWidth:1

                      }}>
                            <Text style={{
                    color:"gray",
                    fontWeight:"bold",
                    // margin:
                    margin:7
                }}>Total</Text>
                      <Text style={{
                    color:"gray",
                    fontWeight:"bold",
                    // margin:
                    margin:7
                }}>70.00$</Text>

                        </View>
                 </View>
                     </View>
                    </View>
                     <View style={{
                        height: '11%',
                        width:'100%',
                        justifyContent:"center",
                        // justifyContent:'space-between',
                        // flexDirection:"row",
                        alignItems:"center",
                        // borderWidth:1

                      }}>
                        <View style={{width:"90%",height:"50%",
//  borderWidth:1,
//  borderColor:white_color,
justifyContent:"center",flexDirection:"row",alignItems:"center",
justifyContent:"flex-start"}}>
    <TouchableOpacity
    onPress={()=>{
        if(!icc){
            seticc(true)
            setdesible(false)
            // setdisible(false)
        }else{
            seticc(false)
            setdesible(true)
            // setdisible(true)
        }
    }}
    style={{width:20,height:20,borderWidth:1,borderColor:'black'
    ,alignItems:"center",
    justifyContent:"center",
    borderRadius:4}}>
        {  icc?
               <Icondone name= 'done'
               // onPress={() => {setcounter(counter - 5)}}
               size={18} color="black"  />:null
        }
   {/* <Icondone name= { icc ? 'done':''}
// onPress={() => {setcounter(counter - 5)}}
size={18} color="white"  /> */}
    </TouchableOpacity>
    <Text style={{
      color:'gray',
      marginLeft:20
      }}>Save this crad for future flex rental payment</Text>
 </View>

                     </View>
                     <View style={{
                      width:"100%",
                      height:"20%",
                      // borderWidth:1,
                      justifyContent:"center",
                      alignItems:"center",
                       }}>
                        <TouchableOpacity
                        onPress={()=>{ wait_loder()}}
                        disabled={desible}
                        style={{
                      width:"90%",
                      height:"50%",
                      // borderWidth:1,
                      justifyContent:"center",
                      alignItems:"center",
                      backgroundColor:desible ?  '#afb1b0':"black",
                      borderRadius:9
                       }} >
                        <Text style={{
                          color:'#eff1f0',
                          fontWeight:"bold",
                          fontSize:17
                        }}>Pay ${
                           route.params?.store_rout?.rate_per_night +
                           route.params?. store_rout?.cleaning_fee +
                           route.params?. store_rout?.security_deposit
                        }.00</Text>

                        </TouchableOpacity>
                      
                     </View>
                  </View>
                </ScrollView>
              </>
              
                                  
                </View>
              </Animatable.View>
            </View>
            </ScrollView>
          </Modal>
          <Modal 
          animationType="slide"
          transparent visible={open_modal_2.open_modals_2}  
           
           onRequestClose={()=>{ setopen_modal_2({open_modals_2: false});}}
          
          >
            <View style={{width:"100%",height:'100%',justifyContent:"center",alignItems:"center"}}>
     <FastImage
           style={{width:"90%",height:"40%",borderTopLeftRadius:20,borderTopRightRadius:20}}
           source={require(
            "../assets/7efs.gif"
            )}
        />

            </View>
          </Modal>

  </ScrollView>
);
}
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
export default Payment_screen






// stripe link npm 

// https://github.com/stripe/stripe-react-native