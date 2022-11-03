import React,{useState,useEffect,useContext} from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,SafeAreaView, ScrollView,FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';


const Home = ({Email}) => {
  const navigation = useNavigation();
  const email =  Email;
  const [list,setList] = useState(null);

  useEffect(() => {getDataBase()},[])
  const getDataBase = async() => {
    try{
      const data = await database()
      .ref("query")
      .on("value",(tempData)=>{
      setList(tempData.val());
      });


    }
    catch(e)
    {
      console.log(e);
    }
  };
  return(
  <View style={styles.container}>

    <ImageBackground source={require('../assets/images/home.jpg')} resizeMode="cover" style={styles.image}>
      <View style={{flexDirection:'row',backgroundColor:"black"}}>
      <Icon name="users" style={{color:"orange",left:15,top:10}} size={50} color="#900" />
      <Text style={styles.text}>  Community</Text>

        <Text style={{color:"black",fontSize:30,fontFamily:"Microbrew-Soft-Two-3D",left:20,top:15,backgroundColor:"orange",borderRadius:10,height:40}}> Ask </Text>

      </View>

      <ScrollView style={{}}>
        <FlatList data={list} renderItem={(item) => {
              console.log(item);

              if(item.item !== null)
              {
              return(
                <View style={{height:80,borderRadius:10,backgroundColor:"pink",marginVertical:10,marginHorizontal:7}}>
                <View style={{height:30,borderRadius:8,backgroundColor:"black",flexDirection:"row"}}>
                <Text style={{left:10,color:"white",top:5}}>{item.item.name}</Text>
                <Text style={{left:10,position: 'absolute', left: 170, top:5,right: 0, bottom: 0,color:"white"}}>{item.item.curretTime}</Text>
                </View>
                <View style>
                <Text style={{left:10,color:"black"}}>{item.item.message}</Text>
                </View>
                  <TouchableOpacity>
                <View style={{backgroundColor:"purple",marginHorizontal:130,borderRadius:10,left:120,top:7}}>
                <Text style={{textAlign:"center",color:"white",borderRadius:5}}>Answer</Text>
                </View>
                </TouchableOpacity>
               </View>

              );
            }
            }}/>
          <View style={{padding:100}}></View>
    </ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('Ask',{length:list.length})}>
    <View style={styles.iconup}>
    <Icon name="hand-paper-o" style={{color:"black"}} size={30} color="#900" />
    </View>
    </TouchableOpacity>

    </ImageBackground>

  </View>
);
}

const styles = StyleSheet.create({
  iconup:{
    position: "absolute",
    bottom: 110,
    right: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
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
  },
  pcard: {
      color:"white",
      backgroundColor:"black",
      marginVertical:10,
      fontSize:30,
      fontFamily:"Microbrew-Soft-Two-3D",
      textAlign:"center",
      marginHorizontal:20,
      borderRadius:40
    },
});

export default Home;
