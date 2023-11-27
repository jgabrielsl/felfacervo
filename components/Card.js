import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Card = ({produto}) => {
  const navigation = useNavigation();
  
  return(
    <View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Produto')}>
        <Image source={produto.imagem}/>
        <Text style={styles.text}>{produto.nome}</Text>
        <Text style={styles.text}>{produto.preco}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Card;

const styles = StyleSheet.create({
  card:{
    padding: 6,
  },
  text:{
    fontFamily: 'Poppins_300Light',
    fontSize: 14,
  }
})
