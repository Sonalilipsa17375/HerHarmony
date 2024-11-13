import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../configs/FirebaseConfig';
import { useRouter } from 'expo-router';

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter(); 

  useEffect(() => {

    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        displayName: currentUser.displayName || "Username not set",
        email: currentUser.email,
      });
    }
  }, []);

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading Profile...</Text>
      </View>
    );
  }

//   const handleChangePassword = () => {
//     router.push('../auth/sign-up'); 
//   };

  return (
    <View style={styles.container}>
      
      <Ionicons name="person-circle" size={120} color="#ff69b4" style={styles.profileIcon} />

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.displayName}</Text>
        <Text style={styles.email}>Email-{user.email}</Text>
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button title="Change Password" onPress={handleChangePassword} />
      </View> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6f2', 
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    marginBottom: 20,
    borderRadius: 40, 
    backgroundColor: '#fff', 
    padding: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});
