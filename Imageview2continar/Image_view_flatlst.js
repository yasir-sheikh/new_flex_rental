
import { StyleSheet, Text, View ,FlatList, ScrollView} from 'react-native'
import React from 'react'
// import { height, width } from '../../Constants/constant'
import { useEffect } from 'react'
import { Dimensions } from 'react-native'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const Image_view_flatlist = ({item}) => {
console.log("item",typeof item?.facilities)

const styles = StyleSheet.create({
    View:{
    width: '93%', paddingHorizontal: 20,
    padding:5,
    alignSelf:"center",
    margin:5,
    backgroundColor:"white",
    shadowOpacity: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 4, height: 2},
    shadowRadius: 10,
    elevation: 5,
    // backgroundColor: 'white',
    borderRadius: 10,
    }
})

// const arr = [...Object.entries(item)];


  return (
    <>
    <View style={{flex:1,}} >
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
Facilities
</Text>
<FlatList 
  data={ item?.facilities}
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
scenic_view 
</Text>
<FlatList
  data={ item?.scenic_view }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
heating_n_cooling  
</Text>
<FlatList
  data={ item?.heating_n_cooling  }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
home_safety   
</Text>
<FlatList
  data={ item?.home_safety   }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
bathroom    
</Text>
<FlatList
  data={ item?.bathroom    }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
laundary     
</Text>
<FlatList
  data={ item?.laundary     }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
kitchen      
</Text>
<FlatList
  data={ item?.kitchen     }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
entertainment       
</Text>
<FlatList
  data={ item?.entertainment      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color:'black'}}>
outdoor       
</Text>
<FlatList
  data={ item?.outdoor      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
parking        
</Text>
<FlatList
  data={ item?.parking       }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>
<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
cancellation_policy         
</Text>
<FlatList
  data={ item?.cancellation_policy        }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>

{/* for setting */}

<View
style={styles.View}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
outdoor       
</Text>
<FlatList
  data={ item?.outdoor      }
  keyExtractor={key => key}
  renderItem={({item,index}) => (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width / 30,
        color: 'black',
        opacity: 0.7,
      }}>
    🔘 {item}
    </Text>
  )}
/>
</View>

</View>
</>
  )
}

export default Image_view_flatlist