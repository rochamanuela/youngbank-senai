import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function CadastroMenu({ navigation }) {
    const cadastrarPF = () => {
        navigation.navigate('CadastroPF');
    };

    const cadastrarPJ = () => {
        navigation.navigate('CadastroPJ');
    };

    const voltar = () => {
        navigation.navigate('Inicial');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={voltar} >
                        <Feather name="arrow-left" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textRegular}>Cadastro Young</Text>
                    <Feather name="info" size={25} color="#fff" />
                </View>
                <View style={styles.center}>
                    <Text style={styles.textRegular}>Antes de iniciar a criação de sua conta, poderia nos dizer se você é Pessoa Física ou Pessoa Jurídica?</Text>
                    <TouchableOpacity onPress={cadastrarPF} >
                        <View style={styles.containerOp}>
                            <Text style={styles.textMedium}>Pessoa Física</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cadastrarPJ} >
                        <View style={styles.containerOp2}>
                            <Text style={styles.textMedium}>Pessoa Jurídica</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}