import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, ScrollView, SafeAreaView, TouchableOpacity, Keyboard, TextInput } from 'react-native'

import { globalStyle } from '../common/globalStyles'
import { Ionicons } from '@expo/vector-icons'

import { useDispatch } from 'react-redux'
import { createPost } from '../store/Actions/postAction'

export const CreationForm = ({ isVisible, setVisibility }) => {
	const [shadow, setShadow] = useState(false)
	const [valueField, setValueField] = useState('')

	const dispatch = useDispatch()

	const scrollHandler = (event) => {
		const scrollValue = parseInt(event.nativeEvent.contentOffset.y)
		scrollValue > 15 ? setShadow(true) : setShadow(false)
	}

	const closeHandler = () => {
		setVisibility(!isVisible)
		setValueField('')
	}

	const savePostHandler = () => {
		const dateFormat = () => {
			const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь']
			const monthShortNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
			const t = new Date()
			// return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ', ' + t.getFullYear()
			return monthNames[t.getMonth()] + ' ' + t.getDate() + ', ' + t.getFullYear()
		}

		const post = {
			date: dateFormat(),
			title: valueField,
			favorite: false,
		}
		dispatch(createPost(post))

		closeHandler()
	}

	return (
		<Modal visible={isVisible} animationType="slide">
			<SafeAreaView style={styles.modalSection}>
				<View style={styles.modalWrapper}>
					<View style={[globalStyle.container, styles.modalHead, shadow ? styles.modalHead__shadow : null]}>
						<TouchableOpacity onPress={closeHandler} style={{ marginLeft: 'auto' }}>
							<Ionicons name="close" size={42} color="#3e3e3e" />
						</TouchableOpacity>
					</View>

					<View style={styles.modalBody}>
						<View style={{ height: '100%' }}>
							<ScrollView scrollEventThrottle={16} contentContainerStyle={{ paddingTop: 60 }} onScroll={scrollHandler}>
								<View style={[globalStyle.container, styles.modalItem]}>
									<TextInput style={styles.modalField} multiline autoFocus placeholder="Опиши сегодняшний день" placeholderTextColor="#B9B9B9" onBlur={() => Keyboard.dismiss()} value={valueField} onChangeText={setValueField} />
								</View>

								<View style={[globalStyle.container, styles.buttonWrapp]}>
									<TouchableOpacity onPress={savePostHandler} activeOpacity={0.8} style={[globalStyle.button, styles.modalButton]}>
										<Text style={[globalStyle.buttonText, styles.modalButtonText]}>Сохранить</Text>
									</TouchableOpacity>
								</View>
							</ScrollView>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalSection: {
		height: '100%',
	},
	modalWrapper: {
		height: '100%',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	modalHead: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'absolute',
		left: 0,
		width: '100%',
		backgroundColor: '#fff',
		zIndex: 1,
	},
	modalHead__shadow: {
		shadowColor: 'rgba(0,0,0, 0.4)',
		shadowOffset: { height: 2, width: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 12,
		elevation: 5,
	},
	modalBody: {
		flexGrow: 1,
	},

	modalItem: {},

	modalTextItem: {
		fontFamily: 'gilroy-L',
		fontSize: 14,
		marginBottom: 8,
		color: '#B9B9B9',
	},
	modalField: {
		borderWidth: 1,
		borderColor: '#F0F0F0',
		borderRadius: 8,
		paddingLeft: 14,
		paddingRight: 14,
		paddingTop: 12,
		paddingBottom: 12,
		fontFamily: 'gilroy-L',
		fontSize: 14,
		color: '#3e3e3e',
		height: 320,
	},

	buttonWrapp: {
		marginTop: 24,
	},
	modalButton: {},
	modalButtonText: {
		paddingVertical: 12,
	},
})
