import React from 'react';
import { Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Guardados from './views/Guardados';
import Inicio from './views/Inicio';

//Defieniendo la navegacion
const Tab = createMaterialBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Inicio'
          component={Inicio}
          options={{
            tabBarIcon: ({focused}) => (
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
          name='Guardados'
          component={Guardados}
          options={{
            tabBarIcon: ({focused}) => (
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
  );
}

export default App;
