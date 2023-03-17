import { View, StyleSheet, Text } from "react-native";

export default function Tela1() {
    return<>
        <View style={styles.top}>
            <Text>Tela4</Text>
        </View>
        
        <View style={styles.bottom}>
            <View style={styles.insideBottom}>
                <Text>Tela4</Text>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: 'gray',
        flex: 5
    },
    bottom: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5
    },
    insideBottom: {
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
})