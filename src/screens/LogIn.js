import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { globalStyle, formStyle } from '../common/globalStyles'

export const LogIn = ({ navigation }) => {
	const onAuth = () => {
		navigation.navigate('Auth')
	}
	const onLogIn = () => {
		navigation.navigate('Main')
	}

	return (
		<View style={[globalStyle.mainIndent, styles.sectionWrapper]}>
			<View style={globalStyle.container}>
				<View style={formStyle.formAuth}>
					<Text style={formStyle.formAuthTitle}>Авторизация</Text>

					<View style={formStyle.formAuthWrapper}>
						<View style={formStyle.formAuthItem}>
							<Text style={formStyle.formAuthLabelField}>Логин / E-mail</Text>
							<TextInput style={formStyle.formAuthField} autoCompleteType={'email'} />
						</View>
						<View style={formStyle.formAuthItem}>
							<Text style={formStyle.formAuthLabelField}>Пароль</Text>
							<TextInput style={formStyle.formAuthField} autoCompleteType={'password'} secureTextEntry={true} />
						</View>
					</View>

					<TouchableOpacity activeOpacity={0.8} onPress={() => onLogIn()}>
						<View style={[globalStyle.button, formStyle.formAuthButton]}>
							<Text style={globalStyle.buttonText}>Войти</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.5} onPress={() => onAuth()}>
						<View style={[globalStyle.link, formStyle.formAuthLink]}>
							<Text style={[globalStyle.linkText, formStyle.linkText]}>Зарегистрироваться</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionWrapper: {
		backgroundColor: '#fff',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
})
