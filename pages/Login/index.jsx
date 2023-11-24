import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, Alert, TouchableOpacity } from "react-native";
import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";
import LocalAlert from "../../components/LocalAlert";

import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [isAlertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  const entrar = () => {
    if (email === '' || senha === '') {
      alert('Por favor, preencha os dois campos.');
    } else {
      if (email === 'admin@gmail.com' && senha === 'senha123'){
        navigation.navigate('Home');
      }
      else {
        showAlert();
      }
    }
  }

  const criarConta = () => {
    navigation.navigate('CadastroMenu');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background-image-login.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.containerChild}>
        <Image
          source={require("../../assets/images/logo-youngbank.png")}
          style={styles.imageLogo}
        />

        {/*Campo para o email*/}
        <LocalInput
          placeholderText="E-mail"
          secureTextEntry={false}
          valor={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/*Campo para a senha*/}
        <LocalInput
          placeholderText="Senha"
          secureTextEntry={true}
          valor={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <View>
          <LocalButton
            text="Entrar na Conta"
            onPress={entrar}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.link}>
            Não possui uma conta?
          </Text>
          <TouchableOpacity onPress={criarConta}>
            <Text style={styles.linkBold}> Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LocalAlert
        isVisible={isAlertVisible}
        onClose={hideAlert}
        message="Credenciais inválidas"
      />

    </ImageBackground>

  );
}
