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
      <Text style={styles.title}>Cadastro</Text>

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.criar} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textCriar}>Entrar na minha conta</Text>
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
    marginLeft: 120,
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
    marginBottom: 280,
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