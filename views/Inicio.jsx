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

  //Consultar la URL de la API
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})

  //Extrayendo la ciudad y pais del state
  const {ciudad , pais } = busqueda

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.contenedorPrincipal}>
      <Formulario
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        setConsultar={setConsultar}
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
