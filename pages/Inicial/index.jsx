import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function Inicial({ navigation }) {
    const login = () => {
        navigation.navigate('Login');
    };
    const criarConta = () => {
        navigation.navigate('CadastroMenu');
    };

    return (
        <ImageBackground
            source={require('../../assets/images/wallpaper-index.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.containerChild}>
                <Text style={styles.title}>
                    O banco digital feito para você :)
                </Text>
                <View style={styles.containerRow}>
                    <View style={{ width: '55%' }}>
                        <LocalButton
                            text="Começar"
                            onPress={criarConta}
                        />
                    </View>
                    <View style={styles.icon}><Icon name="apple" size={25} color="#fff" /></View>
                    <View style={styles.icon}><Icon name="google" size={25} color="#fff" /></View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.link}>
                        Já possui uma conta?
                    </Text>
                    <TouchableOpacity onPress={login}>
                        <Text style={styles.linkBold}> Fazer Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
