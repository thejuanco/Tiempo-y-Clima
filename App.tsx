import React from 'react';
import { Image, View, StyleSheet } from 'react-native'
//Inactiva por el momento
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';

import Guardados from './views/Guardados';
import Inicio from './views/Inicio';

//Defieniendo la navegacion
const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: styles.navigation,
            tabBarItemStyle: styles.itemStyle,
            tabBarActiveBackgroundColor: '#d0d0edff',
            tabBarActiveTintColor: '#000000ff',
            tabBarInactiveTintColor: '#0007',
            
          })}
        >
          <Tab.Screen
            name='Inicio'
            component={Inicio}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused ?
                      require('./src/img/homeNegro.png') :
                      require('./src/img/home.png')
                  }
                  style={{
                    height: 22, width: 22
                  }}
                />
              )
            }}
          />

          <Tab.Screen
            name='Favoritos'
            component={Guardados}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused ?
                      require('./src/img/guardarNegro.png') :
                      require('./src/img/guardar.png')
                  }
                  style={{
                    height: 22, width: 22
                  }}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: 75,
    backgroundColor: '#E6E6FA',
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 45,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  itemStyle: {
    paddingVertical: 9,
    margin: 10,
    borderRadius: 50,

  }
})

export default App;
