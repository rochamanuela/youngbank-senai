import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";
import styles from "./styles";

export default function Home({ navigation }) {
    const [data, setData] = useState({})
    const [dataCC, setDataCC] = useState({})
    const [loading, setLoading] = useState(true)

    const { token } = useSelector(state => {
        return state.userReducer
    })

    const fetchData = async () => {
        try {
            const cliente = await axiosInstance.get('conta/',
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            )
            setData(cliente.data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
            console.log(cliente.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const fetchDataCC = async () => {
        try {
            const cartao = await axiosInstance.get('cartao/',
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            )
            setDataCC(cartao.data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
            console.log(cartao.data)
        } catch (error) {
            console.log(error.response.data)
        }

    }

    useEffect(() => {
        fetchData()
        fetchDataCC()
    }, [])

    // rotas das áreas do app
    const tranferir = () => {
        navigation.navigate('TransferenciaInicial');
    };

    const extrato = () => {
        navigation.navigate('Historico');
    };

    const emprestimo = () => {
        navigation.navigate('Emprestimo');
    };

    const [mostrarSaldo, setMostrarSaldo] = useState(true);

    const toggleSaldo = () => {
        setMostrarSaldo(!mostrarSaldo);
    };

    return (
        !loading ? (
            <View style={styles.container}>
                <View style={styles.containerChild}>
                    {/*header, onde fica a foto e nome do user, e menu*/}
                    <View style={styles.header}>
                        <View style={styles.icon}>
                            <FontAwesome name="user" size={25} color="#ccc" />
                        </View>
                        <Text style={styles.textNameUser}>Olá, {data[0].cliente_pf.nome}</Text>
                        <View style={styles.left}>
                            <Ionicons name="menu" size={25} color="#ccc" />
                        </View>
                    </View>

                    {/*aqui fica o valor da conta*/}
                    <View style={styles.saldoRow}>
                        {mostrarSaldo && (
                            <View style={styles.saldoContainer}>
                                <Text style={styles.saldoValor}>R$ {data[0].saldo}</Text>
                            </View>
                        )}

                        {!mostrarSaldo && (
                            <View style={styles.saldoOcultoContainer}>
                                <Text style={styles.saldoOcultoTexto}></Text>
                            </View>
                        )}

                        <TouchableOpacity onPress={toggleSaldo} style={styles.botaoToggle}>
                            <Feather name={mostrarSaldo ? 'eye-off' : 'eye'} size={20} color="#C77DFF" />
                        </TouchableOpacity>
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
                            <TouchableOpacity onPress={tranferir}>
                                <View style={styles.item}>
                                    <MaterialIcons name="compare-arrows" size={22} color="#fff" />
                                    <Text style={styles.textRegular}>Transferir</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={extrato}>
                                <View style={styles.item2}>
                                    <MaterialIcons name="attach-money" size={22} color="#fff" />
                                    <Text style={styles.textRegular}>Comprovantes</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.operationsChild}>
                            <View style={styles.item2}>
                                <MaterialCommunityIcons name="barcode" size={22} color="#fff" />
                                <Text style={styles.textRegular}>Pagar</Text>
                            </View>
                            <TouchableOpacity onPress={extrato}>
                                <View style={styles.item}>
                                    <MaterialCommunityIcons name="history" size={22} color="#fff" />
                                    <Text style={styles.textRegular}>Extrato</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <AntDesign name="creditcard" size={25} color="#fff" />
                        <Text style={styles.textRegular}>Meus cartões</Text>
                    </View>
                    <View style={styles.credit}>
                        <Text style={styles.textRegular}>Cartão de crédito</Text>
                        <Text style={styles.textSmall}>Limite disponível</Text>
                        <Text style={styles.textMedium}>R$ {dataCC.length > 0 ? dataCC[0].limite : 'N/A'}</Text>
                    </View>
                    <TouchableOpacity onPress={emprestimo}>
                        <View style={styles.card}>
                            <FontAwesome name="money" size={25} color="#fff" />
                            <Text style={styles.textRegular}>Solicitar Empréstimo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={30} color={'#000'} />
            </View>
        )
    )
}