import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button, Snackbar} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Formulario = ({busqueda, setBusqueda}) => {
  //Extraer los datos de la busqueda
  const {ciudad, pais} = busqueda;

  const [visible, setVisible] = useState(false);

  //SnackBar
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  //Validacion
  const consultarClima = () => {
    if (ciudad.trim() === '') {
        console.log('Estan vacios los campos de la busqueda');
      
      return;
    }
    setBusqueda({ciudad, pais});
  };

  return (
    <View>
      <View>
      
        <TextInput
          label="Ciudad"
          mode="outlined"
          value={ciudad}
        />
        <Picker
        //Añadir estilos al formulario
        // style={{ height: 120, backgroundColor: 'white', borderRadius: 15,}}
        selectedValue={pais}
        // onValueChange={ pais => setBusqueda({...busqueda, pais})}
        >
          <Picker.Item label="-- Seleccione un país --" value="" />
          <Picker.Item label="Mexico" value="MX" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="Francia" value="FR" />
        </Picker>

        <Button
          mode="elevated"
          onPress={() => {
            consultarClima(), onToggleSnackBar(true)
          }}>
          Buscar Clima
        </Button>
      </View>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Ingresa un ciudad o Pais
      </Snackbar>
    </View>
    
  );

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    }
})

};

export default Formulario;
