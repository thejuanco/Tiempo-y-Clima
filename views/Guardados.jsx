import React from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import { Text } from 'react-native-paper'
import ListaFavoritos from '../components/ListaFavoritos'

const Guardados = ({route}) => {

  const datos = route.params;

  return (
    <View>
        <Text style={styles.mainTitle}>Favoritos</Text>
        <ScrollView
          style={styles.container}
        >
          <ListaFavoritos
            style={{flex: 1}}
            datos={datos}
          />
        </ScrollView>
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
  },
  container: {
    marginHorizontal: 20,
    marginBottom: 80,
    marginTop: 10
  }
})

export default Guardados
