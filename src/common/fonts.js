import * as Font from 'expo-font'

export async function fontsInit() {
    await Font.loadAsync({
        'gilroy-R': require('../../assets/fonts/Gilroy-Regular.ttf'),
        'gilroy-M': require('../../assets/fonts/Gilroy-Medium.ttf'),
        'gilroy-L': require('../../assets/fonts/Gilroy-Light.ttf'),
        'gilroy-B': require('../../assets/fonts/Gilroy-Bold.ttf'),
        'gilroy-ExtraB': require('../../assets/fonts/Gilroy-ExtraBold.ttf'),
    })
}
