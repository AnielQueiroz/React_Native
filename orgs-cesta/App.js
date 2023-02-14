import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return <>
    <View style={style.estilos}>
      <Text>Hello Douglas</Text>
    </View>
    
    <WebView 
      source={{ uri: 'https://www.youtube.com/embed/P4YpeayUziQ' }}
      allowsFullscreenVideo={true}
    />
  </> 
}

const style = StyleSheet.create({
  estilos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})