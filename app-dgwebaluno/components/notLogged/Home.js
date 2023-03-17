import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import { primaryColor } from "../../styles/GlobalStyles";

const logo = require ('../../assets/nenelGymBG.png')

const { width, height } = Dimensions.get('window');
const topHeight = height * 0.5;
const bottomHeight = height * 0.5;

export default function Home({ navigation }){
    const [id, setId] = useState('');

    const handlePress = () => {
        // TODO: Verificar se o ID é válido e navegar para a outra tela se for
        if (id === '2164') {
            navigation.navigate('Main');
        } else {
            Alert.alert('ID inválido', 'Por favor, insira um ID válido.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image 
                    style={styles.image}
                    source={logo}
                />
            </View>

            <View style={styles.bottom}>
                <Text style={styles.qr}>Insira o código da sua academia ou clique no icone para o QRcode</Text>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={setId}
                    placeholder="Id da Academia"
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    image: {
        width: width * 1,
        height: width * 0.5
    },
    top: {
        flex: 1,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        backgroundColor: '#DADADA',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 20
    },
    qr: {
        color: '#000',
        fontSize: width * 0.05,
        padding: width * 0.1,
        textAlign: 'center'
    },
    input: {
        width: '80%',
        height: width * 0.15,
        marginVertical: width * 0.03,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: primaryColor,
        width: '80%',
        padding: width * 0.04,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: width * 0.03,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.05,
    }
    
})