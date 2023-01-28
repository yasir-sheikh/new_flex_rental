
import { View ,Text,Image, TextInput,FlatList,StyleSheet,ScrollView,
  Keyboard, ImageBackground, TouchableOpacity,Modal,Pressable,Button,Dimensions, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React,{useState,useEffect,useRef} from 'react';
import Icond from 'react-native-vector-icons/Ionicons';
import Iconh from 'react-native-vector-icons/Feather';
import Iconc from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconacount from 'react-native-vector-icons/MaterialCommunityIcons';
import Icondrop from 'react-native-vector-icons/AntDesign';
import Iconfont from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux"
import { removeUser } from '../Main_Ridux/redux/actions/Authacion';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import DrawerLayout from 'react-native-drawer-layout'
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary,remove,} from 'react-native-image-picker';
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
import {useSelector} from "react-redux"




const Flatlist2 =(props)=>{


  const All_data_response_user=useSelector(state => state.authReducer.user);
   
  console.log(All_data_response_user,'..................homeeeeeee.......////')
   

  const logout=()=>{
    console.log("logOut")
    props.removeUser()
    
    }


    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [open_modal,setopen_modal]=useState({open_modals:false})
    const [Filterdata,setFilterdatar]=useState([])
    const [Masterdata,setMasterdata]=useState([])
    const [Search,setSearch]=useState("")
    const [loder,setloder]=useState(true)


    const countries = [1, 2, 3, 4,5,6,7]



    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
      
  
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
          
        },
      );
      // if (! isKeyboardVisible) {
      //   // setanimate("fadeOut")
      //   setKeyboardVisible(false)
      //   // setalternate(1)
      // } else {
      //   // setanimate("fadeInLeft")
      // }
      
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [props]);
  

    const [helo,sethelo]=useState('')
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
         const res = data.listnings;
         sethelo(res)

          console.log(
            'LISTINING DATA USE EFFECT IN "home_screen_1.js ',
            res
          );
          // SetListinig_data(res)
        } catch (error) {
          console.log('Error happened here!');
          console.error(error);
        }
      });
    }, []);



    // const [selected,setSelected]=useState("")

    const apibutn=()=>{
        // setUserApiloder(false)


        





        setloder(true)
        const getapi = ("https://fakestoreapi.com/products")
        
        fetch(getapi)
       
        .then((response)=>response.json())
        
        .then((responsejson)=>{
          setloder(true)
            // console.log(responsejson)
            setFilterdatar(responsejson)
            setMasterdata(responsejson)
            setloder(false)
        })
         .catch((error)=>
          setloder(true)
        //  console.error(error)
         )
      }
      const Searchfilter =(text)=>{
        if(text){
          const NewData= Masterdata.filter((item)=>{
            const itemdata= item.title
            ? item.title.toUpperCase()
            : "".toUpperCase()
            const Textdata = text.toUpperCase()
            return itemdata.indexOf(Textdata)>-1;
          
          })
          setFilterdatar(NewData);
          setSearch(text)
        }
        else{
            // setFilterdatar(newData);
            // console.log(newData)
            setSearch(text)
        }
    
       
      } 

      useEffect(()=>{
        apibutn()
        return()=>{
    
        }
    },[])


   

      const ItemView=({item})=>{

        console.log(item.cover_photo,".................")
        return(
          <>
          <View style={{ height:Dimensions.get("screen").height/2.3, width:"100%", borderWidth:1,alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"black"
      //  backgroundColor: 'white',
      // borderRadius:20
    }}>
         
         <View style={{ height:Dimensions.get("screen").height/4.2, width:Dimensions.get("window").width/1.3, borderWidth:1,alignItems: 'center',borderRadius:10}} >
         <Image    
    resizeMode="cover"
    // source={images}
    source={{uri:`https://flexrental.developer-um.xyz/storage/${item.cover_photo}`}}
    // require("../assets/room.png")
    style={{width:"100%",height:"100%",borderRadius:10}}
    />
          
           
         </View>
         <View style={{ height:"45%", width:"90%", borderWidth:1,alignItems: 'center',justifyContent:"center",backgroundColor:"black"}} >
          <Text style={{color:"white",fontWeight:"bold",fontSize:Dimensions.get("screen").height/50}}>I want to sell my house </Text>
          <Text style={{color:"#00bfff",fontWeight:"bold",fontSize:Dimensions.get("screen").height/50}}>$30/Night </Text>
          <Text style={{color:"gray",fontWeight:"bold",fontSize:Dimensions.get("screen").height/70}}>Karachi pakistan</Text>
         
         <TouchableOpacity
         onPress={()=>{props.navigation.navigate("Imageview2",{item})}}
          style={{width:"48%",height:"27%",backgroundColor:"#00bfff",margin:7,borderRadius:9,
        justifyContent:"center",alignItems:"center"
        }}>
         <Text style={{color:"#ffffff",fontWeight:"bold",fontSize:Dimensions.get("screen").height/60}}>more information </Text>
         </TouchableOpacity>

</View>
  
        
{/*          
         <Pressable  style={{width:"100%",height:200,alignItems:"center",borderRadius:40,justifyContent:"space-between",
              shadowColor: '#000',
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.8,
              shadowRadius: 2,  
              elevation: 5
        }}
         
         onPress={()=>{props.navigation.navigate("Imageview2")}}
         
         >
          <ImageBackground
                  style={{width:"100%",height:200,alignItems:"center",borderRadius:40,justifyContent:"space-between",
                
                }}
                  imageStyle={{ borderRadius: 10,
               
                  }}
                  resizeMode="stretch"
                  source={
                  images
                    // uri: item.image
                  }
                  >


       <View     style={{width:"100%",height:50,justifyContent:"center",alignItems:"center"}}>


        <View style={{width:"90%",height:"60%",flexDirection:"row",justifyContent:"center",alignItems:"center",justifyContent:"space-between"}} >
        <View  style={{width:"30%",height:"85%",justifyContent:"center",alignItems:"center",borderRadius:10,backgroundColor:"rgba(0,0,0,0.4)"}}>

          <Text style={{fontSize:11,color:"white",fontWeight:"600"}}>20 km away</Text>
        </View>

        <View  style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
          

        <Icondil name="hearto" size={20} color="white" />


      
        </View>

        </View>
      
        
         </View>
       

       <View style={{width:"90%",height:40,justifyContent:"center",alignItems:"center",justifyContent:"flex-end",flexDirection:"row",top:"3%"}}>

    
       <Pressable  style={{width:"13%",height:36,
       justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:30,
          }}
          onPress={()=>{props.navigation.navigate("Map")}}
          
          >
       <View   style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
      
      
      
      }}>

       <Image 
       
       resizeMode="contain"
       // source={images}
       source={require("../assets/maps.png")}
       style={{width:"70%",height:"60%"}}
       
       
       />
   
         
       </View>
       </Pressable>

       </View>

                  </ImageBackground>
                  </Pressable>
               
  
  <View     style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center",}}> 

  <View  style={{width:"100%",height:"40%",justifyContent:"center",alignItems:"center",flexDirection:"row"}} >
   
   <View style={{width:"50%",height:"78%",justifyContent:"center"}} >

    <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Studio Appartment</Text>

   </View>
   <View style={{width:"50%",height:"78%",justifyContent:"center",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}} >
     

   <Text   style={{color:"#00bfff",fontSize:16,fontWeight:"bold"}}>$120/per Night</Text>

   </View>



  </View>
  <View  style={{width:"100%",height:"31%",justifyContent:"center",}} >
<TouchableOpacity  onPress={()=>{logout()}}>
    <Text   style={{fontSize:11}} >Ontario, Canada</Text>
    </TouchableOpacity>
  </View>
  <View  style={{width:"100%",height:"31%",justifyContent:"center",}} >
    <TouchableOpacity  style={{width:"55%",height:"85%",justifyContent:"center",alignItems:"center",backgroundColor:"#dee8ee",borderRadius:4}} 
    onPress={()=>{props.navigation.navigate("New")}}
   
    
     >

  <Text  style={{color:"#00bfff",fontSize:12,fontWeight:"bold"}} >3 Beds | 4 Bath |2500Sq.Ft</Text>

    </TouchableOpacity>
  </View>

  </View> */}





          </View>
          
          </>
        )
    }

    const ItemSeparaterView=(item)=>{
        return(
            <View 
            style={{height:5,width:"100%",padding:10,}}
            
           />
     
       
             
            
        )
    }
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");
    const changeDrawerPosition = () => {
      if (drawerPosition === "left") {
        setDrawerPosition("left");
      } else {
        setDrawerPosition("left");
      }
    };

    const [saveimage,setsaveimage]= useState()
    const [saveimage_2,setsaveimage_2]= useState()
    const [proimg,setproimg]=useState(true)
    const imges_profile = [{
      uri_pro:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
    }]


    // useEffect(()=>{
    //   setproimg(imges_profile)

    // })
    const filessave =()=>{

      var options = {
  
           storageOptions:{
            path :'image',
            mediaType : 'photo',
            
           },
           incluedeBass64 : true,
           
  
      }
  
         launchImageLibrary (options , res =>{
           
          console.log(res)
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            let source = res;
            console.log("I am image",source?.assets[0].uri)
            setsaveimage(source?.assets[0].uri)
          }
         })
  
  
      }

     


  
    const navigationView = () => (
      <View style={{height:"100%",width:"100%",backgroundColor:"#00bfff",alignItems:"center"}}>

      <View style={{height:"40%",width:"100%",backgroundColor:"#00bfff",alignItems:"center",justifyContent:"center"}} >
        <View style={{height:"55%",width:"55%",borderWidth:3,alignItems:"center",borderRadius:100,margin:10,borderColor:"#ffffff"}} >
        
        <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/user_profile.jpg")}
    style={{width:"100%",height:"100%",borderRadius:100}}
    />
        </View>
        <Text style={{color:"#ffffff",fontSize:Dimensions.get("screen").height/40,margin:10,fontWeight:"900"}}>Profile</Text>
        </View>    
        <View style={{height:"60%",width:"100%",backgroundColor:"#FFFFFF",alignItems:"center"}} >
        <View style={{height:"20%",width:"100%",backgroundColor:"#FFFFFF",
        alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
           <View style={{height:"45%",width:"95%",backgroundColor:"#FFFFFF",justifyContent:"center"}}>
             <Text style={{color:"black",fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Name</Text>
           </View>
           <View style={{height:"40%",width:"95%",backgroundColor:"#FFFFFF",alignItems:"center",justifyContent:"center",
          flexDirection:"row",justifyContent:"space-between"
          }}>
           <Text style={{color:"black",fontSize:Dimensions.get("screen").height/65,fontWeight:"bold"}} >{All_data_response_user.user.first_name}</Text>
           <Iconacount name="account" size={Dimensions.get("screen").height/32} color="#00bfff" />
         </View>
        </View>
        <View style={{height:"20%",width:"100%",backgroundColor:"#FFFFFF",
        alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
           <View style={{height:"45%",width:"95%",backgroundColor:"#FFFFFF",justifyContent:"center"}}>
             <Text style={{color:"black",fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Email</Text>
           </View>
           <View style={{height:"40%",width:"95%",backgroundColor:"#FFFFFF",alignItems:"center",justifyContent:"center",
          flexDirection:"row",justifyContent:"space-between"
          }}>
           <Text style={{color:"black",fontSize:Dimensions.get("screen").height/65,fontWeight:"bold"}} >{All_data_response_user.user.email}</Text>
           <Iconacount name="email" size={Dimensions.get("screen").height/35} color="#00bfff" />
         </View>
        </View>
        <View style={{height:"20%",width:"100%",backgroundColor:"#FFFFFF",
        alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
           <View style={{height:"45%",width:"95%",backgroundColor:"#FFFFFF",justifyContent:"center"}}>
             <Text style={{color:"black",fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Number</Text>
           </View>
           <View style={{height:"40%",width:"95%",backgroundColor:"#FFFFFF",alignItems:"center",justifyContent:"center",
          flexDirection:"row",justifyContent:"space-between"
          }}>
           <Text style={{color:"black",fontSize:Dimensions.get("screen").height/65,fontWeight:"bold"}} >{All_data_response_user.user.phone}</Text>
           <Iconacount name="cellphone-check" size={Dimensions.get("screen").height/35} color="#00bfff" />
         </View>
        </View>
        <View style={{height:"20%",width:"100%",backgroundColor:"#FFFFFF",
        alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
           <View style={{height:"45%",width:"95%",backgroundColor:"#FFFFFF",justifyContent:"center"}}>
             <Text style={{color:"black",fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Flex_rental</Text>
           </View>
           <View style={{height:"40%",width:"95%",backgroundColor:"#FFFFFF",alignItems:"center",justifyContent:"center",
          flexDirection:"row",justifyContent:"space-between"
          }}>
           <Text style={{color:"black",fontSize:Dimensions.get("screen").height/65,fontWeight:"bold"}} >Profile</Text>
           <Iconacount name="professional-hexagon" size={Dimensions.get("screen").height/35} color="#00bfff" />
         </View>
        </View>
        <View style={{height:"20%",width:"100%",backgroundColor:"#FFFFFF",
        alignItems:"center",justifyContent:"center",borderColor:"#00bfff"}}>
           <View style={{height:"45%",width:"95%",backgroundColor:"#FFFFFF",justifyContent:"center"}}>
             <Text style={{color:"black",fontSize:Dimensions.get("screen").height/55,fontWeight:"bold"}} >Flex_rental</Text>
           </View>
           <View style={{height:"40%",width:"95%",backgroundColor:"#FFFFFF",alignItems:"center",justifyContent:"center",
          flexDirection:"row",justifyContent:"space-between"
          }}>
            <TouchableOpacity onPress={()=>{logout()}}>
           <Text style={{color:"black",fontSize:Dimensions.get("screen").height/65,fontWeight:"bold"}} >LogOut</Text>
           </TouchableOpacity>
           <Iconacount name="logout" size={Dimensions.get("screen").height/35} color="#00bfff" />
         </View>
        </View>
        </View>      
       
      </View>
    );


return(

    <DrawerLayout 
    ref={drawer}
    drawerWidth={300}
    // drawerPosition={changeDrawerPosition}
    renderNavigationView={navigationView}  
    
    
    >
    <ScrollView  contentContainerStyle={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor: 'black',}} scrollEnabled={true}>
    <StatusBar  backgroundColor={"black"}/>
    <View  style={{width:"100%",height:"100%",backgroundColor:"black",alignItems:"center"}}>
    <View  style={{width:"92%",height:50,backgroundColor:"black",justifyContent:"center",flexDirection:"row",alignItems:"center"}} >
    
    <View style={{width:"78%",height:"100%",backgroundColor:"black",flexDirection:"row"}}>

    <View style={{width:"28%",height:"100%",backgroundColor:"black",justifyContent:"center",alignItems:"center"}} >
    <Image    
    resizeMode="contain"
    // source={images}
    source={require("../assets/new_flex_rental_icon.png")}
    style={{width:"100%",height:"100%"}}
    />
         </View>
         <View style={{width:"40%",height:"100%",backgroundColor:"black",flexDirection:"row",justifyContent:"center",alignItems:"center",}} >
      
         </View>

    </View>
    
    
    <View style={{width:"22%",height:"100%",backgroundColor:"black",justifyContent:"center",justifyContent:"flex-end",
    flexDirection:"row",alignItems:"center"}}>

        <TouchableOpacity    onPress={() => drawer.current.openDrawer()}>
        <Icondrop name="bars" size={Dimensions.get("screen").height/28} color="#00bfff" />
        
        </TouchableOpacity>

    </View>
    {/* <View style={{width:"20%",height:"90%",backgroundColor:"white",borderWidth:1,}}></View> */}

    </View>
    
     
      
   <View  style={{width:"92%",height:60,backgroundColor:"black",justifyContent:"center",alignItems:"center",}} >
   {/* <View style={{width:"100%",height:10}}> */}



{/* </View> */}
   <View style={{width:"95%",height:"63%",backgroundColor:"white",justifyContent:"center",flexDirection:"row",alignItems:"center",borderWidth:0.5,
   borderLeftColor:"black",borderRightColor:"black",borderTopColor:"black",borderRadius:5
    

}} >

   {/* <ion-icon name="locate"></ion-icon> */}
   <Icon name="my-location" size={20} color="#00bfff" />
   <View style={{width:"75%",height:Dimensions.get("screen").height/32,backgroundColor:"white",
   justifyContent:"center",borderLeftColor:"white",borderRightColor:"whit",
   borderTopColor:"white"



}} > 
     
     <TextInput    
     
     placeholder='Search'
     style={{height:35}}
     onChangeText={(text)=>Searchfilter(text)}
     />

   </View>
   <Icond name="search-outline" size={20} color="#00bfff" style={{marginRight:7}} />

   <TouchableOpacity   onPress={()=>{setopen_modal({open_modals:true})}}>
   <Iconh name="sliders" size={20} color="#00bfff" />

   </TouchableOpacity>
   
    
     </View>

   </View>

   
   <FlatList
       data={helo}
       keyExtractor={(item, index) => index.toString()}
       style={{height:100,width:320,}}
      //  style={{justifyContent:"center"}}
       ItemSeparatorComponent={ItemSeparaterView}
       renderItem={ItemView}

       />

   
      
      {! isKeyboardVisible ?
         <View style={{width:"100%",height:70,backgroundColor:"#00bfff",justifyContent:"center",alignItems:"center"}}>

            <View  style={{width:"77%",height:60,justifyContent:"center",flexDirection:"row",justifyContent:"space-between",}}>
            
            <View  style={{width:56,height:56,borderWidth:2,borderRadius:100,borderColor:"white",justifyContent:"center",alignItems:"center"}}> 
            

           
            <Iconh name="home" size={32} color="white" />
            {/* <Text>DGTDGTTD</Text> */}

            
             </View>
             <View style={{width:"37%",height:"100%",}}>
{
  loder ?
  <SkypeIndicator    color='white' size={40} />:loder
}
</View>
            <View  style={{width:56,height:56,borderRadius:100,justifyContent:"center",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}> 
            
            
            <Iconc name="account-outline" size={45} color="white" />

          
            
            </View>

            </View>

         </View>
         
         :null


      } 


<Modal  transparent  visible={open_modal.open_modals}  >

  <View  style={{flex:1,backgroundColor:"rgba(0,0,0,0.7)"}}>

<TouchableOpacity style={{width:"100%",height:"45%",}}  onPress={()=>{setopen_modal({open_modals:false})}} >
  <View style={{width:"100%",height:"45%",}}>

  </View>
  </TouchableOpacity>
  <Animatable.View

// 'normal' |
// 'reverse' |
// 'alternate' |
// 'alternate-reverse';
             style={{
              width:"100%",height:"100%",borderTopLeftRadius:40,borderTopRightRadius:40
             }}
             animation="fadeInUpBig"
            //  itesrationCount={5}
             direction="alternate"
             easing="ease-out"
             >
  <View style={{width:"100%",height:"55%",backgroundColor:"#f3f4f6",borderTopLeftRadius:38,borderTopRightRadius:38,alignItems:"center"}}>


<View style={{width:"90%",height:70,borderTopLeftRadius:40,borderTopRightRadius:40,justifyContent:"center",}}>  

<Text  style={{color:"black",fontSize:27,fontWeight:"bold"}}>Filter by </Text>


</View>
<View style={{width:"90%",height:35,justifyContent:"center",}}>  

<Text  style={{color:"black",fontSize:16,}}>Type </Text>


</View>

<View style={{width:"90%",height:40,justifyContent:"center",alignItems:"center",}}>  

<View  style={{width:"90%",height:"100%",justifyContent:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:0.4,

borderTopColor:"#f3f4f6",borderRightColor:"#f3f4f6",borderLeftColor:"#f3f4f6",

}}>

  <TextInput   
  placeholder='Shearch'
  style={{width:"80%",height:"100%",justifyContent:"center",}}
  placeholderTextColor="black"
  />
  <Icond name="search-outline" size={28} color="rgba(0,0,0.8)" style={{marginRight:7}} />

</View>

</View>


<View  style={{width:"100%",height:50,justifyContent:"center",alignItems:"center",


}}>
<View  style={{width:"80%",height:"90%",justifyContent:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",


}}>


{/* <Text></Text> */}

<TouchableOpacity  style={{width:"45%",height:"67%",justifyContent:"center",flexDirection:"row",alignItems:"center"
,backgroundColor:"#00bfff",justifyContent:"space-evenly",borderRadius:15
}} 

onPress={()=>{setOpen(true)}}

>

  <Text style={{color:"white",fontSize:11}}>Check in date</Text>
  <Iconfont name="calendar" size={17} color="white" />

</TouchableOpacity>

<TouchableOpacity  style={{width:"45%",height:"67%",justifyContent:"center",flexDirection:"row",alignItems:"center"
,backgroundColor:"#00bfff",justifyContent:"space-evenly",borderRadius:15

}} >
  <Text  style={{color:"white",fontSize:11}}>Check Out date</Text>
  <Iconfont name="calendar" size={17} color="white" />
</TouchableOpacity>

</View>



</View>

<DatePicker
        modal
        textColor="#00bfff"
        androidVariant = 'nativeAndroid'
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

    <View style={{width:"90%",height:70,justifyContent:"center",alignItems:"center"}}>

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
              return <Icondrop name={isOpened ? 'caretup' : 'caretdown'} color={'#444'} size={16}  />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
</View>
</View>
</Animatable.View>




  </View>






</Modal>
  
      
    </View>



    </ScrollView>
    </DrawerLayout>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#ff6900',
      alignItems: 'center',
      justifyContent: 'center',
      //  marginLeft: 0 
      
    },
    continarview:{
      // height:,
      width:"100%",
      borderWidth:1,

      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
      // borderRadius:20
    },
    dropdown1BtnStyle: {
      width: '90%',
      height: 50,
      backgroundColor: '#ffffff',
      // paddingHorizontal: 0,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#444',
      justifyContent:"space-evenly",
      flexDirection:"row-reverse",
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
  
    
  });
  const mapStateToProps = (state) => ({

    // inventory: state.userReducer.inventory,
    // data: state.authReducer,
  
    // user: state.user.details.user
  })
  const mapDispatchToProps = {
    removeUser
  }
  export default connect(mapStateToProps,mapDispatchToProps) (Flatlist2);






  // drawer work
  {/* <View   style={{width:"78%",height:"35%" ,justifyContent:"center",alignItems:"center",top:10}}>
        
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
       </TouchableOpacity> */}