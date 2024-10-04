import {View, Text, StyleSheet, TextInput, Pressable } from 'react-native'


export default function App(){
    return(
        <View style={styles.container}>
          <View style={styles.login}>
            <Text style={styles.title}>Panela Velha</Text>
            <TextInput style={styles.input} placeholder="Telefone, e-mail ou Usuário"></TextInput>
            <TextInput style={styles.input} secureTextEntry={true}  placeholder="Senha"></TextInput>
            <Text style={styles.tx}>Esqueceu a senha?</Text>
            <Pressable style={styles.bt} >Login</Pressable >
            <Text style={styles.tx}>Não tem uma conta? </Text>
            <Pressable style={styles.bt}>Cadastrar-se</Pressable >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFFdd",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    login:{
      flex: 1,
      backgroundColor:"#FFFFdd",
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%'
  },
    title:{
      color: "#FFB266",
      fontWeight: 'bold',
      fontSize: 22,
      fontFamily: 'Verdan',
      width: '100%',
      textAlign: 'center'
    },
    tx:{
      color: "#00BFFF",
      fontSize: 14,
      fontFamily: 'Verdan',
      width: '100%',
      textAlign: 'right'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 4,
      borderColor: "#CCCCCC",
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
            width: '100%',


    },
    bt:{
      textAlign: 'center',
      color: '#FFFFFF',
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      backgroundColor: "#00BFFF",
      height: 50,
      margin: 12,
      borderWidth: 4,
      borderColor: "#CCCCCC",
      padding: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      width: '100%'
    }
});
