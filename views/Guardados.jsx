import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Guardados = () => {
  return (
    <View>
        <Text style={styles.mainTitle}>Favoritos</Text>
        <View>
          <Text>Hola</Text>
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
