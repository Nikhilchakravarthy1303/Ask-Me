import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const Forum = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/homeback.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:'row',backgroundColor:"black"}}>
        <Icon name="folder" style={{color:"orange",left:15,top:10}} size={50} color="#900" />
      <Text style={styles.text}>  Forums</Text>

      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "orange",
    fontSize: 50,
    lineHeight: 84,
    textAlign: "center",
    bottom:5,
    fontFamily:'Microbrew-Soft-Two-3D'
  }
});

export default Forum;
