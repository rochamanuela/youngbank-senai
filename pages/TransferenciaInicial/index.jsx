import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function TransferenciaInicial({ navigation }) {
    const cancel = () => {
        navigation.navigate('Home');
    };

    const revisar = () => {
        navigation.navigate('TransferenciaRevisao');
    };

    // campos para dados da transação
    const [chave, setChave] = useState('')
    const [valor, setValor] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <TouchableOpacity onPress={cancel} style={{ width: 30 }}>
                    <MaterialCommunityIcons name="close" size={30} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.textMedium}>Chave</Text>

                {/*Campo para o inserir a chave da conta de destino*/}
                <LocalInput
                    placeholderText="CPF, CNPJ, celular, e-mail ou aleatória"
                    onChangeText={(e) => setChave(e)}
                />

                <View style={styles.containerSaldo}>
                    <Text style={styles.textSmall}>Saldo em conta</Text>
                    <View style={styles.right}>
                        <Text style={styles.textSmall2}>R$ 1.300,00</Text>
                        <Feather name="eye-off" size={15} color="#969696" />
                    </View>
                </View>

                <View style={styles.valorTransferencia}>
                    <TextInput
                        style={styles.inputValue}
                        defaultValue="R$ 0,00"
                        onChangeText={(e) => setValor(e)}
                    />
                    <Text style={styles.textSmall}>Transferir para</Text>
                    <Text style={styles.textSmall}>Eliana Rocha</Text>
                </View>

                <View>
                    <TouchableOpacity style={{width: 48, alignSelf: 'flex-end'}} onPress={revisar}>
                        <LinearGradient
                            colors={['#EEA243', '#C77DFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                padding: 10,
                                alignItems: 'center',
                                borderRadius: 50,
                            }}
                        >
                            <Feather name="arrow-right" size={25} color="#000" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}