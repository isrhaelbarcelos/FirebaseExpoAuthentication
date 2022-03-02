import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import { Button, TextInput, Drawer } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {

  const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
    });

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const [text, setText] = React.useState("");

  componentDidMount = () => {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  };

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  const [active, setActive] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
      <View style={{alignItems: 'center'}}>
      <LottieView
      resizeMode='cover' autoSize autoPlay loop
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25%',
          }}
          source={require('../../login.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        /></View>
      <View style={{alignItems: 'center', marginTop: '10%',}}>
        <TextInput
        label="E-mail"
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          right={<TextInput.Icon name="email" color="lightgrey"/>}
          style={{ width: '80%', color: '#73D408'}}
          mode="outlined"
          raised theme={{ roundness: 3 }}
        />
        <TextInput
        label="Senha"
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          right={<TextInput.Icon name="eye" color="lightgrey" />}
          style={{ width: '80%', }}
          mode="outlined"
          raised theme={{ roundness: 3 }}
          secureTextEntry
        />
      </View>

      <View style={{alignItems: 'center', marginTop: '5%',}}>
        <Button
          onPress={handleLogin}
          mode="contained" 
          raised theme={{ roundness: 3 }}
          style={{ width: '50%',}}                
        >
          Entrar
        </Button>
        <Button
          onPress={handleSignUp}
          mode="text"
          raised theme={{ roundness: 3 }}
          style={{ width: '50%', marginTop: '3%', }} 
        >
          Crie sua conta
        </Button>
      </View>
     
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
