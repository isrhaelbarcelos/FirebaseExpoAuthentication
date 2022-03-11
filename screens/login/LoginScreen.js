import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import { Button, TextInput, Drawer, Subheading, Title, Caption, Divider, IconButton, Provider, Modal,
Text, Portal } from 'react-native-paper';
import LottieView from 'lottie-react-native';


import CadastroUsuario from '../cadastro-usuario/CadastroUsuario';


const LoginScreen = () => {

  const abrirCadastro = () => {
    navigation.navigate('CadastroUsuario');
  };

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
        navigation.replace("Main")
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
      .catch(error => alert("Campos inválidos!"))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert("Preencha os campos corretamente!"))
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

  const [visible, setVisible] = React.useState(false);

  const [abrir, setCadastrar] = React.useState(false);


  const hideModal = () => {
    setCadastrar(false);
    setVisible(false);}
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
<View style={{ alignItems: 'center'}}>
      <Title style={{ marginTop: '20%', color: 'green' }}>Login</Title>
      <Caption style={{ color: 'grey' }}>Acesse com</Caption>     
      </View>
      <Divider style={{width: '90%', alignSelf: 'center'}}/>

      <View style={{ alignSelf: 'center', flexDirection:'row', marginTop: '8%' }}>
      <IconButton
    icon="facebook"
    mode="contained"
    size={50}
    onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
  />
  <IconButton
  icon="google-plus"
  mode="contained"
  size={50}
  onPress={() => console.log('Pressed')}
/>

  </View>
  <Caption style={{ color: 'grey', alignSelf: 'center', marginTop: '3%' }}>ou através do E-mail</Caption>
  <Divider style={{width: '90%', alignSelf: 'center'}}/>

     {/*  <View style={{ alignItems: 'center' }}>
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
            marginTop: '5%',
          }}
          source={require('../../login.json')}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        /></View> */}
      <View style={{ alignItems: 'center', }}>
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>E-mail</Subheading>
        <TextInput
          label="E-mail"
          placeholder="exemlo@exemplo.com"
          value={email}
          onChangeText={text => setEmail(text)}
          right={<TextInput.Icon name="email" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Senha</Subheading>
        <TextInput
          label="Senha"
          placeholder="**********"
          value={password}
          onChangeText={text => setPassword(text)}
          right={<TextInput.Icon name="eye" color="lightgrey" />}
          style={{ width: '85%',}}
          mode="outlined"
          raised theme={{ roundness: 9 }}
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: '25%', }}>
        <Button
          onPress={handleLogin}
          mode="contained"
          raised theme={{ roundness: 9 }}
          style={{ width: '85%', height: '25%', justifyContent:'center' , elevation: 0 }}
        >
          Entrar
        </Button>
        <Button
          onPress={() => navigation.navigate(CadastroUsuario)}
          mode="text"
          raised theme={{ roundness: 6 }}
          style={{ width: '50%', marginTop: '3%', }}
        >
          Crie sua conta
        </Button>
      </View>

      <Provider>
      <Portal>
        <Modal visible={abrir} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <CadastroUsuario/>
        </Modal>
      </Portal>
    </Provider>


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
