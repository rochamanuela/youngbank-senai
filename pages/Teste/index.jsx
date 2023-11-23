import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Teste = () => {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);

  const toggleSaldo = () => {
    setMostrarSaldo(!mostrarSaldo);
  };

  return (
    <View style={styles.container}>
      {/* Outro conteúdo da tela aqui */}
      <Text style={styles.titulo}>Seu Aplicativo</Text>

      {mostrarSaldo && (
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoValor}>R$ 1.000,00</Text>
        </View>
      )}

      {!mostrarSaldo && (
        <View style={styles.saldoOcultoContainer}>
          <Text style={styles.saldoOcultoTexto}></Text>
        </View>
      )}

      <TouchableOpacity onPress={toggleSaldo} style={styles.botaoToggle}>
        <Icon name={mostrarSaldo ? 'eye-slash' : 'eye'} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  saldoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  saldoLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  saldoValor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saldoOcultoContainer: {
    backgroundColor: 'gray',
    padding: 3,
    borderRadius: 5,
    marginBottom: 10,
    width: 80
  },
  saldoOcultoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoToggle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Teste;
