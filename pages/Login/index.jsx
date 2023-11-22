import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image } from "react-native";
import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View>
      </View>
      <Image
        source={require("../../assets/images/gradient-curve.png")}
        style={styles.image}
      />
      <View style={styles.containerChild}>
        <Image
          source={require("../../assets/images/logo-youngbank.png")}
          style={styles.imageLogo}
        />

        {/*Campo para o email*/}
        <LocalInput
          placeholderText="E-mail"
          onChangeText={(e) => setEmail(e)}
        />

        {/*Campo para a senha*/}
        <LocalInput
          placeholderText="Senha"
          onChangeText={(e) => setSenha(e)}
        />

        <View>
          <LocalButton
            text="Entrar na Conta"
            onPress={() => alert('Botão clicado!')}
          />
        </View>

        <View>
          <Text style={styles.link}>
            Não possui uma conta?
            <Text style={styles.linkBold}> Criar uma</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
