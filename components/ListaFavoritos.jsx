import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

const ListaFavoritos = ({datos}) => {
  //Almacenando los favoritos en un array
  const [favoritos, setFavorito] = useState([]);

  console.log(datos);
  // Añadir los datos al array de favoritos cuando cambia
  useEffect(() => {
    if (datos) {
      setFavorito(prevFavoritos => [...prevFavoritos, datos]);
    }
  }, [datos]);

  return (
    <View>
      <ScrollView>
        {favoritos.length === 0 ? (
          <>
            <Text>No hay favoritos</Text>
          </>
        ) : (
          favoritos.map((item, index) => (
            <>
              <Text key={index}>{item.temp}</Text>
              <Text key={index}>{item.name}</Text>
              <Text>{item.contry}</Text>
              <Text>{item.descriptions}</Text>
            </>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ListaFavoritos;
