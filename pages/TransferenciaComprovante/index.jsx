import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function TransferenciaComprovante({ navigation }) {
    const voltar = () => {
        navigation.navigate('TransferenciaInicial');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={voltar} style={{ width: 30 }}>
                        <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Comprovante</Text>
                    <Text style={styles.textCamuflado}>A</Text>
                </View>

                <View style={styles.valorTransferencia}>
                    <Text style={styles.textValue}>R$ 150,00</Text>
                </View>

                <View style={styles.line} />

                <View>
                    <Text style={styles.textMedium}>Dados de quem recebeu</Text>

                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Nome</Text>
                        <Text style={styles.textSmall2}>Eliana Rocha de Souza</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>CPF/CNPJ</Text>
                        <Text style={styles.textSmall2}>***.487.798-**</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Instituição</Text>
                        <Text style={styles.textSmall2}>NuBank</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Chave de email</Text>
                        <Text style={styles.textSmall2}>eliana@gmail.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallPurple}>Adicionar mensagem</Text>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.row2}>
                    <Feather name="heart" size={24} color="#C77DFF" />
                    <Text style={styles.textSmallBold}>Salvar como favorito</Text>
                </View>

                <View style={styles.line} />

                <View style={styles.final}>
                    <LocalButton
                        text="Compartilhar comprovante"
                        onPress={voltar}
                    />
                    <LocalButton
                        text="Realizar nova transferência"
                        style = {{
                            backgroundColor: 'red'
                        }}
                        onPress={voltar}
                    />
                </View>
            </View>
        </View>
    )
}