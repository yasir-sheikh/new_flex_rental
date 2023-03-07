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




const Multiple_upload_image = ({navigation,...props}) => {


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
      const res = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.images],
          allowMultiSelection: true
      })
console.log('res==========',res);
setFileResponse(res)
      // setDoc///(res)
      for (let a = 0; a <= res.length; a++) {
        
          // const res_obj =[{uri:res[a],name:res[a],type:res[a] }]
          const obj = {
            name: res[a].fileName,
            uri: res[a].uri,
            type: res[a].type,
          };
          // setFileResponse(res[a])
          setdisible(false)
          console.log(res[a].uri, res[a].name, res[a].type,'////////////')
          console.log(obj,'objjjjjjjjjjjjj')
      }
  } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
          // console.log('error====>>>',error)
      }
  }
    // try {
    //   const response = await DocumentPicker.pick({
    //     presentationStyle: 'fullScreen',
    //     allowMultiSelection: true,

    //   });
    //   setFileResponse(response);
    //   console.log(response[0].name,'res.fffffile.////////////////')
    //   setdisible(false)
    // } catch (err) {
    //   console.log(err);
    // }
  }, []);
  
 


      

    return(

        <View style={{height:"100%",width:"100%",backgroundColor:"black",alignItems:"center"}}>

        <View style={{height:"45%",width:"100%",backgroundColor:"black"
        ,alignItems:"center",justifyContent:"center",
        // borderWidth:1,borderColor:white_color
        }} >
            <Text style={{fontWeight:"bold",color:white_color,margin:8,fontSize:16}} >Show Your Guest What Your Place Look Like !</Text>

            <Text style={{fontWeight:"bold",color:white_color}}>Cover Photos</Text>
          <Pressable
           onPress={()=>{setopen_modal({open_modal_view:true})}}
          style={{height:180,width:180,borderWidth:3,alignItems:"center",borderRadius:100,margin:10,borderColor:"#ffffff"}} >
          {/* {fileResponse? 
            <Image
              resizeMode='cover'
              // source={images}
              source={{

                uri:fileResponse,

              }}
              style={{width: '100%', height: '100%', borderRadius: 100}}
            />: */}
          <Image    
      resizeMode="contain"
      source={{uri:`https://flexrental.developer-hi.xyz/static/media/hotel.b7bebb584278cf86200a.jpg`}}
      style={{width:"100%",height:"100%",borderRadius:100}}
      />
      {/* } */}
          </Pressable>
          { image_get_redux ?
             <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/40,
             margin:10,fontWeight:"900"}}>Personal User Profile</Text>:
             <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/40,
             margin:10,fontWeight:"900"}}>Upload Upto 10 Photos</Text>
          }
         
          </View>    

          {/* {  fileResponse.map((item,index)=>{
          
          console.log(item,'iiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
            return(
              <>
              </>
            )
          })

          } */}
            
          <View 
          
          style={{height:"55%",width:"90%",backgroundColor:"black"
        ,alignItems:"center"
        ,justifyContent:"center",
        // borderWidth:1,borderColor:white_color,
        justifyContent:"space-evenly"
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
 {/* {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))} */}
<Text style={{fontWeight:"bold",color:white_color,
   fontSize:17,textDecorationLine:"underline"
}}>Rejected Files</Text>
 {/* {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))} */}
   
        </View>
      <View  style={{height:"15%",width:"100%",backgroundColor:"black"
        ,alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,borderColor:white_color,
        justifyContent:"space-around",
        // backgroundColor:blue_color,
        borderRadius:7,
        flexDirection:"row"
        }} >
       
        <TouchableOpacity
        onPress={()=>{handleDocumentSelection()}}
        style={{height:"72%",width:"40%",backgroundColor:"black"
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
        style={{height:"72%",width:"40%",backgroundColor:"black"
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
           <TouchableOpacity
        disabled={disible}
        //  onPress={()=>{navigation.navigate("Tittle")}}
        onPress={()=>{navigation.navigate("Imageview2",{fileResponse})}}
        style={{height:"15%",width:"40%",
        alignItems:"center",
        justifyContent:"center",
        justifyContent:"space-around",
        borderRadius:7
        }}>
<Iconright name= 'arrow-with-circle-right'
size={55} color={ disible ? 'gray' : "white"}  /> 
        </TouchableOpacity>
         {/* <ScrollView contentContainerStyle={{width:300}}>
          
            {fileResponse?fileResponse.map((val,ind)=>{

              return(
          <View style={{width:300,height:200,borderWidth:1,}}>

                  <Image
                      resizeMode='cover'
                      // source={images}
                      source={{
        
                        uri:val.uri,
        
                      }}
                      style={{width: '100%', height: '100%', borderRadius: 100}}
                    />
                    </View>
              )
            }):null}

         </ScrollView> */}

          </View>
         

            {/* M O D A L ... U S E R .. I M A G E .. V I E W */}

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
          
          <Image    
      resizeMode="contain"
      source={{uri:`https://flexrental.developer-hi.xyz/static/media/hotel.b7bebb584278cf86200a.jpg`}}
      style={{width:"100%",height:"100%",}}
      />
      

           </View>
            </Pressable>
            
          </Modal>
         
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
  export default connect(mapStateToProps,mapDispatchToProps) (Multiple_upload_image);







