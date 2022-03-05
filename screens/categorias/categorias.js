import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import firebase from '../../firebase'
import * as React from 'react';
import { useState } from 'react';
import {
  TextInput, Divider, Button, Surface, Searchbar,
  Avatar, IconButton, Subheading, Menu
} from 'react-native-paper';

export function Categoria() {

  return (

<ScrollView style={{  flexGrow: 1 }}>

      <Surface style={{
        padding: 0.4,
        height: 'auto',
        elevation: 0,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'transparent'
      }}>
        <View style={{ alignItems: 'center' }}>
          <IconButton
            icon="laptop"
            size={40}
            color="#009b00"
            onPress={() => console.log('Pressed')} />
          <Subheading style={{ color: 'grey' }}>Notebook</Subheading>
        </View>

        <View style={{ alignItems: 'center' }}>
        <IconButton
          icon="desktop-classic"
          size={40}
          color="#009b00"
          onPress={() => console.log('Pressed')} />
        <Subheading style={{ color: 'grey' }}>Desktop</Subheading>
      </View>
    </Surface>
    
    <Surface style={{
      height: 'auto',
      elevation: 0,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: '#fff'
    }}>
        <View style={{ alignItems: 'center' }}>
        <IconButton
          icon="printer"
          size={40}
          color="#009b00"
          onPress={() => console.log('Pressed')} />
        <Subheading style={{ color: 'grey' }}>Impressora</Subheading>
      </View>
      <View style={{ alignItems: 'center' }}>
        <IconButton
          icon="cellphone-text"
          size={40}
          color="#009b00"
          onPress={() => console.log('Pressed')} />
        <Subheading style={{ color: 'grey' }}>Celular</Subheading>
      </View>

      </Surface>
      
      <Surface style={{
          padding: 8,
          width: '90%',
          elevation: 2,
          alignSelf: 'center',
          borderRadius: 6,
          marginTop: '8%',
        }}>

          
<View style={{ flexGrow: 1 }}>
    <Menu.Item icon="laptop" onPress={() => {}} title="Notebooks"/>
    <Divider />
    <Menu.Item icon="television-classic" onPress={() => {}} title="Monitores e Televisores" />
    <Divider />
    <Menu.Item icon="desktop-classic" onPress={() => {}} title="Desktops" />
    <Divider />
    <Menu.Item icon="gamepad" onPress={() => {}} title="Vídeo-Games" />
    <Divider />
    <Menu.Item icon="lightbulb-on" onPress={() => {}} title="Iluminação" />
    <Divider />
    <Menu.Item icon="air-conditioner" onPress={() => {}} title="Ar Condicionado" />
    <Divider />
    <Menu.Item icon="cellphone-text" onPress={() => {}} title="Celulares" />
    <Divider />
    
  </View>

    
          </Surface>
          </ScrollView>
    
  )

}
export default Categoria