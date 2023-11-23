import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CadastroMenu from "./pages/CadastroMenu";
import CadastroPF from "./pages/CadastroPF";
import CadastroPJ from "./pages/CadastroPJ";
import Home from "./pages/Home";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import MensagemCadastro from "./pages/MensagemCadastro";
import TransferenciaInicial from './pages/TransferenciaInicial';
import TransferenciaRevisao from './pages/TransferenciaRevisao';
import TransferenciaComprovante from './pages/TransferenciaComprovante';

import Teste from './pages/Teste';

const Telas = createNativeStackNavigator();

export default function Routers() {
    return (
        <NavigationContainer>
            <Telas.Navigator>
                <Telas.Screen
                    name="Teste"
                    component={Teste}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="TransferenciaInicial"
                    component={TransferenciaInicial}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="TransferenciaComprovante"
                    component={TransferenciaComprovante}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="TransferenciaRevisao"
                    component={TransferenciaRevisao}
                    options={{ headerShown: false }}
                />


                <Telas.Screen
                    name="MensagemCadastro"
                    component={MensagemCadastro}
                    options={{ headerShown: false }}
                />
                <Telas.Screen
                    name="CadastroMenu"
                    component={CadastroMenu}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="CadastroPF"
                    component={CadastroPF}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="CadastroPJ"
                    component={CadastroPJ}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="Inicial"
                    component={Inicial}
                    options={{ headerShown: false }}
                />

                <Telas.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

            </Telas.Navigator>
        </NavigationContainer>
    )
}