import AsyncStorage from '@react-native-async-storage/async-storage'
import base64 from 'react-native-base64'

const ACCESS_TOKEN_KEY = '@access_token'

export const storeToken = async (userEmail: string) => {
    try{
        let userToken = base64.encode(userEmail);
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, userToken)
    }catch(e) {
        console.log(`Failed to store token : ${e}`)
    }
}

export const retreiveToken = async () => {
    try{
        return await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    }catch(e) {
        console.log(`Failed to retreive token : ${e}`)
        return null
    }
}

export const removeToken = async () => {
    try{
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
    }catch(e) {
        console.log(`Failed to remove token : ${e}`)
    }
}

//Profile Picture

export const storeProfilePicture = async (userToken: string) => {
    try{
        userToken = '1234'
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, userToken)
    }catch(e) {
        console.log(`Failed to store token : ${e}`)
    }
}

export const retreiveProfilePicture = async () => {
    try{
        await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    }catch(e) {
        console.log(`Failed to retreive token : ${e}`)
    }
}

