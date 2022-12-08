import React,{useRef, useState, useEffect} from "react";
import { AppState,ImageBackground, StyleSheet, Text,FlatList,View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';


const UserScreen = () => {
  const [list,setList] = useState(null);
  useEffect(() => {getDataBase()},[])
  const getDataBase = async() => {
    try{
      const data = await firestore().collection('users').get();
      console.log(data);
    }
    catch(e)
    {
      console.log(e);
    }
  };
  return(
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/homeback.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:'row',backgroundColor:"black"}}>
        <Icon name="folder" style={{color:"orange",left:15,top:10}} size={50} color="#900" />
      <Text style={styles.text}>  Users</Text>
      </View>
      <View style={{padding:10}}></View>


          <View style={{padding:100}}></View>










  </ImageBackground>
  </View>
);
}

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

export default UserScreen;
