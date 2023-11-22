import React, { useEffect } from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

const MensagemCadastro = () => {
  const navigation = useNavigation(); // Adicionado

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/background-image-sucess-message.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.containerChild}>
        <Image
          source={require("../../assets/images/ok-gradient.png")}
          style={styles.image}
        />
        <Text style={styles.title}>
          Sua conta foi criada com sucesso!
        </Text>
        <Text style={styles.subTitle}>
          Seja bem-vindo à rede Young Bank
        </Text>
      </View>
    </ImageBackground>
  );
}

export default MensagemCadastro;
