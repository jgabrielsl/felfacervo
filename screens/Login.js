import { View, ImageBackground, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const navigation = useNavigation();
  
  return(
    <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Logo color='#000000'/>
        </View>
      <View style={styles.tudo}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.criar} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.textCriar}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>    
    
  );
};
export default Login;
const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: 130,
    fontSize: 14,
    letterSpacing: 0.02,
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular'
  },
  input: {
    width: 320,
    height: 40,
    borderColor: '#fffff',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
  },
  tudo: {
    justifyContent: 'center',
    marginBottom: 360,
  },
  entrar: {
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: 320,
    height:40,
    borderRadius: 40,
  },
  criar: {
    justifyContent: 'center',
    backgroundColor: '#fffff',
    width: 320,
    height:40,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textCriar: {
    color: '#0000000',
    fontSize: 16,
    textAlign: 'center',
  },
})