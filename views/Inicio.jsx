import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { Dialog, Portal, Text, Button } from 'react-native-paper'

//Importando componentes
import Formulario from '../components/Formulario'
import Clima from '../components/Clima'

const Inicio = () => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  //consultar la URL de la API
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [alerta, setAlerta] = useState(false)

  //Extrayendo la ciudad y pais del state
  const { ciudad, pais } = busqueda

  //Consultando la API
  useEffect(() => {

    const consultarClima = async () => {

      if (consultar) {
        //El API Key de la api
        const appId = '8302505d9facb1f23ef6ea0f15b5b6bb'
        //le pasamos el pais, ciudad y la api key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          //reiniciamos el state para futuras consultas
          setResultado(resultado)
          setConsultar(false)

          //Si el pais no existe muesta una alerta 
          if (respuesta.status === 404){
            setAlerta(true)
            return;
          }

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
    <>
      <View style={styles.contenedorPrincipal}>
        <Clima
          resultado={resultado}
        />
        <Formulario
          consultar={consultar}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar}
        />
      </View>
      <Portal>
        <Dialog
          visible={alerta}
          onDismiss={() => setAlerta(false)}
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Text variant='bodyMedium'>No se encontró el pais o ciudad</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlerta(false)}>Cerrar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
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
