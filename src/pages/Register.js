import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
  Button,
} from "react-native";
import React, { useContext, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigation } from "@react-navigation/native";
// import { createUserWithEmailAndPassword } from "firebase/firebase-auth";
// import { auth } from '../config/firebase'

export default function Register({ navigation }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const {register} = useContext(AuthContext);

  onDaftar = async (e) => {
    if (!nama && !email && !password) {
      Alert.alert("Nama & Email & Password Tidak Boleh Kosong!");
    } else if (!nama) {
      Alert.alert("Nama Tidak Boleh Kosong!");
    } else if (!email) {
      Alert.alert("Email Tidak Boleh Kosong!");
    } else if (!password) {
      Alert.alert("Password Tidak Boleh Kosong!");
    } else if (password != password2) {
      Alert.alert("Password Tidak Sama!");
    } else {
      navigation.navigate("Login");
      Alert.alert("Alhamdulillah Anda Berhasil Mendaftar!");
      // const res = await axios.post(
      //   "http://192.168.140.222:8000/api/daftar",
      //   nama,
      //   email,
      //   password,
      // );
      // if (res.data.status === 200) {
      //   console.log(res.data.message);
      // }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/1.png")}
      style={styles.container}
    >
      <TextInput
        value={nama}
        onChangeText={(nama) => setNama(nama)}
        placeholder={"Isikan Nama Anda!"}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={"Isikan Email Anda!"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={"Isikan Password Baru Anda"}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={password2}
        onChangeText={(password2) => setPassword2(password2)}
        placeholder={"Ulangi Password Baru Anda!"}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        title={"Daftar"}
        style={styles.button}
        onPress={() => {
          // register(nama, email, password);
          onDaftar();
        }}
      >
        <Text style={styles.buttonDaftar}>Daftar</Text>
      </TouchableOpacity>
      <Text style={styles.paragrafLogin}>Anda Sudah Mempunyai Akun ?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={[styles.buttonRegister, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}> Silahkan Login! </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 10,
    width: "70%",
    fontFamily: 'Lato-Regular',
  },

  paragrafLogin: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },

  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 80,
  },
  buttonDaftar: {
    color: "white",
    fontFamily: 'Lato-Black',
    fontSize: 16,
  },
  buttonRegister: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontSize: 16,
    fontFamily: 'Lato-Black',
  },
});
