import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

const HomePage = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Welcome to Your Health Tracker</Text>

      {/* Quiz Block */}
      <View style={styles.block}>
        <FontAwesome name="rocket" size={30} color="orange" />
        <Text style={styles.blockTitle}>Take a 30-Second Quiz</Text>
        <Text style={styles.blockDescription}>Discover more about your menstrual health and well-being.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('../../quiz/Question')}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* Period Tracking Block */}
      {/* <View style={styles.block}>
        <MaterialIcons name="date-range" size={30} color="whitesmoke" />
        <Text style={styles.blockTitle}>Track Your Period</Text>
        <Text style={styles.blockDescription}>Calculate and track your menstrual cycle effortlessly.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/CalcPeriod')}
        >
          <Text style={styles.buttonText}>Start Tracking</Text>
        </TouchableOpacity>
      </View> */}

      {/* Pregnancy Tracking Block
      <View style={styles.block}>
        <Ionicons name="md-baby" size={30} color="whitesmoke" />
        <Text style={styles.blockTitle}>Track Your Pregnancy</Text>
        <Text style={styles.blockDescription}>Calculate important milestones and stay informed.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/PregnancyPage')}
        >
          <Text style={styles.buttonText}>Track Pregnancy</Text>
        </TouchableOpacity>
      </View> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffe6f2',
  },
  header: {
    fontSize: 28,
    fontFamily:'Lobster',
    fontWeight: '900',
    fontStyle:'italic',
    color: 'darkblue',
    marginTop: 40,
    marginBottom: 20,
    position: 'absolute',
    top: 40,
    textAlign: 'center',
  },
  block: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#000000',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  blockTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'whitesmoke',
    marginTop:15,
    marginBottom: 8,
  },
  blockDescription: {
    fontSize: 18,
    fontFamily:'Lobster',
    color: '#777',
    marginTop:10,
    marginBottom: 15,
    color:'orange',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
});

export default HomePage;
