import { View, Text, StyleSheet, TextInput, Pressable, Button } from 'react-native'
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../scripts/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg_error, setSetError] = useState("");

  function handleSignOut(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        window.location.replace("/login")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSetError(error.message);
        // ..
      });

  }

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>
          Panela Velha
        </Text>
        <Text style={styles.title}>
          {msg_error}
        </Text>
        <TextInput style={styles.input} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}>
        </TextInput>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}>
        </TextInput>
        <Pressable style={styles.bt} onPress={handleSignOut}>
        <Text style={styles.bt_text}>Cadastrar-se</Text>
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
    fontSize: 30,
    fontFamily: 'BalooThamni',
    width: '100%',
    textAlign: 'center'
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
    fontFamily: 'BalooThamni',
    fontWeight: 'bold',
    backgroundColor: "#00BFFF",
    height: 50,
    margin: 3,
    width: '100%'
  }
});
