import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';

import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Movements from '../../componentes/Movements';
import Action from '../../componentes/Actions';
import { MotiView } from 'moti';

const list = [
    {
        id: 1,
        label: 'Fatura Vivo',
        value: '95,00',
        date: '14/01/2022',
        type: 0 //despesa
    },
    {
        id: 2,
        label: 'Pix',
        value: '55,00',
        date: '24/01/2022',
        type: 1 //receita
    },
    {
        id: 3,
        label: 'Salario',
        value: '2.305,00',
        date: '01/02/2022',
        type: 1 //receita
    },
]

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Header name="Aniel Queiroz" />

        <Balance saldo="16.955,32" gastos="-675,00"/>

        <Action />

        <Text style={styles.title}>Últimas movimentações</Text>

        <MotiView
          from={{
              translateX: -500
          }}
          animate={{
              translateX: 0
          }}
          transition={{
              type: "timing",
              duration: 500,
              delay: 800
          }}
        >

          <FlatList 
              style={styles.list}
              data={list}
              keyExtractor={(item)=> String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Movements data={item}/> }
              />
        </MotiView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
