import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const userLogin = async ()=>{
    if(!email||!password) {
      Alert.alert("Please fill all the fields ")
      return
    }
    try{
     const result = await auth().signInWithEmailAndPassword(email,password)
     console.log(result.user)
    } catch(err){
      Alert.alert("Something want wrong please try again different password ")
    }
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.box1}>
        <Image style={{ width: 200, height: 200 }} source={require("../assets/cnqlogo.png")} />
        <Text style={styles.Text}>Please login to continue!</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button  mode="contained" onPress={() => userLogin()}>
          Login
        </Button>
        <TouchableOpacity onPress={()=>navigation.navigate("signup")}><Text style={{textAlign:"center"}}>Don't have a account ?</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  box1: {
    alignItems: "center"
  },
  box2: {
    paddingHorizontal: 40,
    height: "50%",
    justifyContent: "space-evenly"
  },
  Text: {
    fontSize: 22
  }
});

export default LoginScreen;
