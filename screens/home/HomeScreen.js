import { useNavigation } from '@react-navigation/core'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import firebase from '../../firebase'
import * as React from 'react';
import { useState } from 'react';
import { TextInput, Text, Button, Surface, Searchbar, 
  Avatar, Card } from 'react-native-paper';


const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [tipolixo, setTipolixo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [open, setOpen, aberto] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  async function handleAdd() {
    await firebase.firestore().collection('propostas')
      .add({
        nome: nome,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        tipolixo: tipolixo,
        mensagem: mensagem
      })
      .then(() => {
        handleClick();
        setNome('');
        setCep('');
        setEndereco('');
        setBairro('');
        setCidade('');
        setEstado('');
        setTipolixo('');
        setMensagem('');
      })
      .catch((error) => {
        handleClick();
        console.log('ERRO: ' + error);
      })
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (  

      <><Surface style={styles.surface}>
      <Text>Surface</Text>
    </Surface><View style={{ width: '90%', alignSelf: 'center', position: 'absolute', marginTop: '60%' }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery} />
      </View><View style={{ width: '80%', alignSelf: 'center', marginTop: '10%' }}>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
      </View><View style={{ marginTop: '5%' }}>

        <Button icon="logout" mode="contained" onPress={handleSignOut}>
          Sair
        </Button>
      </View>
        </>

    
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    backgroundColor: '#009b00',
  },
  searchbar: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
