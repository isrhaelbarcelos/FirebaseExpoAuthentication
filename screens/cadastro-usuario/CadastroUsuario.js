import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import firebase from '../../firebase'
import { auth } from '../../firebase';
import * as React from 'react';
import { useState } from 'react';
import {
  TextInput, Divider, Button, Surface, Searchbar,
  Avatar, IconButton, Subheading, Menu, Text, RadioButton
} from 'react-native-paper';

export function CadastroUsuario() {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[idusuario, setIdUsuario] = useState('');
    const[nome, setNome] = useState('');
    const[cep, setCep] = useState('');
    const[endereco, setEndereco] = useState('');
    const[bairro, setBairro] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[tipo, setTipo] = useState('');

    const[user, setUser] = useState('false');
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

    async function handleAdd(){
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            alert('Usuário cadastrado com sucesso!')
            await firebase.firestore().collection('usuarios')
            .doc(value.user.uid)
            .set({
              nome: nome,
              cep: cep,
              endereco: endereco,
              bairro: bairro,
              cidade: cidade,
              estado: estado,
              whatsapp: whatsapp,
              tipo: 'Usuario'
            })
            firebase.auth().signOut();
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use'){
                alert('Este e-mail já está cadastrado! Informe sua senha apenas.');
            } else if (error.code === 'auth/weak-password'){
              alert('Senha muito fraca! Tente novamente.');
            } else if (error.code === 'auth/invalid-email'){
              alert('E-mail inválido! Tente novamente.');
            }
        })
      }

    return(
      
        <ScrollView>

<TextInput
                  fullWidth
                  margin="normal"
                  required
                  size="small"
                  id="email-form"
                  label="Email"
                  defaultValue="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)} />

                <TextInput
                  fullWidth
                  margin="normal"
                  required
                  size="small"
                  id="senha-form"
                  label="Senha"
                  defaultValue="Senha"
                  value={senha} onChange={(e) => setSenha(e.target.value)} />


                <TextInput
                  fullWidth
                  margin="normal"
                  required
                  size="small"
                  id="cliente-form"
                  label="Nome do cliente"
                  defaultValue="Cliente"
                  value={nome} onChange={(e) => setNome(e.target.value)} />
  
                {/*<TextInput
                  fullWidth
                  margin="normal"
                  size="small"
                  id="outlined-required"
                  label="CEP"
                  type="text"
                  defaultValue="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
  
                <TextInput
                  fullWidth
                  margin="normal"
                  size="small"
                  id="outlined-required"
                  label="Endereço"
                  type="text"
                  defaultValue="Rua" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
  
                <TextInput
                  fullWidth
                  margin="normal"
                  size="small"
                  id="outlined-required"
                  label="Bairro"
                  type="text"
                  defaultValue="Rua" value={bairro} onChange={(e) => setBairro(e.target.value)} />
  
                <TextInput
                  fullWidth
                  margin="normal"
                  size="small"
                  id="outlined-required"
                  label="Cidade"
                  type="text"
                  defaultValue="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
  
                <TextInput
                  fullWidth
                  margin="normal"
                  size="small"
                  id="outlined-textarea"
                  label="Whatsapp"
                  placeholder="Contato"
    multiline value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />*/}
  
                <Button fullWidth variant="outlined"
                  onPress={handleAdd}>Enviar Cadastro</Button>
        </ScrollView>


    )
}

export default CadastroUsuario