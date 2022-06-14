import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import LoginPage from './components/pages/loginpage'

export default function App() {
  
  return (
      <>
       <LoginPage/>
      </>



  //   <View style={styles.container}>
  //     <Text>Potatoes</Text>
       
  //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
