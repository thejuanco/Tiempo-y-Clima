import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaFavoritos = ({datos}) => {
  //Almacenando los favoritos en un array
  const [favoritos, setFavorito] = useState([]);
  const [dataStorage, setDataStorage] = useState('')

  // Añadir los datos al array de favoritos cuando cambia
  useEffect(() => {
    if (datos) {
      setFavorito(prevFavoritos => {
        const exists = prevFavoritos.some(item => item.name === datos.name && item.temp === datos.temp)
        if(!exists){
          return [...prevFavoritos, datos];
        }
        return prevFavoritos; //Si ya existen, no lo agrega
      });
    }
  }, [datos]);

  //Obtener los datos del storage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys(); // Obtiene todas las claves del almacenamiento
        const storedItems = await AsyncStorage.multiGet(keys); // Obtiene los valores correspondientes
        const parsedItems = storedItems.map(item => JSON.parse(item[1])); // Convierte los datos a JSON
        setFavorito(parsedItems);
      } catch (error) {
        console.error('Error al cargar los favoritos', error);
      }
    };
  
    loadFavorites(); // Llamada inicial para cargar los datos almacenados
  }, []);


  const deleteFavorites = async (index) => {
    try {
      const favoriteToDelete = favoritos[index];
      await AsyncStorage.removeItem(`clima_${favoriteToDelete.id}`);
      setFavorito(preveFavoritos => preveFavoritos.filter((_, i) => i !== index))
    } catch (error) {
      console.error('Error al eliminar los favoritos', error);
    }
  }

  return (
    <>
      <View>
        {favoritos.length === 0 ? (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80,
              }}>
              <Image
                source={require('../src/img/empty.png')}
                style={styles.image}
              />
              <Text style={styles.favorite}>No hay favoritos</Text>
            </View>
          </>
        ) : (
          favoritos.map((item, index) => (
            <>
              <View style={styles.contenedor} key={item.id}>
                <Text style={styles.number}>
                  {item.temp}°
                </Text>

                <View style={styles.contenedorDesc}>
                  <Text style={styles.titleWeather}>{item.descriptions}</Text>
                  <Text style={styles.titleDescription}>
                    {item.name}, {item.contry}
                  </Text>
                  
                </View>

                <Image
                  source={require('../src/img/nube-sol.png')}
                  style={styles.mainImage}
                />
                <Button
                  icon={({size, color}) => (
                    <Image
                      source={require('../src/img/basura.png')}
                      style={{width: size, height: size, tintColor: color}}
                    />
                  )}
                  style={{textAlign: 'center', width: '100%', marginTop: 10}}
                  mode="contained-tonal"
                  onPress={() => deleteFavorites(index)}
                >
                  Remover de favoritos
                </Button>
              </View>
            </>
          ))
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  number: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  titleWeather: {
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  titleDescription: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'left',
    color: '#77818F',
  },
  mainImage: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },contenedorDesc: {
    flexDirection: 'col',
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  mainImage: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  favorite: {
    textAlign: 'center',
    fontSize: 20,
  }
});

export default ListaFavoritos;
