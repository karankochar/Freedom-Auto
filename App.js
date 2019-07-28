import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image ,ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Ionicons, Entypo, MaterialIcons,FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      searchinput:''
    }
  }


  buttonPress = () => {
    Alert.alert('Coming Soon !')
  }

  render() {

  
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView>
    <View style={styles.header}>
        <TextInput
        style={styles.input}
        placeholder='Search for services'
        keyboardType='ascii-capable'
        selectionColor='#FFF'
        value={this.state.searchinput}
        onChangeText={searchinput=()=>{this.setState({searchinput})}}
        />
      
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:1, flexDirection:'row',marginTop:35  }}>
      <View style={{flex:1, paddingHorizontal:15}}>
      <Image style={{height:220, width:325,borderRadius:5 }}
      source={require('./src/images/car1.jpg')}
      />
      </View>
      <View style={{flex:1 , borderRadius:5, paddingHorizontal:15}}>
       <Image style={{height:220, width:325, borderRadius:5}}
      source={require('./src/images/car2.jpg')}
      
      />
      </View>
      <View style={{flex:1, borderRadius:5, paddingHorizontal:15,  }}>
       <Image style={{height:220, width:325,borderRadius:5}}
      source={require('./src/images/car3.png')}
      />
      </View>
      <View style={{flex:1, paddingHorizontal:15}}>
      <Image style={{height:220, width:325,borderRadius:5 }}
      source={require('./src/images/car4.jpg')}
      />
      </View>
      <View style={{flex:1, paddingHorizontal:15}}>
      <Image style={{height:220, width:325,borderRadius:5 }}
      source={require('./src/images/car5.jpg')}
      />
      </View>

    </ScrollView>

    <View style={styles.headingcontainer}>
    <Text style={styles.heading}>Introducing Freedom Auto</Text>
    </View>
    <View style={styles.contentcontainer}>
      <Text style={styles.content}>
      Freedom Auto is a brand which is literally going to change the way people think about car cleaning. 
      We specialize in sexy car washes.
      </Text>
    </View>
    <View style={styles.servicecontainer}>
     
    <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <Entypo name="tools" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          
          Car Repair
        </Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <MaterialIcons name="local-car-wash" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          Car wash
        </Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <FontAwesome name="car" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          Wheel Alignment
        </Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <MaterialIcons name="format-paint" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          Car painting
        </Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <Entypo name="documents" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          Insurance
        </Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
      <View style={styles.button}>
      <AntDesign name="tool" size={32} color="green" style={{color:'#2F363F'}}/>
        <Text style={styles.text}>
          Puncture change
        </Text>
        
      </View>
      </TouchableOpacity>
    </View>
   
    <View style={styles.listcontainer}>
      <TouchableOpacity onPress={this.buttonPress}>
        <View style={styles.listitem}>
          <Text style={styles.listtext}>
            Car Service at home 
          </Text>
          <EvilIcons name="arrow-right" size={32} color="green" style={{color:'#2F363F', marginTop:45, marginRight:10}}/>
          <View styles={styles.imagecontainer}>
          <Image
          style={styles.listimage}
          source={require('./src/images/service1.jpg')}
          />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
        <View style={styles.listitem}>
          <Text style={styles.listtext}>
            Car Spray Paint 
          </Text>
          <EvilIcons name="arrow-right" size={32} color="green" style={{color:'#2F363F', marginTop:45, marginRight:10}}/>
          <View styles={styles.imagecontainer}>
          <Image
          style={styles.listimage}
          source={require('./src/images/service2.jpg')}
          />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
        <View style={styles.listitem}>
          <Text style={styles.listtext}>
            Wheel Alignment 
          </Text>
          <EvilIcons name="arrow-right" size={32} color="green" style={{color:'#2F363F', marginTop:45, marginRight:10}}/>
          <View styles={styles.imagecontainer}>
          <Image
          style={styles.listimage}
          source={require('./src/images/service3.png')}
          />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
        <View style={styles.listitem}>
          <Text style={styles.listtext}>
            Car wash done by the sexiest women you'll ever get to jerk off to.
          </Text>
          <EvilIcons name="arrow-right" size={32} color="green" style={{color:'#2F363F', marginTop:45, marginRight:10}}/>
          <View styles={styles.imagecontainer}>
          <Image
          style={styles.listimage}
          source={require('./src/images/service4.jpg')}
          />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.buttonPress}>
        <View style={styles.listitem}>
          <Text style={styles.listtext}>
            Car AC service 
          </Text>
          <EvilIcons name="arrow-right" size={32} color="green" style={{color:'#2F363F', marginTop:45, marginRight:10}}/>
          <View styles={styles.imagecontainer}>
          <Image
          style={styles.listimage}
          source={require('./src/images/service5.jpg')}
          />
          </View>
        </View>
      </TouchableOpacity>
    </View>
   
  </SafeAreaView>
  </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1'
  },
  header:{
    flex:1,
    flexDirection:'row',
    marginTop:8,
    backgroundColor:'#2F363F',
    height:110,
    justifyContent:'center',
    alignItems:'center'
  },
  headertext:{
    flex:1,
    fontSize:32,
    marginTop:30,
    color:'#fff',
    justifyContent:'center',
    alignItems:'center'

  },
  searchcontainer:{
    backgroundColor:'#2F363F',
    height:100,
    marginTop:10
  },
  imageslider:{
    flex:1,
    flexDirection:'row'
  },
  button:{
    backgroundColor:'#fff',
    height:125,
    width:137,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#DAE0E2',
  
  },
  servicecontainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,

  },
  heading:{
    fontSize:25,
    fontWeight:'bold',
    color:'#4C4B4B'
    
  },
  headingcontainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,

  },
  contentcontainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    paddingHorizontal:15,
    marginLeft:8
  },
  content:{
    fontSize:18,
    color:'#4C4B4B'
  },
  input:{
    fontSize:20,
    color:'black',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:325,
    marginTop:17,
    height:37,
    alignItems:'center',
    paddingHorizontal:10,
    borderRadius:5
  },
  text:{
    marginTop:10,
    fontSize:15
  },
  listitem:{
    height:125,
    backgroundColor:'#fff',
    justifyContent:'center',
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#DAE0E2'
  },
  listcontainer:{
    marginTop:20
  },
  listtext:{
    padding:12,
    flex:1,
    
  },
  listimage:{
    justifyContent:'center',
    height:100,
    width:153,
    marginRight:15,
    marginTop:10,
    borderRadius:3
  
  },
  imagecontainer:{
    justifyContent:'center',
    flex:1,
    
  }

});
