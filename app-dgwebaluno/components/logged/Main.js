import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { primaryColor } from "../../styles/GlobalStyles";
import HomeScreen from "./screens/Tela1";
import Tela2 from "./screens/Tela2";
import Tela3 from "./screens/Tela3";
import Tela4 from "./screens/Tela4";
import Tela5 from "./screens/Tela5";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const activeBackgroundColor = '#fff000';
const fontColorActive = 'black';

export default function Main(){
    return(
        <SafeAreaView style={styles.container}>
            {/* Telas renderizadas */}
            <View style={styles.main}>
                <Tab.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: primaryColor
                        }
                    }}
                >
                    <Tab.Screen
                        name="Principal" 
                        component={HomeScreen}
                        options={{
                            tabBarIcon: () => {
                                return <Ionicons name="home" color="black" size={24} />
                            },
                            tabBarActiveBackgroundColor: activeBackgroundColor,
                            tabBarAccessibilityLabel: 'Principal',
                            tabBarActiveTintColor: fontColorActive,
                            headerTitle: 'Principal',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                            },
                        }}
                    />
                    {/* <Tab.Screen 
                        name="Horários" 
                        component={Tela2} 
                        options={{
                            tabBarIcon: () => {
                                return <Ionicons name="time" color="black" size={24} />
                            },
                            tabBarActiveBackgroundColor: activeBackgroundColor,
                            tabBarAccessibilityLabel: 'Horários',
                            tabBarActiveTintColor: fontColorActive,
                            headerTitle: 'Horários',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                            },
                        }}
                    /> */}
                    <Tab.Screen 
                        name="Treino" 
                        component={Tela3} 
                        options={{
                            tabBarIcon: () => {
                                return <MaterialIcons name="fitness-center" color="black" size={24} />
                            },
                            tabBarActiveBackgroundColor: activeBackgroundColor,
                            tabBarAccessibilityLabel: 'Treino',
                            tabBarActiveTintColor: fontColorActive,
                            headerTitle: 'Treino',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                            },
                        }}
                    />
                    {/* <Tab.Screen 
                        name="Mensagens" 
                        component={Tela4}
                        options={{
                            tabBarIcon: () => {
                                return <MaterialIcons name="message" color="black" size={24} />
                            },
                            tabBarActiveBackgroundColor: activeBackgroundColor,
                            headerTitle: 'Mensagens',
                            tabBarAccessibilityLabel: 'Mensagens',
                            tabBarActiveTintColor: fontColorActive,
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                            },
                        }} 
                    /> */}
                    <Tab.Screen 
                        name="Perfil" 
                        component={Tela5} 
                        options={{
                            tabBarIcon: () => {
                                return <Ionicons name="person" color="black" size={24} />
                            },
                            tabBarActiveBackgroundColor: '#fff000',
                            headerTitle: 'Perfil',
                            tabBarAccessibilityLabel: 'Perfil',
                            tabBarActiveTintColor: fontColorActive,
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                            },
                        }}
                    />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E62D2D',
        justifyContent: 'flex-end',
        paddingBottom: height * 0.02,
        paddingLeft: width * 0.02,
        height: height * 0.1,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.05,
    },
    main: {
        flex: 1,
    },

})