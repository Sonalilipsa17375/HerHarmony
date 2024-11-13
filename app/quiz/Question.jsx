import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

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

const images = {
  question1: { yes: require('../../assets/images/quizphotos/11.jpeg'), no: require('../../assets/images/quizphotos/12.jpeg') },
  question2: { yes: require('../../assets/images/quizphotos/31.jpeg'), no: require('../../assets/images/quizphotos/32.jpeg') },
  question3: { yes: require('../../assets/images/quizphotos/41.jpeg'), no: require('../../assets/images/quizphotos/42.jpeg') },
  question4: { yes: require('../../assets/images/quizphotos/52.jpeg'), no: require('../../assets/images/quizphotos/51.jpeg') },
  question5: { yes: require('../../assets/images/quizphotos/61.jpeg'), no: require('../../assets/images/quizphotos/62.jpeg') },
  question6: { yes: require('../../assets/images/quizphotos/71.jpeg'), no: require('../../assets/images/quizphotos/72.jpeg') },
  question7: { yes: require('../../assets/images/quizphotos/81.jpeg'), no: require('../../assets/images/quizphotos/82 .jpeg') },
  question8: { yes: require('../../assets/images/quizphotos/81.jpeg'), no: require('../../assets/images/quizphotos/62.jpeg') },
};

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [mappedAnswers, setMappedAnswers] = useState([]); // Array to store Yes/No answers for each question
  const router = useRouter();

  useEffect(() => {
    if (currentQuestion === questions.length) {
      // Once all questions are answered, push the mappedAnswers to the result page
      router.push({
        pathname: '/Result',
        params: { mappedAnswers },
      });
    }
  }, [currentQuestion, mappedAnswers, router]);

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: answer,
    }));

    // Add mapped Yes/No answer to the mappedAnswers array
    setMappedAnswers((prevMappedAnswers) => [
      ...prevMappedAnswers,
      { question: currentQuestion, answer: answer === 'yes' ? 'Yes' : 'No' },
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const currentImages = currentQuestion < questions.length && images[`question${currentQuestion + 1}`]
    ? images[`question${currentQuestion + 1}`]
    : null;

  useEffect(() => {
    if (!currentImages) {
      router.replace('./Result');
    }
  }, [currentImages, router]);

  if (!currentImages) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionBlock}>
        <Text style={styles.questionText}>{questions[currentQuestion]}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionBlock} onPress={() => handleAnswer('yes')}>
          <Image source={currentImages.yes} style={styles.optionImage} />
          <Text style={styles.optionText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBlock} onPress={() => handleAnswer('no')}>
          <Image source={currentImages.no} style={styles.optionImage} />
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
    backgroundColor: '#FFF9C4',
  },
  questionBlock: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#3E2723',
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
    padding: 15,
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#5D4037',
  },
});

export default QuizScreen;
