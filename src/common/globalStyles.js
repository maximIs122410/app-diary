import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
    inVsisible: {
        display: 'none',
    },

    title: {
        fontSize: 25,
        fontFamily: 'gilroy-ExtraB',
        color: '#3e3e3e',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'gilroy-M',
        color: '#3e3e3e',
    },
    text: {
        fontSize: 15,
        fontFamily: 'gilroy-R',
        color: '#3e3e3e',
    },

    container: {
        paddingHorizontal: 20,
    },

    mainIndent: {
        paddingTop: 48,
        paddingBottom: 28,
    },

    button: {
        backgroundColor: '#4fa9af',
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'gilroy-M',
        paddingVertical: 12,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
    link: {},
    linkText: {
        fontSize: 12,
        fontFamily: 'gilroy-R',
        color: '#4fa9af',
    },
})

export const formStyle = StyleSheet.create({
    formAuth: {
        flexDirection: 'column',
        width: 250,
    },
    formAuthTitle: {
        fontSize: 24,
        fontFamily: 'gilroy-M',
        textAlign: 'center',
        marginBottom: 42,
        color: '#3e3e3e',
    },
    formAuthWrapper: {
        flexDirection: 'column',
    },
    formAuthItem: {
        marginBottom: 20,
    },
    formAuthLabelField: {
        fontSize: 12,
        fontFamily: 'gilroy-M',
        color: '#B9B9B9',
        marginBottom: 4,
    },
    formAuthField: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        paddingBottom: 4,
        color: '#3e3e3e',
    },
    formAuthButton: {
        marginTop: 18,
    },

    formAuthLink: {
        paddingVertical: 20,
    },
    linkText: {
        textAlign: 'center',
    },
})
