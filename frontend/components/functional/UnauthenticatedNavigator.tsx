import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import { StyleSheet, Text } from 'react-native'

import Colors from '../../assets/Colors'

const Stack = createStackNavigator();

export default function UnauthenticatedNavigatorNavigator() {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        })}
        >
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Registration" component={RegistrationPage}/>
        </Stack.Navigator>
    );
}

