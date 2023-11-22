import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./styles";

export default function Home({navigation}) {
    const tranferir = () => {
        navigation.navigate('Transferencia');
    };

    const comprovantes = () => {
        navigation.navigate('Comprovantes');
    };

    const extrato = () => {
        navigation.navigate('Extrato');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                {/*header, onde fica a foto e nome do user, e menu*/}
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <FontAwesome name="user" size={25} color="#ccc" />
                    </View>
                    <Text style={styles.textNameUser}>Olá, Manuela</Text>
                    <View style={styles.left}>
                        <Ionicons name="menu" size={25} color="#ccc" />
                    </View>
                </View>

                {/*aqui fica o valor da conta*/}
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 45 }}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 30,
                            marginRight: 15,
                            fontFamily: 'regular'
                        }}
                    >R$ 1.300,00</Text>
                    <Feather name="eye-off" size={20} color="#C77DFF" />
                </View>

                <Text
                    style={{
                        color: '#C77DFF',
                        fontFamily: 'regular',
                        marginTop: 10
                    }}
                >Ver extrato</Text>

                <View style={styles.operations}>
                    <View style={styles.operationsChild}>
                        <View style={styles.item}>
                        <MaterialIcons name="compare-arrows" size={22} color="#fff" />
                            <Text style={styles.textRegular}>Transferir</Text>
                        </View>
                        <View style={styles.item2}>
                        <MaterialIcons name="attach-money" size={22} color="#fff" />
                            <Text style={styles.textRegular}>Comprovantes</Text>
                        </View>
                    </View>
                    <View style={styles.operationsChild}>
                        <View style={styles.item2}>
                        <MaterialCommunityIcons name="barcode" size={22} color="#fff" />
                            <Text style={styles.textRegular}>Pagar</Text>
                        </View>
                        <View style={styles.item}>
                        <MaterialCommunityIcons name="history" size={22} color="#fff" />
                            <Text style={styles.textRegular}>Extrato</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <AntDesign name="creditcard" size={25} color="#fff" />
                    <Text style={styles.textRegular}>Meus cartões</Text>
                </View>
                <View style={styles.credit}>
                    <Text style={styles.textRegular}>Cartão de crédito</Text>
                    <Text style={styles.textSmall}>Limite disponível</Text>
                    <Text style={styles.textMedium}>R$ 250,00</Text>
                </View>
                <View style={styles.card}>
                    <FontAwesome name="money" size={25} color="#fff" />
                    <Text style={styles.textRegular}>Solicitar Empréstimo</Text>
                </View>
            </View>
        </View>
    )
}