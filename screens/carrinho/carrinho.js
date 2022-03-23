import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import firebase from '../../firebase'
import * as React from 'react';
import { useState } from 'react';
import { TextInput, Text, Button, Surface, Searchbar, 
  Avatar, Card, Title, Caption } from 'react-native-paper';

export function Carrinho() {

    return (  
        
      <><View style={{ alignItems: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
        <Title style={{ marginTop: '5%', color: 'green' }}>Detalhes da Compra</Title>
        <Caption style={{ color: 'grey' }}>Acesse com</Caption>
        <Avatar.Image size={90} source={require('../../teste.jpg')}
          style={{  marginTop:'-10%', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />
      </View>
      
      <View style={{ alignItems: 'center', marginTop: '25%', }}>
          <Button
            onPress={() => console.log('FINALIZA')}
            mode="contained"
            raised theme={{ roundness: 10 }}
            style={{ width: '90%', height: '27%', justifyContent: 'center', elevation: 0 }}
          >
            FINALIZAR COMPRA
          </Button>
          <Button
            onPress={() => console.log('CANCELA')}
            mode="text"
            raised theme={{ roundness: 6 }}
            style={{ width: '50%', marginTop: '3%', }}
          >
            Cancelar
          </Button>
        </View></>
      )

}
export default Carrinho