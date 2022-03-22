import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import firebase from '../../firebase';
import firestore from '@react-native-firebase/firestore';
import * as React from 'react';
import { useState } from 'react';
import {
  TextInput, Divider, Button, Surface, Searchbar,
  Avatar, IconButton, Subheading, Menu, Text, RadioButton, Title, Caption
} from 'react-native-paper';

export function CadastroUsuario() {

  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [tipolixo, setTipolixo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [user, setUser] = useState('false');
  const [userLogged, setUserLogged] = useState({});

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen, aberto] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleAdd = () => {
    firestore()
      .collection('usuarios')
      .add({
        nome: nome,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        whatsapp: whatsapp,
        tipo: 'Usuario'
      })
      .then(() => {
        console.log('User added!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Este e-mail já está cadastrado! Informe sua senha apenas.');
        } else if (error.code === 'auth/weak-password') {
          alert('Senha muito fraca! Tente novamente.');
        } else if (error.code === 'auth/invalid-email') {
          alert('E-mail inválido! Tente novamente.');
        }
      })
  }

  return (

    <ScrollView>

<View style={{ alignItems: 'center'}}>
      <Title style={{ marginTop: '15%', color: 'green' }}>Cadastre-se</Title>
      <Caption style={{ color: 'grey' }}>Cadastre-se com</Caption>     
      </View>
      <Divider style={{width: '90%', /*alignSelf: 'center'}*/}}/>

      <View style={{ alignSelf: 'center', flexDirection:'row', marginTop: '2%' }}>
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
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Nome completo</Subheading>
        <TextInput
          label="Nome"
          placeholder="Nome"
          value={nome}
          onChangeText={value => {
            setNome(value)
          }}
          right={<TextInput.Icon name="account-circle" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Endereço</Subheading>
        <TextInput
          label="Endereço"
          placeholder="Endereço"
          value={endereco}
          onChangeText={value => {
            setEndereco(value)
          }}
          right={<TextInput.Icon name="map-marker-radius" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Bairro</Subheading>
        <TextInput
          label="Bairro"
          placeholder="Bairro"
          value={bairro}
          onChangeText={value => {
            setBairro(value)
          }}
          right={<TextInput.Icon name="map-marker-radius" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Cidade</Subheading>
        <TextInput
          label="Cidade"
          placeholder="Cidade"
          value={cidade}
          onChangeText={value => {
            setCidade(value)
          }}
          right={<TextInput.Icon name="map-marker-radius" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Estado</Subheading>
        <TextInput
          label="Estado"
          placeholder="Estado"
          value={estado}
          onChangeText={value => {
            setEstado(value)
          }}
          right={<TextInput.Icon name="map-marker-radius" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>CEP</Subheading>
        <TextInput
          label="CEP"
          placeholder="CEP"
          value={cep}
          onChangeText={value => {
            setCep(value)
          }}
          right={<TextInput.Icon name="map-marker-radius" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Whatsapp</Subheading>
        <TextInput
          label="Whatsapp"
          placeholder="Whatsapp"
          value={whatsapp}
          onChangeText={value => {
            setWhatsapp(value)
          }}
          right={<TextInput.Icon name="whatsapp" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>E-mail</Subheading>
        <TextInput
          label="E-mail"
          placeholder="exemlo@exemplo.com"
          right={<TextInput.Icon name="email" color="lightgrey" />}
          style={{ width: '85%', color: '#73D408' }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
        />
        <Subheading style={{ alignSelf: 'flex-start', marginTop: '3%', marginLeft: '10%', color: 'green' }}>Senha</Subheading>
        <TextInput
          label="Senha"
          placeholder="**********"
          right={<TextInput.Icon name="eye" color="lightgrey" />}
          style={{ width: '85%', }}
          mode="outlined"
          raised theme={{ roundness: 9 }}
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: '5%', }}>
        <Button
          onPress={handleAdd}
          mode="contained"
          raised theme={{ roundness: 9 }}
          style={{ width: '85%', height: '20%', justifyContent: 'center', elevation: 0 }}
        >
          Cadastrar
        </Button>
        <Button
          mode="text"
          raised theme={{ roundness: 6 }}
          style={{ width: '50%', marginTop: '3%', }}
        >
          Cancelar
        </Button>
      </View>
    </ScrollView>


  )
}

export default CadastroUsuario