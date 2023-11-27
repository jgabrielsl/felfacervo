import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';
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
];

export default function PaginaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Logo color="#000000" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Masculino')}>
            <ImageBackground
              style={styles.masculino}
              source={require('../assets/masculino.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Feminino')}>
            <ImageBackground
              style={styles.feminino}
              source={require('../assets/Feminino.png')}
            />
          </TouchableOpacity>
          <Text style={styles.linha}>Peça suas vestimentas</Text>

          <FlatList style={styles.carrossel} horizontal data={data} showsHorizontalScrollIndicator={false} snapToAlignment='start'
            renderItem={({item}) => {
              return <Card style={styles.card} produto={item}/>
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  menu: {
    width: 35,
    height: 2,
    backgroundColor: '#000000',
    marginVertical: 2.5,
  },
  masculino: {
    justifyContent: 'center',
    width: 360,
    height: 194,
    marginBottom: 8,
    marginLeft: 15,
  },
  feminino: {
    justifyContent: 'center',
    width: 360,
    height: 120,
    marginLeft: 15,
  },
  carrossel: {
    padding: 12,
  },
  card: {
    padding: 12,
  },
  linha: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginTop: 17,
    marginLeft: 16,
  },
});
