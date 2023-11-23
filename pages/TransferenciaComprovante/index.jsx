import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function TransferenciaComprovante({ navigation }) {
    const voltar = () => {
        navigation.navigate('Home');
    };
    const transferir = () => {
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
                </View>

                <View style={styles.valorTransferencia}>
                    <View style={styles.green}>
                    <MaterialIcons name="done" size={30} color="#fff" />
                    </View>
                    <Text style={styles.textSmall}>Transferência concluída</Text>
                    <Text style={styles.textValue}>R$ 150,00</Text>
                </View>

                <View style={styles.line} />

                <View>
                    <Text style={styles.textMedium}>Sobre a transferência</Text>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Data do pagamento</Text>
                        <Text style={styles.textSmall2}>Segunda, 31/07/2023</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Horário</Text>
                        <Text style={styles.textSmall2}>05h40</Text>
                    </View>
                </View>

                <View style={styles.line} />

                <View>
                    <Text style={styles.textMedium}>Quem recebeu</Text>
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
                </View>

                <View style={styles.line} />

                <View>
                    <Text style={styles.textMedium}>Quem transferiu</Text>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Nome</Text>
                        <Text style={styles.textSmall2}>Manuela Rocha de Souza</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>CPF/CNPJ</Text>
                        <Text style={styles.textSmall2}>***.961.488-**</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textSmallGray}>Instituição</Text>
                        <Text style={styles.textSmall2}>YoungBank</Text>
                    </View>
                </View>

                <View style={styles.final}>
                    <LocalButton
                        text="Compartilhar comprovante"
                        onPress={voltar}
                    />
                    <TouchableOpacity
                    style={styles.btnSecondary}
                    onPress={transferir}
                    >
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'bold' }}>Realizar nova transferência</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}