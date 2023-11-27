import { View, ScrollView, StyleSheet, StatusBar, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import  { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/Logo'
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: 1,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 2,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 3,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 4,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 5,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 6,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 7,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
  {
    id: 8,
    imagem: require('../assets/exemplo.png'),
    nome: 'Roupa Vintage',
    preco: 'R$199,00',
  },
];
const Masculino = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content'/>

        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Logo color='#000000' />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.masculino}>MASCULINO</Text>  
          </View>
            <FlatList style={styles.items} data={data} numColumns={2} renderItem={({item}) => {
              return <Card style={styles.card} produto={item}/>
            }}
          />
        </SafeAreaView>
    </ScrollView>
  )
};
export default Masculino;

const styles = StyleSheet.create({
  container:  {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  masculino: {
    fontSize: 36,
    marginLeft: 100,
    marginTop: 20,
    fontFamily: 'Misologist',
  },
  items: {
    justifyContent: 'center',
    marginLeft: 60,
    marginTop: 30,
  },
  
});