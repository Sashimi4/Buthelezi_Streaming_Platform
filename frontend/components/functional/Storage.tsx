import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeToken = async (userToken: string) => {
    try{
        userToken = '1234'
        await AsyncStorage.setItem('@userToken', userToken)
    }catch(e) {
        console.log(`Failed to store token : ${e}`)
    }
}

export const retreiveToken = async () => {
    try{
        await AsyncStorage.getItem('@userToken')
    }catch(e) {
        console.log(`Failed to retreive token : ${e}`)
    }
}

export const removeToken = async () => {
    try{
        await AsyncStorage.removeItem('@userToken')
    }catch(e) {
        console.log(`Failed to remove token : ${e}`)
    }
}

//Profile Picture

export const storeProfilePicture = async (userToken: string) => {
    try{
        userToken = '1234'
        await AsyncStorage.setItem('@userToken', userToken)
    }catch(e) {
        console.log(`Failed to store token : ${e}`)
    }
}

export const retreiveProfilePicture = async () => {
    try{
        await AsyncStorage.getItem('@userToken')
    }catch(e) {
        console.log(`Failed to retreive token : ${e}`)
    }
}

