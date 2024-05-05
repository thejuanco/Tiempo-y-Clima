import React, { useState } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { Text, TextInput, HelperText, Button } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'

const Inicio = () => {

  //Defiendo el estado para la barra de busqueda
  const [texto, setTexto] = useState('')

  const onChangeText = (texto) => setTexto(texto)

  const errorNum = () => {
    return texto.includes('1')
  }

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Aqui va la Ciudad</Text>
      <View style={styles.contenido}>
        
        <TextInput
          label='Ciudad o País'
          mode='outlined'
          value={texto}
          onChangeText={onChangeText}
          onBlur={() => ocultarTeclado()}
        />
        <HelperText type='error' visible={errorNum()}>
          La cuidad no puede contener números
        </HelperText>
        <Button mode='elevated' style={styles.btnBuscar} onPress={() => {onChangeText}}>Buscar Clima</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    // backgroundColor: '#e2c8ea'
    marginHorizontal: '3.5%',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
  },
  contenido: {
    marginTop: 40,
  },
  btnBuscar: {
    marginVertical: 10,
  }
})

export default Inicio
