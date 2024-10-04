import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../scripts/firebaseConfig";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg_error, setSetError] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace("/receitas")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSetError(error.message);
      });
  }



  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>Panela Velha</Text>
        <Text style={styles.title}>
          {msg_error}
        </Text>
        <TextInput style={styles.input} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></TextInput>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}></TextInput>
        <Text style={styles.tx}>Esqueceu a senha?</Text>
        <Pressable style={styles.bt} onPress={handleSignIn}>
          <Text style={styles.bt_text} >Login</Text >
        </Pressable >
        <Text style={styles.tx}>Não tem uma conta? </Text>
        <Pressable style={styles.bt}>
          <Text style={styles.bt_text} >Cadastrar-se</Text >
        </Pressable >
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFdd",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  login: {
    flex: 1,
    backgroundColor: "#FFFFdd",
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%'
  },
  title: {
    color: "#FFB266",
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'center'
  },
  tx: {
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
  bt: {
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
  },
  bt_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    backgroundColor: "#00BFFF",
    height: 50,
    margin: 3,
    width: '100%'
  }
});
