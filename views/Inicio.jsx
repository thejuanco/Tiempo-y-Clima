import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { Dialog, Portal, Text } from 'react-native-paper'

//Importando componentes
import Formulario from '../components/Formulario'
import Clima from '../components/Clima'

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

  //Consultando la API
  useEffect(() => {
    const consultarClima = async () => {
      if(consultar) {
        //El API Key de la api
        const appId = '8302505d9facb1f23ef6ea0f15b5b6bb'
        //le pasamos el pais, ciudad y la api key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url)
          const resultado = respuesta.json()
          //Reiniciamos el state para futuras consultas
          setResultado(resultado)
          setConsultar(false)

          //Modifica los colores de fondo basado en la temperatura
          const kelvin = 273.15
          const { main } = resultado
          //const actual = main.temp - kelvin

          //Si el pais no existe muestra una alerta
          if(respuesta.status === 404){
            console.log("No existe el pais")
            return
          }
          console.log(url)
        } catch (error) {
          console.log(error)
        }
      }
    }

    consultarClima()
  }, [consultar])

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.contenedorPrincipal}>
      <Clima
        resultado={resultado}
      />
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
