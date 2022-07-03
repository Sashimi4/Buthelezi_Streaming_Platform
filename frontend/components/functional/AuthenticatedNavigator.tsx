import * as React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import Colors from '../../assets/Colors'

import HomePage from '../pages/HomePage'
import DownloadPage from '../pages/DownloadPage'
import ProfilePage from '../pages/ProfilePage'
import SearchPage from '../pages/SearchPage'
import MoviePage from '../pages/MoviePage'
import PictureSelectionPage from '../pages/PictureSelectionPage'
import VideoPlayerPage from '../pages/VideoPlayerPage'

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
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
                <Tab.Screen name="Search" component={SearchPage}/>
                <Tab.Screen name="Downloads" component={DownloadPage}/>
                <Tab.Screen name="Profile" component={ProfilePage}/>
                <Tab.Screen name="PictureSelection" component={PictureSelectionPage} options={{ tabBarButton: () => null, tabBarVisible: false, }}/>
                <Tab.Screen name="Movie" component={MoviePage} options={{ tabBarButton: () => null, tabBarVisible: false, }}/>
                <Tab.Screen name="VideoPlayer" component={VideoPlayerPage} options={{ tabBarButton: () => null, tabBarVisible: false, }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: Colors.WHITE,
        backgroundColor: Colors.ICON_INACTIVE_BACKGROUND_BLACK,
        borderRadius: 10,
    }
  });
