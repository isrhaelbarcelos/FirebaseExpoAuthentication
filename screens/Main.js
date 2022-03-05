import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './home/HomeScreen';
import Perfil from './perfil/perfil';
import Categoria from './categorias/categorias';
import Carrinho from './carrinho/carrinho';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Tab = createBottomTabNavigator();

export function Main() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#009b00',
      }}   
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{       
        headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categoria}
        options={{ 
          tabBarIcon: ({ size, color  }) => (
            <MaterialCommunityIcons name="format-list-bulleted-square" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{       
        headerShown: false,
          tabBarIcon: ({ size, color  }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{       
        headerShown: false,
          tabBarIcon: ({ size, color  }) => (
            <MaterialCommunityIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Main