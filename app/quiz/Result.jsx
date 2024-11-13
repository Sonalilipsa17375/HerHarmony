import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const Result = () => {
  const [activeTab, setActiveTab] = useState(0);

  
  const tabs = [
    {
      title: 'Root Cause: Inflammation',
      content: (
        <View>
          <Image source={require('../../assets/images/quizphotos/inflammation.jpeg')} style={styles.resultImage} />
          <Text style={styles.resultText}>Inflammation is your body’s immune system response to injuries and infections. In a period of acute inflammation, this immune response causes symptoms such as pain, redness, and swelling. Inflammation is normal and an essential process that allows your body to heal.</Text>
          <Text style={styles.resultText}>However, when this inflammatory response doesn’t stop, perhaps due to food sensitivities, poor gut health, or autoimmune conditions, it can significantly impact your hormones and overall health.</Text>
        </View>
      ),
    },
    {
      title: 'Emotional Impact of Inflammation',
      content: (
        <View>
          <Text style={styles.resultText}>Are you feeling emotionally or physically on edge, upset, or exhausted, without knowing why?</Text>
          <Text style={styles.resultText}>Chronic inflammation is one of the most common root causes of PMS symptoms. It often occurs alongside chronic stress and blood sugar imbalances, which can contribute to hormonal imbalances and trigger PMS symptoms.</Text>
        </View>
      ),
    },
    {
      title: 'What You Can Do',
      content: (
        <View>
          <Text style={styles.resultText}>The good news is, it's possible to treat the root causes of PMS, balance hormones, and reverse symptoms with proper diet and lifestyle changes!</Text>
          <Text style={styles.resultText}>Here’s what you can do:</Text>
          <Text style={styles.resultText}>1. Find a doctor who listens and knows how to get the most out of your appointments.</Text>
          <Text style={styles.resultText}>2. Make practical lifestyle changes to reduce stress, sleep better, and feel better faster.</Text>
          <Text style={styles.resultText}>3. Implement sustainable diet changes by listening to your body’s needs.</Text>
        </View>
      ),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tabs Header */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}
          >
            <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {tabs[activeTab].content}
      </View>

      {/* Call to Action */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>START HEALING TODAY!</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Share Your Results</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF9C4',
  },
  tabsContainer: {
    flexDirection: 'column',
    gap:7,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: '#FFB74D',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#FB8C00',
  },
  tabText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeTabText: {
    color: '#FFF',
  },
  tabContent: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    color: '#3E2723',
    lineHeight: 24,
    marginBottom: 10,
  },
  ctaContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FB8C00',
    marginBottom: 10,
  },
  ctaButton: {
    padding: 12,
    backgroundColor: '#FB8C00',
    borderRadius: 30,
    width: '60%',
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Result;
