import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function Cadastro({navigation}) {
    const cadastrar = () => {
        navigation.navigate('MensagemCadastro');
    };

    const voltar = () => {
        navigation.navigate('CadastroMenu');
    };

    const [checked, setChecked] = useState(false);

    // campos de informações cadastrais
    const [nome, setNome] = useState('')
    const [dataAbertura, setDataAbertura] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [numero, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
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
                <View>
                    <Text style={styles.textSmall}>Para criar sua conta Young, preencha o formulário abaixo.</Text>
                </View>
                <ScrollView style={styles.form}>
                    <Text style={styles.textMedium}>
                        Informações Cadastrais
                    </Text>

                    {/*
                    nome, dataabertura, cnpj, numero, email, senha
                    */}

                    <LocalInput
                        placeholderText="Nome da empresa"
                        onChangeText={(e) => setNome(e)}
                        valor={nome}
                    />

                    <LocalInput
                        placeholderText="Data de abertura"
                        onChangeText={(e) => setDataAbertura(e)}
                        valor={dataAbertura}
                    />

                    <LocalInput
                        placeholderText="CNPJ"
                        onChangeText={(e) => setCnpj(e)}
                        valor={cnpj}
                    />

                    <LocalInput
                        placeholderText="Número de telefone ou celular"
                        onChangeText={(e) => setNumero(e)}
                        valor={numero}
                    />

                    <LocalInput
                        placeholderText="E-mail"
                        onChangeText={(e) => setEmail(e)}
                        valor={email}
                    />

                    <LocalInput
                        placeholderText="Senha"
                        onChangeText={(e) => setSenha(e)}
                        valor={senha}
                        secureTextEntry={true}
                    />

                    <CheckBox
                        title="Declaro que li, estou ciente e concordo com os Termos e Políticas de Privacidade e Segurança Young."
                        checked={checked}
                        onPress={() => setChecked(!checked)}

                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                        style={styles.containerCheck}
                        checkedColor="#EEA243"
                        uncheckedColor="gray"
                    />

                    <LocalButton
                        text="Confirmar"
                        onPress={cadastrar}
                    />
                </ScrollView>
            </View>
        </View>

    )
}