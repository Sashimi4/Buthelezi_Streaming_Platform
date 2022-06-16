import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Colors from './assets/Colors'
import FooterNav from './components/organisms/FooterNav'

import LoginPage from './components/pages/Loginpage'
import RegistrationPage from './components/pages/Registrationpage'

export default function App() {
  
  return (
      <>
        <View style={styles.container}>
          <FooterNav/>
        </View>
      </>



  //   <View style={styles.container}>
  //     <Text>Potatoes</Text>
       
  //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_BLACK,
    flex: 1,
  }
});
