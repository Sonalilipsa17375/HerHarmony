import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Sign-Up', 
      headerStyle: {
        backgroundColor: 'pink', 
        fontSize:18,
        // color:'blue',
      }, 
    });
  }, [navigation]);

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        alert('Account created successfully!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('This email is already associated with an account. Please use a different email.');
        } else {
          console.error("Error creating account:", error.message);
          alert(error.message);
        }
      });
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Account</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.createButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('../sign-in')}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#555555',
    color: '#ffffff',
  },
  createButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e91e63',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
  },
  signInLink: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
});
