import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import FooterNav from './components/organisms/FooterNav'

import LoginPage from './components/pages/Loginpage'
import RegistrationPage from './components/pages/Registrationpage'

export default function App() {
  
  return (
      <>
        <View>
          <FooterNav/>
        </View>
      </>



  //   <View style={styles.container}>
  //     <Text>Potatoes</Text>
       
  //   </View>
  );
}

const styles = StyleSheet.create({
  
});
