import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.js';
import PaginaInicial from '../screens/PaginaInicial.js';
import Login from '../screens/Login'
import Registro from '../screens/Registro'
import Masculino from '../screens/Masculino'
import Feminino from '../screens/Feminino'
import Produto from '../screens/Produto'
import Compra from '../screens/Compra'

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
        <Stack.Screen name="Masculino" component={Masculino} />
        <Stack.Screen name="Feminino" component={Feminino} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Compra" component={Compra} />
        
      </Stack.Navigator>
  )
    
}