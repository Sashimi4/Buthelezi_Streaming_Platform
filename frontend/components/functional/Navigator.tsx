import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomePage}/>
                <Tab.Screen name="Search" component={HomePage}/>
                <Tab.Screen name="Downloads" component={HomePage}/>
                <Tab.Screen name="Profile" component={ProfilePage}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
