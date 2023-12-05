import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function Emprestimo({navigation}) {
    const voltar = () => {
        navigation.navigate('Home');
    };

    const calcularJuros = () => {

    }

    const [checked, setChecked] = useState(false);
    
    const [valorEmprestimo, setValorEmprestimo] = useState('')
    const [numeroParcelas, setNumeroParcelas] = useState('')
    
    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={voltar} >
                        <Feather name="arrow-left" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textRegular}>Empréstimo</Text>
                    <Feather name="info" size={25} color="#fff" />
                </View>
                <View>
                    <Text style={styles.textSmall}>Para solicitar empréstimo aqui na Young, preencha o formulário abaixo.</Text>
                </View>
                <ScrollView style={styles.form}>
                    <LocalInput
                        placeholderText="Valor"
                        onChangeText={(e) => setValorEmprestimo(e)}
                        valor={valorEmprestimo}
                    />

                    <LocalInput
                        placeholderText="N° de parcelas para pagamento"
                        onChangeText={(e) => setNumeroParcelas(e)}
                        valor={numeroParcelas}
                    />

                    <LocalButton
                        text="Calcular Juros"
                        onPress={calcularJuros}
                    />

                    <Text style={styles.textRegular2}>
                        Porcentagem dos juros que serão cobrados de acordo com número de parcelas que você solicitou
                    </Text>
                    <Text style={styles.textMedium}>10% de juros = R$ 125,00</Text>

                    <LocalButton
                        text="Solicitar Empréstimo"
                        onPress={voltar}
                    />
                </ScrollView>
            </View>
        </View>

    )
}