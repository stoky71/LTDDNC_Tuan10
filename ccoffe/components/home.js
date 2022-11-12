import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const flatList = require('../flatListCol')
const ScreenHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={["rgba(25, 25, 25, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)"]}
       style={styles.background}> */}
        <View style={{flex:0.4, backgroundColor:'#2C2C2C', alignItems:'center', justifyContent:'center'}}>
          <View style={{marginTop:-25,flexDirection:'row', flex:0.25, alignItems:'center'}}> 
            <View style={{flexDirection:'column', flex:0.6, margin:20}}>
              <Text style={{color:'white', fontSize:17, opacity:0.5}}>Location</Text> 
              <Text style={{color:'white', fontSize:17, opacity:0.7, fontWeight:'bold'}}>Ho Chi Minh City, Viet Nam </Text>
            </View>
            <View style={{flexDirection:'row', flex:0.4}}>
              <Image source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668248684/LTDDNC/z3698239222734_7c69dd841807e2e5939d166c23eba1e3_djfwwl.jpg'}}
              style = {{ width: 60, height: 60, borderRadius:12, borderWidth:20, marginLeft:70 }}/>
            </View>
          </View>
          <View style={{flexDirection:'row', flex:0.3, marginBottom:20, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity 
              style={{backgroundColor: '#454545',
                      borderWidth: 2,
                      borderRadius: 20,
                      height:70,
                      width:"90%",
                      alignSelf:'center',
                      flexDirection:'row'}}>
              <Image  style={{margin:20,height: 30, width:30, alignItems:'flex-start', marginRight:10}}  
                source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1664458396/LTDDNC/search_arqoyk.png'}}/>
              <Text style={{color:'white', fontSize:20, opacity:0.5, margin:20,marginRight:95}}>Search coffee</Text>
              <Image  style={{height: 55, width:55, alignItems:'flex-end', margin:5,borderRadius:18,borderWidth:2}}  
                source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1667979297/LTDDNC/setting_qyc3fz.png'}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.55,backgroundColor:'white'}}>
          <Image source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668000919/LTDDNC/banner_ucuuyr.png'}}
              style={{marginTop:-65,
                      height:160, 
                      width:"90%", 
                      alignSelf:'center', 
                      position:'absolute',
                      borderWidth:2,
                      borderRadius:20}}/>
          <View style={{flex:0.1,marginTop:130,marginLeft:10,flexDirection:'row'}}>
            <TouchableOpacity 
              style={{backgroundColor: '#DF9272',
                      borderRadius: 15,
                      height:40,
                      width:'35%',
                      alignSelf:'center',
                      margin:15}}>
              <Text style={{color:'white',
                            fontWeight: '600',
                            textDecorationStyle: 'solid',
                            fontSize:18,
                            fontVariant: ['proportional-nums'],
                            textAlign:'center',
                            margin:7}}>Cappuchino</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{backgroundColor: '#FFF2F1',
                      borderRadius: 15,
                      height:40,
                      width:'28%',
                      alignSelf:'center',
                      margin:15}}>
              <Text style={{color:'black',opacity:0.3,
                            fontWeight: '600',
                            textDecorationStyle: 'solid',
                            fontSize:18,
                            fontVariant: ['proportional-nums'],
                            textAlign:'center',
                            margin:7}}>Machiato</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{backgroundColor: '#FFF2F1',
                      borderRadius: 15,
                      height:40,
                      width:'20%',
                      alignSelf:'center',
                      margin:15}}>
              <Text style={{color:'black',opacity:0.3,
                            fontWeight: '600',
                            textDecorationStyle: 'solid',
                            fontSize:18,
                            fontVariant: ['proportional-nums'],
                            textAlign:'center',
                            margin:7}}>Latte</Text>
            </TouchableOpacity>  
          </View>
          <View style={{alignItems:'center',justifyContent:'center', width:'95%', marginTop:10}}>
            <FlatList data={flatList}
              key={'#'}
              numColumns={2}
              renderItem = {({item, index}) => {
                return(
                  <View style={{padding:20}}>
                    {/* <View style={{flexDirection:'row', width:'12%', position:'absolute', margin:20, backgroundColor:'gray'}}>
                      <Image style={{height:20, width:20}}
                        source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668238023/LTDDNC/start_d03lb2.png'}}/>
                      <Text style={{color:'white',
                            textDecorationStyle: 'solid',
                            fontVariant: ['proportional-nums'],}}>{item.star}</Text>
                    </View> */}
                    <Image source={{uri: item.photo}} style={{height:170, width:170, borderRadius:15}}/>
                    <Text style={{margin:5, fontWeight:'700',fontSize:18}}>{item.name}</Text>
                    <Text style={{marginLeft:5,marginTop:-3, fontWeight:'700',fontSize:13, opacity:0.5}}>{item.dec}</Text>
                    <Text style={{marginLeft:5, fontWeight:'700', fontSize:20, color:'#2C5784'}}>$ {item.price}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}
                      style={{backgroundColor: '#DF9272',
                              borderRadius: 15,
                              height:40,
                              width:40,
                              alignSelf:'center',
                              marginTop:-35,
                              marginLeft:110}}>
                      <Text style={{color:'white',
                                    fontWeight: '600',
                                    textDecorationStyle: 'solid',
                                    fontSize:18,
                                    fontVariant: ['proportional-nums'],
                                    textAlign:'center',
                                    margin:7}}>+</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}>

            </FlatList>
          </View>  
        </View>
      {/* </LinearGradient> */}
    </View>
  );
}
export default ScreenHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
