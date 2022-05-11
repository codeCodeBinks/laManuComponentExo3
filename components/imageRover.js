import { View, Text, StyleSheet, Image } from "react-native"


function ImageRover() {
  return (
    <View style = {styles.imgContainer}>
        <Image style = {styles.roverImg} source={require('../assets/rover.jpg')}></Image>
        <Text style = {styles.roverText}>Le rover Opportunity</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
    roverImg:{
        width : 300,
        height : 200,
        flex : 8,
        borderWidth : 3,
        borderColor : "black",
        borderRadius : 15
    },

    imgContainer:{
        flexDirection : "row",
    },

    roverText:{
      flex : 3.5,
      paddingLeft : 10,
      color : 'red',
      fontSize : 20,
      alignSelf:"center"
    }
})



export default ImageRover

