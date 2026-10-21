import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

import styles from './estilo';

export default function Login({ navigation }) {

  return (

    <View style={estilo.container}>

      <Image
        source={{
           uri: ''
        }}
        style={estilo.imagem}
      />

      <Text style={estilo.titulo}>Login</Text>

      <Text style={estilo.label}>Digite o e-mail</Text>

      <TextInput
        nativeID="email"
        placeholder="brayanmendesbarros@gmail.com"
        style={estilo.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={estilo.label}>Senha</Text>

      <TextInput
        placeholder="Digite sua senha"
        style={estilo.input}
        secureTextEntry={true}
      />

      <View style={estilo.botao}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          color="#007AFF"
        />
      </View>

    </View>

  );
}