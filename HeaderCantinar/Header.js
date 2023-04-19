

//   import React, { useRef } from 'react';
// import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

  
//   const HEADER_MAX_HEIGHT = 200;
//   const HEADER_MIN_HEIGHT = 60;
//   // const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  
//   const Header = () => {


//     const scrollY = useRef(new Animated.Value(0)).current;

  
//     const headerHeight = scrollY.interpolate({
//       inputRange: [0, 200],
//       outputRange: [200, 100],
//       extrapolate: 'clamp',
//     });
    
//     const headerOpacity = scrollY.interpolate({
//       inputRange: [0, 100],
//       outputRange: [1, 0],
//       extrapolate: 'clamp',
//     });
    
//     const headerStyle = {
//       height: headerHeight,
//       opacity: headerOpacity,
//     };
    
//     return (
//       <>
//       <Animated.View style={[styles.header, headerStyle]}>
//         <Text style={styles.headerText}>Header</Text>
//       </Animated.View>
//         <View style={styles.container}>
//     <ScrollView
//       contentContainerStyle={styles.contentContainer}
//       onScroll={Animated.event(
//         [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//         { useNativeDriver: false }
//       )}
//       scrollEventThrottle={16}
//     >
//       {/* Render your content here */}
//     </ScrollView>
//   </View>
// </>
      
      
//     );
//   };
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     contentContainer: {
//       paddingTop: 200,
//     },
//     header: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: '#fff',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     headerText: {
//       fontSize: 24,
//       fontWeight: 'bold',
//     },
//   });
  
  
  
  
  
  
//   export default Header;
  
  
  
