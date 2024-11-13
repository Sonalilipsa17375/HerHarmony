import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const symptomsList = ["Anxiety...", "Irregular Periods..", "Acne...", "Stress..."];
const periodSymptoms = {
  "PCOS": ["Absent Periods", "Anxiety", "Cystic Acne", "Facial Hair", "Fatigue", "Hair loss", "Irregular Periods", "Mood Swings", "Sugar Cravings", "Weight Fluctuations"],
  "Endometriosis": ["Anxiety", "Bloating", "Constipation", "Fatigue", "Frequent Periods", "Heavy Flow", "Loose Stools", "Mood Swings", "Nausea", "Painful Sex", "Painful Cramps", "Weight Fluctuations"],
  "PMS": ["Anxiety", "Cystic Acne", "Bloating", "Breast Tenderness", "Headaches", "Heavy Flow", "Loose Stools", "Low Sex Drive", "Mood Swings", "Painful Cramps", "Sugar Cravings", "Weight Fluctuations"],
  "Period Problems": ["Absent Periods", "Frequent Periods", "Heavy Flow", "Irregular Periods", "Light Flow", "Painful Cramps"]
};

const symptomDescriptions = {
  "Anxiety": "Anxiety involves feelings of worry, nervousness, or fear that can interfere with daily activities. Hormonal fluctuations, particularly in estrogen and progesterone, can impact the neurotransmitters responsible for mood regulation, leading to increased anxiety, especially before menstruation or during other hormonal imbalances.",
  "Absent Periods": "Absent periods, or amenorrhea, refer to the absence of menstruation for several months. This can be caused by hormonal imbalances, stress, or underlying medical conditions like PCOS. Low estrogen and progesterone are common culprits that disrupt the menstrual cycle and cause missed periods.",
  "Cystic Acne": "Cystic acne is a severe type of acne that causes deep, painful cysts and is often linked to high androgen levels, which increase oil production in the skin. Hormonal fluctuations can also trigger inflammation, making it common during periods or with conditions like PCOS.",
  "Facial Hair": "Excessive facial hair growth, or hirsutism, is often caused by high androgen levels, especially in conditions like PCOS. This excess hair growth typically appears on the chin, upper lip, and cheeks, and can be distressing due to its impact on self-esteem.",
  "Fatigue": "Fatigue is a state of constant tiredness or lack of energy that can disrupt daily life. Hormonal imbalances, especially in thyroid hormones, estrogen, and cortisol, play a significant role. Chronic stress and conditions like PCOS or PMS can also contribute to persistent fatigue.",
  "Hair Loss": "Hair loss can manifest in various ways, including overall thinning, patchy areas of hair loss, or 'male-pattern baldness,' characterized by thinning at the front and sides of the scalp. Elevated androgen levels shorten the hair growth phase, leading to thinner hair. Stress and thyroid dysfunction are also common contributing factors.",
  "Headaches": "Headache pain is often experienced as a throbbing sensation on one side of the head, sometimes with nausea, vomiting, and light or sound sensitivity. Estrogen fluctuations affect brain chemicals linked to pain, often triggering headaches before ovulation or during the luteal phase.",
  "Heavy Flow": "Heavy flow refers to menstrual bleeding that is unusually long or heavy, often involving more than 80 ml of blood per cycle, soaking through protection every hour, or passing large clots. Hormonal imbalances, particularly high estrogen, can lead to such heavy bleeding.",
  "Irregular Periods": "Irregular periods refer to cycles lasting over 38 days consistently. They can be disruptive and are often linked to hormonal imbalances involving estrogen, LH/FSH, and progesterone. Low estrogen can lead to absent or light periods, while high estrogen may cause frequent or heavy periods.",
  "Light Flow": "Light flow is short and scanty bleeding, typically under 30 ml per cycle. It may signal a hormonal imbalance, as estrogen, LH/FSH, and progesterone regulate the menstrual cycle. Lower estrogen levels may result in absent or light periods.",
  "Loose Stools": "Loose stools can cause discomfort, dehydration, and electrolyte imbalance, often occurring before or during menstruation when progesterone levels drop, affecting bowel movements. Prostaglandins produced during menstruation may also increase intestinal contractions.",
  "Low Sex Drive": "Low sex drive, or low libido, refers to reduced interest in sexual activity. Hormone fluctuations during the menstrual cycle influence libido, often increasing around ovulation. Stress, mood, diet, and reproductive health conditions can also impact sex drive.",
  "Mood Swings": "Mood swings involve sudden emotional changes, from happiness to anger or sadness. They often result from hormonal fluctuations, especially progesterone and estrogen, which affect mood regulation. Blood sugar variations can also trigger emotional shifts.",
  "Nausea": "Nausea can vary from mild to intense discomfort and is often accompanied by other symptoms like dizziness or diarrhea. Hormonal fluctuations, particularly around menstruation, and prostaglandin release in the uterus can lead to nausea.",
  "Painful Cramps": "Menstrual cramps can range from dull aches to sharp pains in the pelvis, often due to high prostaglandins that increase uterine contractions. High estrogen levels can worsen cramps by thickening the uterine lining, causing more intense pain.",
  "Painful Sex": "Painful sex can affect physical and emotional well-being, often causing guilt and relationship strain. High estrogen can exacerbate endometriosis pain, while low lubrication from low estrogen or progesterone can also cause discomfort.",
  "Sugar Cravings": "Sugar cravings are strong desires for sugary foods and can be driven by hormone fluctuations, especially around the luteal phase, when high progesterone levels increase hunger. Blood sugar dips can also trigger cravings.",
  "Weight Fluctuations": "Weight fluctuations involve changes in body weight due to hormonal imbalances, especially in leptin and ghrelin, which regulate hunger and satiety. Stress-related cortisol can also impact weight, causing either weight gain or loss.",
  "Breast Tenderness": "Breast tenderness can cause intense pain and disrupt daily activities. High estrogen levels enlarge breast ducts and cause fluid retention, leading to swelling and discomfort, especially during the luteal phase.",
  "Constipation": "Constipation is often painful and uncomfortable, resulting from hormonal imbalances, especially with elevated androgens or low estrogen. These hormones can slow digestive transit, making it difficult to pass stools."
};

const BlogTab = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentSymptom, setCurrentSymptom] = useState(0);
  const [expandedSymptom, setExpandedSymptom] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let symptom = symptomsList[currentSymptom];
      setAnimatedText('');
      let index = 0;

      const typingEffect = setInterval(() => {
        setAnimatedText((prev) => prev + symptom[index]);
        index++;
        if (index === symptom.length) clearInterval(typingEffect);
      }, 100);

      setCurrentSymptom((prev) => (prev + 1) % symptomsList.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentSymptom]);

  const toggleSymptom = (symptom) => {
    setExpandedSymptom(expandedSymptom === symptom ? null : symptom);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Break Free From Section */}
      <View style={styles.breakFreeContainer}>
        <Text style={styles.breakFreeText}>Break Free From - </Text>
        <Text style={styles.animatedText}>{animatedText}</Text>
      </View>

      {/* Symptom Blocks */}
      {Object.entries(periodSymptoms).map(([title, symptoms]) => (
        <View key={title} style={styles.symptomBlock}>
          <Text style={styles.symptomTitle}>{title}</Text>
          {symptoms.map((symptom) => (
            <TouchableOpacity key={symptom} onPress={() => toggleSymptom(symptom)}>
              <View style={styles.symptomItem}>
                <Text style={styles.symptomText}>{symptom}</Text>
                <Text style={styles.arrow}>{expandedSymptom === symptom ? '▲' : '▼'}</Text>
              </View>
              {expandedSymptom === symptom && (
                <Text style={styles.symptomDescription}>
                  {symptomDescriptions[symptom] || "Description coming soon..."}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default BlogTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6f2',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  breakFreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  breakFreeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff4081',
  },
  animatedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  symptomBlock: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  symptomTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4081',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  symptomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 6,
    marginBottom: 8,
  },
  symptomText: {
    fontSize: 16,
    color: '#00796b',
  },
  arrow: {
    fontSize: 18,
    color: '#00796b',
  },
  symptomDescription: {
    fontSize: 15,
    color: '#5c5c3d',
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontStyle: 'italic',
    backgroundColor: '#fffacd',
    borderRadius: 8,
    marginTop: 5,
  },
});
