import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Tela1() {
    return<>
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.treinoBranco}>Treino em branco</Text>
                <View style={styles.insideTop}>
                    <TouchableOpacity>
                        <Text style={styles.novoTreino}>Novo Treino</Text>
                        <Text>Criar um treino vazio ou ficha de treino</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    top: {
        height: 150,
        backgroundColor: 'gray'
    },
    insideTop: {
        width: '80%',
        backgroundColor: 'red',
        padding: 20,
        alignSelf: 'center'
    },
    treinoBranco: {
        fontSize: 19,
        lineHeight: 30
    },
    novoTreino: {
        fontWeight:'bold',
        fontSize: 19
    }
    
})