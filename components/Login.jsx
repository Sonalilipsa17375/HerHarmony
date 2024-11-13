import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { router } from 'expo-router'
// import Loading from './../components/Loading'

const Login = () => {
  const [fontsLoaded] = useFonts({
    'Lobster': require('./../assets/fonts/Lobster-Regular.ttf'),
    'RobotoMono': require('./../assets/fonts/RobotoMono-Italic-VariableFont_wght.ttf'),
  })

  if (!fontsLoaded) {
    return null ; // Or a loading indicator until fonts are loaded
  }

  const features = [
    "Track Menstrual Health",
    "Get Notified",
    "AI Powered Guidance",
    "Get Support From Community"
  ];
  
  // const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.topcon} >
            <Text style={styles.title}>Her Harmony</Text>
      
      {features.map((feature, index) => (
        <View key={index} style={styles.featureContainer}>
          <Image
            source={require('./../assets/images/check_box_24dp_0EF50A_FILL0_wght400_GRAD0_opsz24.png')}
            style={styles.icon}
          />
          <Text style={styles.featureText}>{feature}</Text>
        </View>
      ))}
        </View>
      

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={()=>router.push('/auth/sign-in')} >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    textAlign:'center',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  topcon:{
      position:'absolute',
      top: 100,
  },
  title: {
    fontFamily: 'Lobster',
    fontSize: 40,
    textAlign:'center',
    color: '#F4C2C2',
    marginBottom: 40,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 5,
  },
  icon: {
    height: 22,
    width: 22,
  },
  featureText: {
    fontFamily: 'RobotoMono',
    fontSize: 18,
    color: '#F4C2C2',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#F4C2C2',
    position:'absolute',
    bottom:50,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 25,
    // marginLeft:50,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight:'900',
    fontFamily: 'Lobster',
    textAlign: 'center',
  },
})
