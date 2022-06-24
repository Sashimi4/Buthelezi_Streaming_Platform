import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import Colors from '../../assets/Colors'

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
                const icons = {
                    Home: 'home',
                    Search: 'search',
                    Downloads: 'download-cloud',
                    Profile: 'user',
                };

                return (
                    <Icon
                        style={styles.icon}
                        name={icons[route.name]}
                        color={color}
                        size={30}
                    />
                );
            },
            })}
            >
                <Tab.Screen name="Home" component={HomePage}/>
                <Tab.Screen name="Search" component={HomePage}/>
                <Tab.Screen name="Downloads" component={HomePage}/>
                <Tab.Screen name="Profile" component={ProfilePage}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
      paddingBottom: 15,
      paddingTop: 8,
      bottom: 0,
      width: '100%',
      position: 'absolute',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.LIGHT_BLACK,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      zIndex: 999,
    },
    icon: {
        color: Colors.WHITE,
        backgroundColor: Colors.ICON_INACTIVE_BACKGROUND_BLACK,
        borderRadius: 10,
    }
  });