import React from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native'
import { getCurrentUser } from '../firebase'
import { Text, Button, TouchableOpacity, TextInput } from 'react-native';



import { db, auth } from '../firebase/index'
import { setUser } from '../firebase/users';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''};

    this._bootstrapAsync()
  }

  handleGuardarButtonPress = () => {
    if(this.state.text){

      setUser(auth.currentUser.uid , this.state.text )

      this.props.navigation.navigate('App')
    }
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const currentUser = await getCurrentUser()
    
    //this.props.navigation.navigate('App')

  }




  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator /> */}

<Text style={styles.titleText} onPress={this.onPressTitle}>
          ¿Quién corno sos?
        </Text>

        <TextInput
        style={{height: 60, width: 300, borderColor: 'gray', borderWidth: 2, fontSize:36}}
        onChangeText={(text) => this.setState({text})}


        />

        
        {/* <Button
        onPress={this.handleGuardarButtonPress}
        title="Guardar"
        style={styles.boton}
        /> */}

        <TouchableOpacity onPress={this.handleGuardarButtonPress}>
        <Text style={styles.boton}>Prueba</Text>
       </TouchableOpacity>

        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontWeight: "bold",
    fontSize:24,
    paddingBottom:20
  },
  
  boton: {
    marginTop:20,
    width:300,
    padding:20,
    fontSize:18,
    backgroundColor: '#1A1A59',
    color:'#FFF',
    textAlign:"center",

  }

})
