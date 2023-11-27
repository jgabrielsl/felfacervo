import {StyleSheet, Text } from 'react-native'


export default function Logo({color = '#000000'}) {
  return (
    <Text style={[styles.logo, {color: color}]}>Felfacervo</Text>
  )
}

const styles = StyleSheet.create({

  logo: {
    fontFamily: 'Misologist',
    fontSize: 32,
    letterSpacing: 0.02, 
  }
})