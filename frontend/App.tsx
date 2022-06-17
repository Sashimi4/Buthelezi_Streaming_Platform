import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Colors from './assets/Colors'
import BackButton from './components/atoms/BackButton'
import MovieCarousel from './components/molecules/MovieCarousel'
import FooterNav from './components/organisms/FooterNav'
import HomePage from './components/pages/HomePage'

import LoginPage from './components/pages/LoginPage'
import ProfilePage from './components/pages/ProfilePage'
import RegistrationPage from './components/pages/RegistrationPage'

export default function App() {
  
  return (
      <>
        <View style={styles.container}>
          <ProfilePage/>
          <FooterNav/>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_BLACK,
    flex: 1,
  }
});
