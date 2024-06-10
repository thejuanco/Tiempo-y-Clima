import React, { useState } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'

//Importando componentes
import Formulario from '../components/Formulario'

const Inicio = () => {

  //Defiendo el estado para la barra de busqueda
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.contenedorPrincipal}>
      <Formulario
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
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
