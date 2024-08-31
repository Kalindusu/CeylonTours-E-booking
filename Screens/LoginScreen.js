import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { TextInput } from "react-native-gesture-handler";
  import { useNavigation } from "@react-navigation/native";
  import { MaterialIcons } from "@expo/vector-icons";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase"; 
  
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    const login = () => {
      if (email === "" || password === "") {
        Alert.alert('Invalid Details', 'Please enter all the credentials', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Successfully signed in
            navigation.navigate("Main"); 
          })
          .catch((error) => {
            Alert.alert('Login Error','Invalid Email or Password');
          });
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign In</Text>
            <Text style={styles.subHeaderText}>Sign In to Your Account</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputRow}>
                <MaterialIcons name="email" size={20} color="grey" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor="grey"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputRow}>
                <MaterialIcons name="lock" size={20} color="grey" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  placeholder="Enter your password"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <Pressable style={styles.loginButton} onPress={login}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Don't have an account? Sign Up</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      padding: 20,
      alignItems: "center",
    },
    keyboardView: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
    header: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100,
    },
    headerText: {
      color: "#003580",
      fontSize: 24,
      fontWeight: "bold",
    },
    subHeaderText: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: "500",
    },
    inputContainer: {
      marginTop: 50,
      width: '100%',
      paddingHorizontal: 20,
    },
    inputWrapper: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: "600",
      color: "grey",
      marginBottom: 5,
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "grey",
      paddingVertical: 10,
    },
    input: {
      fontSize: 18,
      flex: 1,
      marginLeft: 10,
      color: "black",
    },
    loginButton: {
      width: '100%',
      backgroundColor: "#003580",
      padding: 15,
      alignItems: "center",
      borderRadius: 7,
      marginTop: 30,
    },
    loginButtonText: {
      color: "white",
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerLink: {
      marginTop: 20,
    },
    registerText: {
      color: 'grey',
      textAlign: 'center',
      fontSize: 16,
    },
  });
  