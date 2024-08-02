import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import ListaFavoritos from '../components/ListaFavoritos'

const Guardados = ({route}) => {

  const datos = route.params;

  return (
    <View>
        <View>
          <Text style={styles.mainTitle}>Favoritos</Text>
          <ListaFavoritos
            datos={datos}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    padding: 10
  }
})

export default Guardados
