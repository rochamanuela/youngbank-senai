import React, { useState } from "react";
import axios from "axios";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import LocalButton from "../../components/LocalButton";
import LocalInput from "../../components/LocalInput";

import styles from "./styles";

export default function Cadastro() {
    const cadastrar = () => {
        navigation.navigate('MensagemCadastro');
    };

    const voltar = () => {
        navigation.navigate('CadastroMenu');
    };
    
    const [checked, setChecked] = useState(false);

    // campos de informações pessoais
    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const [foto, setFoto] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')

    // campos de informações de contato
    const [numero, setNumero] = useState('')
    const [ramal, setRamal] = useState('')
    const [email, setEmail] = useState('')
    const [observacao, setObservacao] = useState('')
    
    // campos de informações de endereço
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                <TouchableOpacity onPress={voltar} >
                    <Feather name="arrow-left" size={25} color="#fff" />
                </TouchableOpacity>
                    <Text style={styles.textRegular}>Cadastro Young</Text>
                    <Feather name="info" size={25} color="#fff" />
                </View>
                <View>
                    <Text style={styles.textSmall}>Para criar sua conta Young, preencha o formulário abaixo.</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.textMedium}>
                        Informações pessoais
                    </Text>

                    {/*Campo para o nome do cliente*/}
                    <LocalInput
                        placeholderText="Nome completo"
                        onChangeText={(e) => setNome(e)}
                    />

                    {/*Campo para a data de nascimento*/}
                    <LocalInput
                        placeholderText="Data de nascimento"
                        onChangeText={(e) => setDataNascimento(e)}
                    />

                    {/*Campo para o nome de usuário*/}
                    <LocalInput
                        placeholderText="Nome de usuário"
                        onChangeText={(e) => setUsuario(e)}
                    />

                    {/*Campo para a senha*/}
                    <LocalInput
                        placeholderText="Senha"
                        onChangeText={(e) => setSenha(e)}
                    />

                    {/*Campo para a confirmação de senha*/}
                    <LocalInput
                        placeholderText="Confirme sua senha"
                        onChangeText={(e) => setConfirmacaoSenha(e)}
                    />

                    {/*Campo para a foto do usuario*/}
                    <LocalInput
                        placeholderText="Foto"
                        onChangeText={(e) => setFoto(e)}
                    />

                    {/*Campo para o RG*/}
                    <LocalInput
                        placeholderText="N° do RG"
                        onChangeText={(e) => setRg(e)}
                    />

                    {/*Campo para o CPF*/}
                    <LocalInput
                        placeholderText="N° do CPF"
                        onChangeText={(e) => setCpf(e)}
                    />

                    <Text style={styles.textMedium}>
                        Informações de contato
                    </Text>

                    {/*Campo para o número de telefone*/}
                    <LocalInput
                        placeholderText="Número de telefone ou celular"
                        onChangeText={(e) => setNumero(e)}
                    />

                    {/*Campo para o ramal*/}
                    <LocalInput
                        placeholderText="Ramal"
                        onChangeText={(e) => setRamal(e)}
                    />

                    {/*Campo para o email*/}
                    <LocalInput
                        placeholderText="E-mail"
                        onChangeText={(e) => setEmail(e)}
                    />

                    {/*Campo para uma possível observação*/}
                    <LocalInput
                        placeholderText="Observação"
                        onChangeText={(e) => setObservacao(e)}
                    />

                    <Text style={styles.textMedium}>
                        Endereço
                    </Text>

                    {/*Campo para o CEP*/}
                    <LocalInput
                        placeholderText="CEP"
                        onChangeText={(e) => setCep(e)}
                    />

                    {/*Campo para o logradouro*/}
                    <LocalInput
                        placeholderText="Logradouro"
                        onChangeText={(e) => setLogradouro(e)}
                    />

                    {/*Campo para o bairro*/}
                    <LocalInput
                        placeholderText="Bairro"
                        onChangeText={(e) => setBairro(e)}
                    />

                    {/*Campo para a cidade*/}
                    <LocalInput
                        placeholderText="Cidade"
                        onChangeText={(e) => setCidade(e)}
                    />

                    {/*Campo para a UF*/}
                    <LocalInput
                        placeholderText="UF"
                        onChangeText={(e) => setUf(e)}
                    />

                    <CheckBox
                        title="Declaro que li, estou ciente e concordo com os Termos e Políticas de Privacidade e Segurança Young."
                        checked={checked}
                        onPress={() => setChecked(!checked)}

                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                        style={styles.containerCheck}
                        checkedColor="#EEA243"
                        uncheckedColor="gray"
                    />

                    <LocalButton
                        text="Confirmar"
                        onPress={() => alert('Botão clicado!')}
                    />
                </View>
            </View>
        </View>

    )
}