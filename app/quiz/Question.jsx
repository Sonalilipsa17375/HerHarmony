import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import 11 from '../../assets/images/quizphotos'; // Ensure this imports correctly

const questions = [
  "Do you often experience painful menstrual cramps that disrupt your daily activities?",
  "Have you noticed irregularities in your menstrual cycle (e.g., absent, irregular, long/heavy, or short/scanty periods)?",
  "Do you crave sugar or carbohydrates and get moody if you go long periods without eating?",
  "Do you have a history of disordered eating or body image issues?",
  "Do you often feel emotionally or physically on edge, upset, or exhausted without knowing why?",
  "I have frequent headaches, neck, or back pain.",
  "I've been diagnosed with, or suspect I have PCOS.",
  "I've been diagnosed with, or suspect I have endometriosis.",
  "Are you experiencing symptoms such as acne, bloating, breast tenderness, cramping, cravings, fatigue, headaches, low sex drive, or mood swings?",
];

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: answer,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate('Result', { answers });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionBlock}>
        <Text style={styles.questionText}>{questions[currentQuestion]}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {/* Yes Option */}
        <TouchableOpacity style={styles.optionBlock} onPress={() => handleAnswer('yes')}>
          <Image source={quizphotos.yesImage} style={styles.optionImage} />
          <Text style={styles.optionText}>Yes</Text>
        </TouchableOpacity>

        {/* No Option */}
        <TouchableOpacity style={styles.optionBlock} onPress={() => handleAnswer('no')}>
          <Image source={quizphotos.noImage} style={styles.optionImage} />
          <Text style={styles.optionText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF9C4', // Light yellow background
  },
  questionBlock: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#3E2723', // Dark color for question block
    borderRadius: 12,
    width: '100%',
  },
  questionText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  optionBlock: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF3E0', // Light color for options
    borderRadius: 10,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#5D4037',
  },
});

export default QuizScreen;
