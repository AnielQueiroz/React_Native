import { View, StyleSheet, FlatList, Image, Text, Dimensions } from "react-native";

const image1 = 'assets\javier-santos.jpg'

const data = [
    { id: 1, image:  require("../../../assets/javier-santos.jpg"), description: "Imagem 1" },
    { id: 2, image: require("../../../assets/humphrey.jpg"), description: "Imagem 2" },
    // { id: 3, image: "https://via.placeholder.com/150", description: "Imagem 3" },
    // { id: 4, image: "https://via.placeholder.com/150", description: "Imagem 4" },
    // { id: 5, image: "https://via.placeholder.com/150", description: "Imagem 5" },
];

export default function Tela1() {
    const windowWidth = Dimensions.get('window').width;
    return<>
        <View style={[styles.top, { width: windowWidth }]}>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item }) => (
                    <Image
                        style={styles.image}
                        source={item.image}
                        resizeMode="cover"
                    />
                )}
                keyExtractor={( item ) => item.id.toString()}
            />
        </View>
        
        <View style={styles.bottom}>
            <View style={styles.insideBottom}>
                <Text>Area do Aluno</Text>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    top: {
        flex: 4,
        // backgroundColor: '#ccc'
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width, // definir largura com base na largura da tela
        height: null, // definir altura como nula para permitir redimensionamento proporcional
        resizeMode: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
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
        alignItems: 'center',
        borderRadius: 10
    },
})
