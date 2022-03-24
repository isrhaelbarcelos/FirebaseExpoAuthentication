import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import firebase from '../../firebase'
import * as React from 'react';
import { useState } from 'react';
import { TextInput, Text, Button, Surface, Searchbar, 
  Avatar, Card, Title, Caption, Headline, List, Divider } from 'react-native-paper';

export function Carrinho() {

    return (  
        
      <><View style={{ alignItems: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
        <Title style={{ marginTop: '5%', color: 'green' }}>Detalhes da Compra</Title>
        <Caption style={{ color: 'grey' }}>Acesse com</Caption>
        
      </View>
      <ScrollView style={{ width: "100%", height: 'auto' }}>
          
          <Surface style={{
            padding: 8,
            height: 'auto',
            width: '95%',
            elevation: 2,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: '5%'
          }}>
            <TouchableOpacity onPress={console.log("teste")}>
              <List.Item
                title="Meus Pedidos"
                left={props => <Avatar.Image size={70} source={require('../../teste.jpg')}
                style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />} /></TouchableOpacity><Divider />
            <TouchableOpacity onPress={console.log("teste")}>
              <List.Item
                title="Minhas Vendas"
                left={props => <Avatar.Image size={70} source={require('../../teste.jpg')}
                style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />} /></TouchableOpacity><Divider />
            <TouchableOpacity onPress={console.log("teste")}>
              <List.Item
                title="Favoritos"
                left={props => <Avatar.Image size={70} source={require('../../teste.jpg')}
                style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />} /></TouchableOpacity><Divider />
            <TouchableOpacity onPress={console.log("teste")}>
              <List.Item
                title="Doações"
                left={props => <Avatar.Image size={70} source={require('../../teste.jpg')}
                style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />} /></TouchableOpacity><Divider />
            <TouchableOpacity onPress={console.log("teste")}>
              <List.Item
                title="Ajuda"
                left={props => <Avatar.Image size={70} source={require('../../teste.jpg')}
                style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderColor: 'green', alignSelf: 'center' }} />} /></TouchableOpacity>
          </Surface>

          <View style={{ alignItems: 'center', marginTop: '5%', }}>
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
          </View>
          </ScrollView></>
          )

          }
          export default Carrinho