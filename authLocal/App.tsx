import { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';

import { styles } from './style';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();

  async function verifyAvaliableAuthentication(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types.map(type => LocalAuthentication.AuthenticationType[type]));
  }

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    
    if(!isBiometricEnrolled){
      return Alert.alert('Login', 'Sem biometria cadastrada')
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com dedinho',
      fallbackLabel: 'Biometria não reconhecida'
    });

    setIsAuthenticated((auth.success));
  }

  useEffect(() => {
    verifyAvaliableAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Usuário conectado: { isAuthenticated ? 'Sim' : 'Não'}
      </Text>

      <Button 
        title='Entrar' 
        onPress={handleAuthentication} 
      />
    </View>
  );
}

