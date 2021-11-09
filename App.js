import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Provider } from 'react-redux'
import storeApp from './src/store/index'

import { fontsInit } from './src/common/fonts'
import { Navigation } from './src/common/navigation'

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={fontsInit}
                onFinish={() => setIsReady(true)}
                onError={(error) => console.log(error)}
            />
        )
    }

    return (
        <Provider store={storeApp}>
            <View style={styles.main}>
                <Navigation />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // paddingTop: 48,
        // paddingBottom: 24,
    },
})
