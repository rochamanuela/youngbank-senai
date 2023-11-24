import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function Historico({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    useEffect(() => {
        let timer;
        if (modal2Visible) {
            timer = setTimeout(() => {
                navigation.navigate('TransferenciaComprovante');
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [modal2Visible]);


    const abrirModal = () => {
        setModalVisible(!modalVisible);
    };

    const abrirModal2 = () => {
        setModal2Visible(true);
    };

    const handlePress = () => {
        abrirModal();
        abrirModal2();
    };

    const voltar = () => {
        navigation.navigate('TransferenciaInicial');
    };

    const prosseguir = () => {
        navigation.navigate('TransferenciaComprovante');
    };

    // mostrar e ocultar o saldo
    const [mostrarSaldo, setMostrarSaldo] = useState(true);
    const toggleSaldo = () => {
        setMostrarSaldo(!mostrarSaldo);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={voltar} style={{ width: 30 }}>
                        <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Extrato</Text>
                    <Text style={styles.textCamuflado}>A</Text>
                </View>

                <View style={styles.containerSaldo}>
                    <Text style={styles.textSmall}>Saldo em conta</Text>
                    <View style={styles.right}>
                        {mostrarSaldo && (
                            <View style={styles.saldoContainer}>
                                <Text style={styles.textMediumSaldo}>R$ 1.300,00</Text>
                            </View>
                        )}

                        {!mostrarSaldo && (
                            <View style={styles.saldoOcultoContainer}>
                                <Text style={styles.saldoOcultoTexto}></Text>
                            </View>
                        )}
                        <TouchableOpacity onPress={toggleSaldo} style={styles.botaoToggle}>
                            <Feather name={mostrarSaldo ? 'eye-off' : 'eye'} size={15} color="#969696" />
                        </TouchableOpacity>
                    </View>
                </View>



                <View>
                    <Text style={styles.textMedium}>Julho</Text>
                    <View style={styles.line} />

                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix enviado</Text>
                            <Text style={styles.textEnviado}>R$ 150,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>31/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix enviado</Text>
                            <Text style={styles.textEnviado}>R$ 50,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>30/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 20,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>30/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 200,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>29/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 60,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>28/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 2,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>20/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 185,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>14/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                </View>
                <View>
                    <Text style={styles.textMedium}>Junho</Text>
                    <View style={styles.line} />

                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix enviado</Text>
                            <Text style={styles.textEnviado}>R$ 150,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>31/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix enviado</Text>
                            <Text style={styles.textEnviado}>R$ 50,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>30/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                    <View style={styles.containerTransferencia}>
                        <View style={styles.containerValor}>
                            <Text style={styles.textSmallGray}>Pix recebido</Text>
                            <Text style={styles.textRecebido}>R$ 20,00</Text>
                        </View>
                        <Text style={styles.textMedium2}>30/07/2023</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>
                </View>
            </View>
        </View>
    )
}