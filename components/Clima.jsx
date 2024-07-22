import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const Clima = ({resultado}) => {
  const {name, main} = resultado;

  //Si no hay resultado, no mostrar nada
  if (!name) return null;

  //Grados kelvin
  const kelvin = 273.15;

  return (
    <View>
      <Text>Clima en tu ciudad</Text>
      <Text>{parseInt(main.temp - kelvin)} </Text>
    </View>
  );
};

export default Clima;
