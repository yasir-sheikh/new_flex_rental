

import { StyleSheet, Text, View ,FlatList, ScrollView, TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { Dimensions } from 'react-native'
import {blue_color, white_color} from '../Constants_continar/Constant.js';
import Icondone from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get("screen").width

const Liting_text_flatlist = ({item}) => {
console.log("item",typeof item?.facilities)



const [select, setselect] = useState(null)
// console.log('select========',select)

const styles = StyleSheet.create({

    View:{
    width: width/1.1,
    // height:Dimensions.get("screen").height/1,

    // padding:5,
    // alignSelf:"center",
    margin:5,
    backgroundColor:"black",
    shadowOpacity: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 4, height: 2},
    shadowRadius: 10,
    elevation: 5,
    // backgroundColor: 'white',
    borderRadius: 10,
    // borderWidth:1,
    borderColor:"white",
    justifyContent:"center",
    alignItems:"center"

    // flexDirection:"row",
    // flexWrap:"nowrap",
    // justifyContent:"center"


    }
})

// const arr = [...Object.entries(item)];


  return (
    <>
    <View style={{flex:1,}} >
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white',margin:10}}>
Facilities
</Text>
<FlatList 
  data={ item?.facilities}
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
scenic_view 
</Text>
<FlatList
  data={ item?.scenic_view }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
heating_n_cooling  
</Text>
<FlatList
  data={ item?.heating_n_cooling  }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
home_safety   
</Text>
<FlatList
  data={ item?.home_safety   }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
bathroom    
</Text>
<FlatList
  data={ item?.bathroom    }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
laundary     
</Text>
<FlatList
  data={ item?.laundary     }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
kitchen      
</Text>
<FlatList
  data={ item?.kitchen     }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
entertainment       
</Text>
<FlatList
  data={ item?.entertainment      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color:'white'}}>
outdoor       
</Text>
<FlatList
  data={ item?.outdoor      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
parking        
</Text>
<FlatList
  data={ item?.parking       }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
cancellation_policy         
</Text>
<FlatList
  data={ item?.cancellation_policy        }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:2
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>

{/* for setting */}

<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
outdoor       
</Text>
<FlatList
  data={ item?.outdoor      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <TouchableOpacity
    onPress={() =>{setselect(index == select ? null : index)}}
    style={{
        width:Dimensions.get("window").width/1.2,
    height:Dimensions.get("screen").height/16,
    backgroundColor: index == select ? "#666666": "black"
,borderWidth:1,
borderColor:index == select ? blue_color:'white',
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:7}}>
    
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
      color: index == select ? white_color: blue_color ,
        opacity: 0.7,
        margin:6
      }}>
    {item}
    </Text>
    
<Icondone name= { index == select ? 'done': ""}
size={23} color="white" style={{margin:6}} /> 
    </TouchableOpacity>
  )}
/>
</View>

</View>
</>
  )
}

export default Liting_text_flatlist