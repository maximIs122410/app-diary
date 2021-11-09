import React from 'react'
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'

import { globalStyle } from '../common/globalStyles'
import { Ionicons, AntDesign } from '@expo/vector-icons'

export const Navbar = ({ navigation, setVisibilityForm, favoritesPosts }) => {
    const navbarActions = {
        out: () => {
            Alert.alert('Вы хотите выйти ?', null, [
                {
                    text: 'Отмена',
                },
                {
                    text: 'Да',
                    onPress: () => navigation.navigate('LogIn'),
                },
            ])
        },
        write: () => {
            setVisibilityForm(true)
        },
        profile: () => {
            navigation.navigate('Profile')
        },
        favorite: () => {
            navigation.navigate('Favorite')
        },
    }

    return (
        <View style={[globalStyle.container, styles.navbar]}>
            <TouchableOpacity
                onPress={navbarActions.out}
                style={styles.navbarButton}
                activeOpacity={0.5}
            >
                <View style={styles.navbarButtonWrapp}>
                    <Ionicons name="log-out-outline" size={28} color="#3e3e3e" />
                    {/* <Text style={styles.navbarButtonText}>Выход</Text> */}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navbarActions.profile}
                style={styles.navbarButton}
                activeOpacity={0.5}
            >
                <View style={styles.navbarButtonWrapp}>
                    <Ionicons name="person-circle-outline" size={28} color="#3e3e3e" />
                    {/* <Text style={styles.navbarButtonText}>Профиль</Text> */}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                disabled={favoritesPosts.length === 0}
                onPress={navbarActions.favorite}
                style={[styles.navbarButton, { opacity: favoritesPosts.length === 0 ? 0.5 : 1 }]}
                activeOpacity={0.5}
            >
                <View style={styles.navbarButtonWrapp}>
                    <AntDesign name="staro" size={25} color="#3e3e3e" />
                    {/* <Text style={styles.navbarButtonText}>Профиль</Text> */}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navbarActions.write}
                style={styles.navbarButton}
                activeOpacity={0.5}
            >
                <View style={styles.navbarButtonWrapp}>
                    <Ionicons name="md-create-outline" size={28} color="#3e3e3e" />
                    {/* <Text style={[styles.navbarButtonText, { top: 2.8 }]}>Записать</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 8,
    },

    navbarButton: {
        width: 32,
        height: 32,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navbarButtonWrapp: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },

    // navbarButtonText: {
    //     fontSize: 12,
    //     fontFamily: 'gilroy-R',
    // },
})
