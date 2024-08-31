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
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { doc, setDoc } from "firebase/firestore";
  import { auth, db } from "../firebase"; 
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation();
  
    const register = () => {
      if (email === "" || password === "" || phone === "") {
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
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;
  
            setDoc(doc(db, "users", uid), {
              email: user.email,
              phone: phone,
            })
            .then(() => {
              Alert.alert('Success', 'User registered successfully');
              navigation.navigate("Login"); 
            })
            .catch((error) => {
              Alert.alert('Error', error.message);
            });
          })
          .catch((error) => {
            Alert.alert('Registration Error', error.message);
          });
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Register</Text>
            <Text style={styles.subHeaderText}>Create an Account</Text>
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
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Mobile No</Text>
              <View style={styles.inputRow}>
                <MaterialIcons name="phone" size={20} color="grey" />
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Enter mobile no"
                  placeholderTextColor="grey"
                  style={styles.input}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>
          <Pressable style={styles.loginButton} onPress={register}>
            <Text style={styles.loginButtonText}>Register</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  
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
  });
  