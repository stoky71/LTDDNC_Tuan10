import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ScreenDefault = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1667974331/LTDDNC/cafe_khgq2m.png'}}
        style = {{ width: '100%', height: 400 }}/>
      <Text style={styles.titler}>Coffe so good, your taste buds will love it.</Text>
      <Text style={styles.lowTit}>The best grain, the finest roast, the powerful flavor.</Text>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Star")}>
        <Text style={styles.tittleButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ScreenDefault
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titler:{
    color:'white',
    width:320,
    marginTop:-20,
    fontWeight: '700',
    textDecorationStyle: 'solid',
    fontSize:45,
    alignSelf:'center',
    justifyContent:'center',
    fontVariant: ['proportional-nums'],
    textAlign:'center'
  },
  lowTit:{
    fontSize:16,
    opacity: 0.5,
    color:'white',
    textAlign:'center',
    alignSelf:'center',
    width:250,
  },
  button:{
    backgroundColor: '#DF9272',
    borderWidth: 2,
    borderRadius: 20,
    height:70,
    width:370,
    alignSelf:'center',
    margin:15
  },
  tittleButton:{
    color:'white',
    fontWeight: '600',
    textDecorationStyle: 'solid',
    fontSize:25          ,
    alignItems:'center',
    justifyContent:'center',
    fontVariant: ['proportional-nums'],
    textAlign:'center',
    margin:15
  }
});
