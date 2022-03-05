import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import firebase from '../../firebase'
import * as React from 'react';
import { useState } from 'react';
import { TextInput, Text, Button, Surface, Searchbar, 
  Avatar, Card } from 'react-native-paper';

export function Carrinho() {

    return (  
        <ScrollView>
            <View style={{ marginTop: '10%' }}>
              <Button icon="logout" mode="contained">
                Sair
              </Button>
            </View>
          </ScrollView>
      )

}
export default Carrinho