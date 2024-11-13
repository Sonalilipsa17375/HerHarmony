import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
// import { auth } from '../../configs/FirebaseConfig';

// Initialize Google Generative AI model
const apiKey = 'AIzaSyBTdNkmksn_mtWFh0l7QUYDNg8MgEjSSDA';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const AIHelpTab = () => {
  const [startDate, setStartDate] = useState('');
  const [cycleTime, setCycleTime] = useState('');
  const [peakHours, setPeakHours] = useState('');
  const [regularity, setRegularity] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [periodPlan, setPeriodPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    'Lobster': require('../../assets/fonts/Lobster-Regular.ttf'),
    // 'RobotoMono': require(''),
  });

  if (!fontsLoaded) {
    return null; 
  }

  const generatePeriodPlan = async () => {
    setLoading(true);

    try {
      const chatSession = model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
        history: [],
      });

      const prompt = startDate && cycleTime && peakHours && regularity && healthConditions
        ? `Generate a wellness period plan of 150 words based on:
        - Menstruation Start Date: ${startDate}
        - Cycle Length: ${cycleTime} days
        - Peak Energy Hours: ${peakHours}
        - Regularity: ${regularity}
        - Health Conditions: ${healthConditions}
        - Provide the expected dates for Ovulation, Conception Days, Next Period, based on start date and cycle length.
        - Make sure to highlight the expected dates and provide wellness tips for managing underlying health conditions.
        `
        : `Generate a short guide and give important expected dates of Ovulation, Conception Days, Next Period, by calculating based on period start date and cycle length, highlighted and maximum 3 lines of essential tips on wellness, foods, and advice for managing underlying health conditions. Make the result more specific and short as per the information provided.Don't generate Note at last .`;

      const result = await chatSession.sendMessage(prompt);
      setPeriodPlan(result.response.text());
    } catch (error) {
      console.error("Error generating period plan:", error);
      alert('Failed to generate period plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}> Your Personalized Period Plan</Text>

      <TextInput
        style={styles.input}
        placeholder="📅 Menstruation Start Date (e.g., YYYY-MM-DD)"
        placeholderTextColor="#999"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        style={styles.input}
        placeholder="⏳ Cycle Length (in days)"
        placeholderTextColor="#999"
        value={cycleTime}
        onChangeText={setCycleTime}
      />
      <TextInput
        style={styles.input}
        placeholder="🌞 Peak Energy Hours (e.g., morning, afternoon)"
        placeholderTextColor="#999"
        value={peakHours}
        onChangeText={setPeakHours}
      />
      <TextInput
        style={styles.input}
        placeholder="🔄 Regularity (e.g., Regular/Irregular)"
        placeholderTextColor="#999"
        value={regularity}
        onChangeText={setRegularity}
      />
      <TextInput
        style={styles.input}
        placeholder="🩺 Health Conditions"
        placeholderTextColor="#999"
        value={healthConditions}
        onChangeText={setHealthConditions}
      />

      <Button
        title={loading ? 'Generating...' : 'Generate Period Plan'}
        onPress={generatePeriodPlan}
        color="#FF6A6A"
        disabled={loading}
      />

      {loading && <ActivityIndicator size="large" color="#FF6A6A" style={styles.loader} />}

      {periodPlan && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>✨ Your Period Wellness Plan:</Text>
          {periodPlan.split('\n').map((item, index) => (
            item.trim() ? (
              <View key={index} style={styles.resultItem}>
                <MaterialIcons name="brightness-1" size={10} color="#FF6A6A" style={styles.bulletIcon} />
                <Text style={styles.resultText}>{item.trim()}</Text>
              </View>
            ) : null
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    // <marginTop:5></marginTop:5>0,
    backgroundColor: '#f8f1f4',
  },
  header: {
    fontSize: 26,
    color: '#FF6A6A',
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Lobster',
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
  },
  loader: {
    marginVertical: 20,
  },
  resultContainer: {
    marginTop: 20,
    marginBottom:60,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  resultTitle: {
    fontSize: 20,
    color: '#FF6A6A',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  bulletIcon: {
    marginRight: 4,
  },
  resultText: {
    color: '#e6e6e6',
    fontSize: 16,
  },
});

export default AIHelpTab;
