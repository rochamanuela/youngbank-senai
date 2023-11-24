import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function TransferenciaRevisao({ navigation }) {
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
                    <Text style={styles.textHeader}>Revisão</Text>
                    <Text style={styles.textCamuflado}>A</Text>
                </View>

                <View style={styles.containerSaldo}>
                    <Text style={styles.textSmall}>Saldo em conta</Text>
                    <View style={styles.right}>
                        {mostrarSaldo && (
                            <View style={styles.saldoContainer}>
                                <Text style={styles.textSmall2}>R$ 1.300,00</Text>
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

                <View style={styles.valorTransferencia}>
                    <Text style={styles.textValue}>R$ 150,00</Text>
                    <Text style={styles.textSmall}>Eliana Rocha</Text>
                </View>

                <View style={styles.line} />

                <View>
                    <Text style={styles.textMedium}>Dados de quem vai receber</Text>

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

                <View style={styles.containerAviso}>
                    <AntDesign name="exclamationcircle" size={20} color="#EEA243" />
                    <Text style={styles.textSmall3}>Antes de realizar o pagamento, confira os dados de
                        quem irá receber e tenha cuidado com golpes.</Text>
                </View>

                <View style={styles.final}>
                    <LocalButton
                        text="Pagar"
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textSmall}>Clique em confirmar para autenticar sua transação</Text>
                        <View style={styles.btnContainer}>
                            <LocalButton
                                text="Confirmar"
                                onPress={handlePress}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal2Visible}
                onRequestClose={() => {
                    setModal2Visible(!modal2Visible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            source={require("../../assets/images/loading.gif")}
                            style={styles.modalImage}
                        />
                        <Text style={styles.textMedium2}>Processando transferência</Text>
                        <Text style={styles.textSmall}>Aguarde enquanto a transação é processsada</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}