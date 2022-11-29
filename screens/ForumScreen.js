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
      <View style={{padding:10}}></View>

    <View style={{marginHorizontal:20,borderRadius:20,backgroundColor:"lightblue",marginVertical:10,height:50}}>
      <Icon name="users" style={{color:"black",left:30,top:10}} size={30} color="#900" />
      <Text style={{justifyContent:"center",bottom:25,marginHorizontal:30,borderRadius:20,color:"black",textAlign:"center",fontSize:30,fontFamily:'Microbrew-Soft-Two-3D'}}>nikhil</Text>
    </View>
    <View style={{marginHorizontal:20,borderRadius:20,backgroundColor:"lightblue",marginVertical:10,height:50}}>
      <Icon name="users" style={{color:"black",left:30,top:10}} size={30} color="#900" />
      <Text style={{justifyContent:"center",bottom:25,marginHorizontal:30,borderRadius:20,color:"black",textAlign:"center",fontSize:30,fontFamily:'Microbrew-Soft-Two-3D'}}>nikhil</Text>
    </View>
    <View style={{marginHorizontal:20,borderRadius:20,backgroundColor:"lightblue",marginVertical:10,height:50}}>
      <Icon name="users" style={{color:"black",left:30,top:10}} size={30} color="#900" />
      <Text style={{justifyContent:"center",bottom:25,marginHorizontal:30,borderRadius:20,color:"black",textAlign:"center",fontSize:30,fontFamily:'Microbrew-Soft-Two-3D'}}>nikhil</Text>
    </View>
    <View style={{marginHorizontal:20,borderRadius:20,backgroundColor:"lightblue",marginVertical:10,height:50}}>
      <Icon name="users" style={{color:"black",left:30,top:10}} size={30} color="#900" />
      <Text style={{justifyContent:"center",bottom:25,marginHorizontal:30,borderRadius:20,color:"black",textAlign:"center",fontSize:30,fontFamily:'Microbrew-Soft-Two-3D'}}>nikhil</Text>
    </View>
    <View style={{marginHorizontal:20,borderRadius:20,backgroundColor:"lightblue",marginVertical:10,height:50}}>
      <Icon name="users" style={{color:"black",left:30,top:10}} size={30} color="#900" />
      <Text style={{justifyContent:"center",bottom:25,marginHorizontal:30,borderRadius:20,color:"black",textAlign:"center",fontSize:30,fontFamily:'Microbrew-Soft-Two-3D'}}>nikhil</Text>
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
