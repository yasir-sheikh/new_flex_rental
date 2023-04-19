import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Massage = ({ sender, content, timestamp,route }) => {
    // console.log(route.Massage,'mmmm')
  return (
    <View style={styles.container}>
      {/* Render the sender and content */}
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.content}>{content}</Text>
      {/* Render the timestamp */}
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  sender: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
    color:"black"
  },
  content: {
    fontSize: 16,
    color:"black"
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 3,
    // color:"black"
  },
});

export default Massage;





