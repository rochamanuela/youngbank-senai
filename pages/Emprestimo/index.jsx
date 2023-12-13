import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";

import styles from "./styles";

export default function Emprestimo({ navigation }) {
    const [valorEmprestimo, setValorEmprestimo] = useState('')
    const [numeroParcelas, setNumeroParcelas] = useState('')
    const [valorEmprestimoComJuros, setValorEmprestimoComJuros] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [juros, setJuros] = useState(0)

    const calcularJuros = () => {
        // cálculo do valor por parcela
        let valor_por_parcela = (valorEmprestimo * 1.05) / numeroParcelas
        setValorParcela(valor_por_parcela)

        // cálculo do valor total do emprestimo com juros
        let valor_total = valorEmprestimo * 1.05
        setValorEmprestimoComJuros(valor_total)
    }

    const voltar = () => {
        navigation.navigate('Home');
    };

    // a partir daqui temos as solicitações à API
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const { token } = useSelector(state => {
        return state.userReducer
    })

    const solicitarEprestimo = async () => {
        try {
            const emprestimo = await axiosInstance.post('emprestimo/',
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    },
                    body: {
                        valor_solicitado: valorEmprestimo,
                        numero_parcelas: numeroParcelas
                    }
                }
            )
            setData(emprestimo.data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
            console.log(emprestimo.data)

            console.log(user)
            dispatch(setToken(user.data.auth_token))
        } catch (error) {
            console.log(error.response.data)

            console.log("deu erro")
            console.error(error)
            showAlert();
        }
    }

    useEffect(() => {
        solicitarEprestimo()
    }, [])

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
                        Valor total com juros de 5% de acordo com número de parcelas que você solicitou
                    </Text>
                    <View style={styles.containerJuros}>
                        <Text style={styles.textMedium}>Valor por parcela: R$ {valorParcela}</Text>
                        <Text style={styles.textMedium}>Valor total: R$ {valorEmprestimoComJuros}</Text>
                    </View>

                    <LocalButton
                        text="Solicitar Empréstimo"
                        onPress={solicitarEprestimo}
                    />
                </ScrollView>
            </View>
        </View>

    )
}