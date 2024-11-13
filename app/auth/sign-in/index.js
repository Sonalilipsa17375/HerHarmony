import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useLayoutEffect } from 'react';
import { auth } from '../../../configs/FirebaseConfig';
import { router, useNavigation } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const  [authState, setAuthstate] = useState(null)

  const signInpersistance = ()=>{
    setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  const handleSignIn = () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    setSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in, navigate to Home page
        const user = userCredential.user;
        console.log('User signed in:', user);
        // alert('Signed in successfully!');

        router.replace('../../(tabs)/Period'); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode);
        alert('Sign-in failed: ' + errorMessage);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Sign-In',
      headerStyle: {
        backgroundColor: 'pink', 
      }, 
    });
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    'Lobster': require('../../../assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          style={[
            styles.input,
            focusedInput === 'email' && styles.inputFocused
          ]}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          style={[
            styles.input,
            focusedInput === 'password' && styles.inputFocused
          ]}
          secureTextEntry
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSignIn} 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#333" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? 
          <Text style={styles.signupText} onPress={() => router.replace('../sign-up')}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
    fontFamily: 'Lobster'
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
  inputFocused: {
    borderColor: '#ffffff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#e91e63',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888888',
  },
  signupText: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
});
