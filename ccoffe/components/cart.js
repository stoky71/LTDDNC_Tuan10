import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ScreenCart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10,alignItems:'center',marginTop:20,alignContent:'space-between', flex:0.1}}>
        <TouchableOpacity style={{justifyContent:'flex-start', flex:0.4}}>
            <Text style={{fontSize:25, fontWeight:'700'}}>〈</Text>
        </TouchableOpacity>
        <Text style={{justifyContent:'center',alignItems:'center', flex:0.5,fontSize:21, fontWeight:'500'}}>Order</Text>
    </View>
    
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'#F0ECEA',width:'70%',flexDirection:'row',height:'120%',borderRadius: 17}}>    
            <TouchableOpacity 
              style={{backgroundColor: '#DF9272',
                      borderRadius: 15,
                      height:40,
                      width:'50%',
                      alignSelf:'center',
                      marginLeft:4}}>
              <Text style={{color:'white',
                            fontWeight: '600',
                            textDecorationStyle: 'solid',
                            fontSize:18,
                            fontVariant: ['proportional-nums'],
                            textAlign:'center',
                            margin:7}}>Deliver</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                      borderRadius: 15,
                      height:40,
                      width:'50%',
                      alignSelf:'center',
                      }}>
              <Text style={{color:'black',opacity:0.4,
                            fontWeight: '600',
                            textDecorationStyle: 'solid',
                            fontSize:18,
                            fontVariant: ['proportional-nums'],
                            textAlign:'center',
                            margin:7}}>Pick Up</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={{flexDirection:'column', flex:0.2, margin:20, marginLeft:35}}>
        <Text style={{color:'black', fontSize:17, opacity:0.9, fontWeight:'bold'}}>Delivery Address</Text> 
        <Text style={{color:'black', fontSize:17, opacity:0.9, fontWeight:'bold', marginTop:10}}>Ho Chi Minh City, Viet Nam </Text>
        <Text style={{color:'black', fontSize:17, opacity:0.5}}>156 Tran Binh Trong, F3, D5</Text>
        <View style={{flexDirection:'row', borderBottomWidth:0.2}}>
            <TouchableOpacity 
                style={{
                    borderRadius: 15,
                    height:30,
                    width:'35%',
                    alignSelf:'flex-start',
                    borderWidth:1,
                    opacity:0.8,
                    flexDirection:'row',
                    marginTop:10, marginBottom:25
                    }}>
                    <Image  style={{height:22, width:22, marginTop:2, marginLeft:7}}
                        source={{uri: 'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668241802/LTDDNC/note_zy9mkn.png'}}/>
                    <Text style={{marginTop:2.5, marginLeft:5}}>Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    borderRadius: 15,
                    height:30,
                    width:'35%',
                    alignSelf:'flex-start',
                    borderWidth:1,
                    opacity:0.8,
                    flexDirection:'row',
                    marginTop:10,
                    marginLeft:10
                    }}>
                    <Image  style={{height:20, width:20, marginTop:2, marginLeft:10}}
                        source={{uri: 'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668241802/LTDDNC/notebook_twvkk9.png'}}/>
                    <Text style={{marginTop:2.5, marginLeft:5}}>Add note</Text>
            </TouchableOpacity>
        </View> 
    </View>

    <View style={{flexDirection:'row', flex:0.3, marginTop:60}}> 
            <View style={{flexDirection:'column', flex:0.4}}>
              <Image source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668004017/LTDDNC/Cappuccino-1_lzwozx.png'}}
              style = {{ width: 80, height: 80, borderRadius:12, borderWidth:20, marginLeft:30 }}/>
            </View>
            <View style={{flexDirection:'column', flex:0.6,marginTop:10}}>
              <Text style={{color:'black', fontSize:20, opacity:0.8, fontWeight:'bold'}}>Cappuccino</Text>
              <Text style={{color:'black', fontSize:17, opacity:0.5}}>with Chocolate</Text>   
            </View>
            <View style={{flexDirection:'row', marginTop:25, flex:0.35}}>
                <TouchableOpacity style={{height:25, width:25, borderRadius:100,borderWidth:1}}>
                    <Text style={{alignSelf:'center', fontWeight:'bold'}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginLeft:12,marginRight:12,marginTop:-2, fontSize:18}}>1</Text>
                <TouchableOpacity style={{height:25, width:25, borderRadius:100,borderWidth:1}}>
                    <Text style={{alignSelf:'center', fontWeight:'bold'}}>+</Text>
                </TouchableOpacity>
                
            </View>
    </View>  

    <View style={{flex:0.35,alignItems:'center',marginBottom:20}}>
        <TouchableOpacity style={{width:'75%', height:50,marginTop:-20, borderRadius:10, borderWidth:0.8,marginBottom:15, flexDirection:'row', justifyContent:'space-around'}}>
            <Image style={{height:30, width:30, margin:7}}
                source={{uri:'https://res.cloudinary.com/dh0i5v2tb/image/upload/v1668246260/LTDDNC/discount_lr6tze.jpg'}}/>
            <Text style={{fontSize:18, fontWeight:'600',marginTop:9,opacity:0.6}}>1 Discount is applied        {">"}     </Text>
        </TouchableOpacity>
        <Text style={{color:'black', fontSize:17, opacity:0.9, fontWeight:'bold', alignSelf:'flex-start', marginLeft:30}}>Payment Summary</Text> 
        <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16, marginRight:263.5}}>Price</Text>
            <Text style={{fontWeight:'700',fontSize:18,opacity:0.7}}>$ 4.53</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomWidth:0.5}}>
            <Text style={{fontSize:16, marginRight:167.5}}>Dilivery Fee</Text>
            <Text style={{fontWeight:'700',fontSize:18,textDecorationLine:'line-through', opacity:0.5}}>$ 2.0</Text>
            <Text style={{fontWeight:'700',fontSize:18,marginBottom:5,opacity:0.7}}>  $ 1.00</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:20}}>
            <Text style={{fontSize:16, marginRight:196.5}}>Total Payment</Text>
            <Text style={{fontWeight:'700',fontSize:18,opacity:0.7}}>$ 5.53</Text>
        </View>
    </View>

    <View style={{flex:0.25}}>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Home")}>
            <Text style={styles.tittleButton}>Order</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}
export default ScreenCart
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
