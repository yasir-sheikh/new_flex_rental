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
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {useSelector} from 'react-redux';
  import * as Animatable from 'react-native-animatable';
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';
  import { BlurView } from "@react-native-community/blur";




const Profile_main = ({navigation,...props}) => {


   const All_data_response_user = useSelector(state => state.authReducer.user);
  

  const image_get_redux = useSelector(state => state.authReducer.redux_image);
  // console.log(image_get_redux,'reduxx resssssssss////////////////.........')

    const logout = () => {
      setloder(true)
      setTimeout(() => {
        props.removeUser();
      },2000);
        console.log('logOut');
        
        
      };
      const [date, setDate] = useState(new Date());
      const [open, setOpen] = useState(false);
      const [open_modal, setopen_modal] = useState({open_modal_view: false});
      const [Filterdata, setFilterdatar] = useState([]);
      const [Masterdata, setMasterdata] = useState([]);
      const [Search, setSearch] = useState('');
      const [loder, setloder] = useState(false);
      const [save_image_type,setsave_image_type]=useState([])
      const [celender,setcelender]=useState(false)
      const [selected,setSelected]=useState("")
      const [selectedStartDate, setSelectedStartDate] = useState(null);
      const [selectedEndDate, setSelectedEndDate] = useState(null);
      const [searched_Data,set_search_data]=useState(null)
      const [save,setsave]=useState(false)


  const dispatch_1 = useDispatch();
    const save_image_redux = () => {
        var options = {
          storageOptions: {
            path: 'image',
            mediaType: 'photo',
          },
          incluedeBass64: true,
        };
    
        launchImageLibrary(options, res => {
          console.log(res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            let source = res;
            // console.log("I am image",source?.assets[0].uri)
            // setsaveimage(source?.assets[0].uri)
            const obj = {
              name: source.assets[0].fileName,
              uri: source.assets[0].uri,
              type: source.assets[0].type,
            };
    
            profiles(obj)
          }
        });
      };
    
      // console.log(save_image_type.name,'.................');
    
      const profiles = (obj) => {
        setwaitetin_loder(true)
        console.log('helooooo',obj)
        const formData = new FormData();
        formData.append('email', All_data_response_user.user.email);
        formData.append('first_name', All_data_response_user.user.first_name);
        formData.append('last_name', All_data_response_user.user.last_name);
        formData.append('phone', All_data_response_user.user.phone);
        formData.append('image', obj);
        formData.append('role', 'customer');
        console.log('formdata=======',formData)
        fetch(`https://flexrental.developer-um.xyz/api/profile/update`, {
          method: 'POST',
          // mode: 'no-cors',
    
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
            Authorization: `Bearer ${All_data_response_user.token}`,
          },
    
          body: formData,
        })
          .then(Response => Response.json())
          // setdata_save( Response.json())
          .then(json => {
            console.log('image.........................', json);
            dispatch_1(image_redux(json));
          setwaitetin_loder(false)
    
           
            if ((message = 'Unauthenticated.')) {
              console.log(message, '////////');
            }
          })
          .catch(e => {
            console.log(e, 'eeeeeeeeeeeeeeee');
          });
      };


    const [waitetin_loder, setwaitetin_loder] = useState(false);

    useEffect(() => {
        if (image_get_redux) {
          setsave(true);
        } else {
          setsave(false);
        }
      });


      

    return(

    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: blue_color,
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: "black",
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth:1
        }}>
          <View style={{
            width:"100%",
            height:"38%",
            borderWidth:1,
            alignItems: 'center',
            justifyContent: 'center',
        
        }}>
      
          <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"90%",height:"70%"}}
    />

          </View>
        <View
          style={{
            height:"40%" ,
            width: "95%",
            // borderWidth: 3,
            alignItems: 'center',
            // borderRadius: 100,
            // margin: 10,
            borderColor: white_color,
            justifyContent:"center",
            // borderWidth:1,
            flexDirection:"row",
            justifyContent:"flex-start"
          }}>
            <TouchableOpacity 
              onPress={() => {
            save_image_redux()
          }}
          style={{
            height:110,
            width: 110,
            borderWidth: 3,
            alignItems: 'center',
            borderRadius: 100,
            // margin: 10,
            borderColor: white_color,
            justifyContent:"center",
            // borderWidth:1
          }}
            
            
            >
          {image_get_redux ? 
            <Image
              resizeMode='cover'
              // source={images}
              source={{

                uri: `https://flexrental.developer-um.xyz/storage/${image_get_redux?.user[0]?.image}`,

              }}
              style={{width: '100%', height: '100%', borderRadius: 100}}
            />
           : waitetin_loder ?
           <ActivityIndicator size="large" color="#ffffff" />: <Image
            resizeMode="contain"
            source={require('../assets/my_profile_image.jpg')}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
          }
          </TouchableOpacity>
         <Text  style={{
          fontSize:Dimensions.get("screen").height/38,
         margin:25,
         fontWeight:"bold",
         color:white_color

        
        }}>First Name,s profile</Text>
        </View>
        <TouchableOpacity 
        
        style={{width:"95%",height:'22%',
         justifyContent:"center"
      }}
        
        onPress={()=>{props.removeImage()}}>
          { save ? <Text   
          style={{
            color: '#ffffff',
            fontSize: Dimensions.get('screen').height / 42,
            // margin: 10,
            fontWeight: '900',
          }}>
          Profile  Remove
        </Text>:  <Text   
          style={{
            color: '#ffffff',
            fontSize: Dimensions.get('screen').height / 42,
            // margin: 10,
            fontWeight: '900',
          }}>
          Upload Profile
        </Text>
        
        
        
        }
      
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent:"space-evenly"
          // borderWidth:1
        }}>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Personal_infoo')}}>
          <Text style={{
            color:white_color,
           fontSize:Dimensions.get("screen").height/50,
           fontWeight:"bold"
          
          }} >Personal Information</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Hosting")}}>
          <Text style={{color:white_color,
            fontSize:Dimensions.get("screen").height/45,
            fontWeight:"bold"
          }} >Switch To Hosting</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity  onPress={()=>{navigation.navigate("Try_host")}}>

          <Text style={{
            color:white_color,
            fontSize:Dimensions.get("screen").height/50,
            fontWeight:"bold"
          }} >Won to become a Host? Click Here</Text>
            </TouchableOpacity>

        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
          <Text style={
            {color:white_color,
              fontSize:Dimensions.get("screen").height/50,
              fontWeight:"bold"
          }} >Post Trips</Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
          <Text style={{
            color:white_color,
            fontSize:Dimensions.get("screen").height/50,
           fontWeight:"bold"
          }} >Thrms and Condition/Privacy Polacy</Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '95%',
            // alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>
            <TouchableOpacity onPress={()=>{setopen_modal({open_modal_view:true})}}>
            <Text style={{
            color:white_color,
            fontSize:Dimensions.get("screen").height/50,
            fontWeight:"bold"
          }} >Delete Your Account</Text>
            </TouchableOpacity>
    
        </View>
        <View
          style={{
            height: '20%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            // borderColor: white_color,
            borderWidth:1
          }}>

              <TouchableOpacity 
              onPress={()=>{navigation.navigate('Flatlist2')}}
              style={{
                height: '65%',
                width: '60%',
                backgroundColor: blue_color,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: white_color,
                borderWidth:2,
                borderRadius:9
              }}>
             <Text style={{color:white_color,fontWeight:"bold",fontSize:15}} >Shearch For Flexrental</Text>
              </TouchableOpacity>

        </View>

  {/* M O D A L ... A C C O U N T ... D E L E T E */}

  <Modal 
          animationType="fade"
          transparent visible={open_modal.open_modal_view}  
           
          //  onRequestClose={()=>{ setopen_modal({open_modal_view: false})}}
          
          >
    <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
          // onPointerCancel
          
        />
            <Pressable
            // onPress={()=>{setopen_modal({open_modal_view:false})}}
            style={{flex:1,justifyContent:"center",alignItems:"center"}}>
           <View
              // animation='bounceInRight'
              //  itesrationCount={5}
           
           
           style={{width:'80%',height:"10%",
           backgroundColor:"white",borderRadius:20,
           justifyContent:"center",alignItems:"center",justifyContent:"space-evenly"}}>
            
            { loder ?
               <ActivityIndicator size={25} color="black"/>:
          <Text style={{color:"black",fontWeight:"900"}}>DELETE ACCOUNT ?</Text>

            }
          
          <Text style={{color:"#eb144c",fontWeight:"900"}} onPress={()=>{logout()}}>CONFROM DELETE      <Text style={{color:"black",fontWeight:"900"}} onPress={()=>{ setopen_modal({open_modal_view: false})}} >CANCEL</Text> </Text>

           </View>
            </Pressable>
            
          </Modal>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
 absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
 
});
   

  const mapStateToProps = (state) => ({

    // inventory: state.userReducer.inventory,
    // data: state.authReducer,
  
    // user: state.user.details.user
  })
  const mapDispatchToProps = {
    removeUser,
    removeImage
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Profile_main);