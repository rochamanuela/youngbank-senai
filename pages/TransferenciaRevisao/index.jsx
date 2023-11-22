import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocalButton from "../../components/LocalButton";

import styles from "./styles";

export default function TransferenciaRevisao({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const voltar = () => {
        navigation.navigate('TransferenciaInicial');
    };

    const prosseguir = () => {
        navigation.navigate('TransferenciaComprovante');
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
                        <Text style={styles.textSmall2}>R$ 1.300,00</Text>
                        <Feather name="eye-off" size={15} color="#969696" />
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
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Clique em confirmar para autenticar sua transação</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}