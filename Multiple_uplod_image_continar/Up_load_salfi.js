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
  import React, {useState, useEffect, useRef, useCallback} from 'react';
  import Iconfile from 'react-native-vector-icons/FontAwesome';
  import Iconpng from 'react-native-vector-icons/MaterialCommunityIcons';
  import {blue_color, white_color} from '../Constants_continar/Constant.js';
  import {connect} from 'react-redux';
  import {useSelector} from 'react-redux';
  import {removeUser,removeImage} from '../Main_Ridux/redux/actions/Authacion';
  import { BlurView } from "@react-native-community/blur";
  import DocumentPicker, { types } from 'react-native-document-picker';
  import Iconright from 'react-native-vector-icons/Entypo';




const Up_load_salfi = ({navigation,...props}) => {


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
      const [open_modal, setopen_modal] = useState({open_modal_view: false});
      const [disible,setdisible]=useState(true)

  const [fileResponse, setFileResponse] = useState([]);
  

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
      console.log(response,'res.fffffile.////////////////')
      setdisible(false)
    } catch (err) {
      console.log(err);
    }
  }, []);

  



    // useEffect(() => {
    //     if (image_get_redux) {
    //       setsave(true);
    //     } else {
    //       setsave(false);
    //     }
    //   });


      

    return(

        <View style={{height:"100%",width:"100%",backgroundColor:"black",alignItems:"center"}}>

        <View style={{height:"30%",width:"100%",backgroundColor:"black"
        ,alignItems:"center",justifyContent:"center",
        // borderWidth:1,borderColor:white_color
        }} >
            {/* <Text style={{fontWeight:"bold",color:white_color,margin:8,fontSize:16}} >Show Your Guest What Your Place Look Like !</Text> */}

            <Text style={{fontWeight:"bold",color:white_color,fontSize:Dimensions.get("screen").height/35,}}>Identity</Text>
         
             
             <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/56,
             margin:10,fontWeight:"900"}}>Upload Your Front, Back And Selfie With Your Id Card</Text>
         
          </View>    
            
          <View 
          
          style={{height:"55%",width:"90%",backgroundColor:"black"
        ,alignItems:"center"
        ,justifyContent:"center",
        // borderWidth:1,borderColor:white_color,
        justifyContent:"space-around"
        }}>
        
        <View style={{height:"20%",width:"100%",backgroundColor:"black",
        // ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:white_color,
        justifyContent:"space-around"
        }} >

<Text style={{fontWeight:"bold",color:white_color,
           fontSize:17,textDecorationLine:"underline"
}}>Accepted Files</Text>
 {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
<Text style={{fontWeight:"bold",color:white_color,
   fontSize:17,textDecorationLine:"underline"
}}>Rejected Files</Text>
 {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
   
        </View>
   
      <View style={{height:"18%",width:"100%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:white_color,
        justifyContent:"space-around",
        // backgroundColor:blue_color,
        borderRadius:7,
        flexDirection:"row"
        }}>
       
        <TouchableOpacity
        onPress={()=>{handleDocumentSelection()}}
        style={{height:"70%",width:"40%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor:white_color,
        justifyContent:"space-around",
        backgroundColor:blue_color,
        borderRadius:7,
        flexDirection:"row"
        }}>
 <Text style={{fontWeight:"bold",color:white_color}}> Select files</Text>
 <Iconfile name= 'file'
size={23} color="white"  /> 
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{handleDocumentSelection()}}
        style={{height:"70%",width:"40%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        borderWidth:1,borderColor:white_color,
        justifyContent:"space-around",
        backgroundColor:blue_color,
        borderRadius:7,
        flexDirection:"row"
        }}>
<Text style={{fontWeight:"bold",color:white_color}}> Select images</Text>
<Iconpng name= 'file-jpg-box'
size={35} color="white"  /> 

        </TouchableOpacity>
        </View>
        <View        style={{height:"15%",width:"80%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        justifyContent:"space-between",
        // backgroundColor: disible ? 'gray': blue_color,
        borderRadius:7,
        flexDirection:"row",
        // margin:110
        }}>
            <TouchableOpacity
        // disabled={disible}
         onPress={()=>{navigation.navigate("Profile_main")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-start",
        flexDirection:"row",
        backgroundColor: blue_color,
        borderRadius:7,
        }}>
<Iconright name= 'arrow-with-circle-left'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={45} color={"white"}  /> 
        </TouchableOpacity>

       
        <TouchableOpacity
        disabled={disible}
         onPress={()=>{navigation.navigate("Date_show")}}
        style={{height:"85%",width:"25%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:  white_color,
        // justifyContent:"flex-end",
        flexDirection:"row",
        backgroundColor: disible ? 'gray': blue_color,
        borderRadius:7,
        }}>
<Iconright name= 'arrow-with-circle-right'
        //    onPress={() => {setcounter_1(counter_1 + 5)}}
size={45} color={ "white"}  /> 
        </TouchableOpacity>
        </View>
      

          </View>
         

            {/* M O D A L ... U S E R .. I M A G E .. V I E W */}
{/* 
            <Modal 
          // animationType="fade"
          transparent visible={open_modal.open_modal_view}  
           
           onRequestClose={()=>{ setopen_modal({open_modal_view: false});}}
          
          >
 <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
          // onPointerCancel
          
        />
            <Pressable
            onPress={()=>{setopen_modal({open_modal_view:false})}}
            style={{flex:1,justifyContent:"center",alignItems:"center"}}>
           <View style={{width:Dimensions.get("window").width/1,height:"40%"}}>
           {image_get_redux ? 
            <Image
              resizeMode="center"
              // source={images}
              source={{

                uri: `https://flexrental.developer-um.xyz/storage/${image_get_redux?.user[0]?.image}`,

              }}
              style={{width: '100%', height: '100%'}}
            />:
          <Image    
      resizeMode="contain"
      source={{uri:`https://flexrental.developer-hi.xyz/static/media/hotel.b7bebb584278cf86200a.jpg`}}
      style={{width:"100%",height:"100%",}}
      />
      }

           </View>
            </Pressable>
            
          </Modal> */}
         
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
    // removeUser,
    // removeImage
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Up_load_salfi);