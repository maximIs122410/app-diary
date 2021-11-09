import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { globalStyle } from '../common/globalStyles'
import { Ionicons } from '@expo/vector-icons'

export const Intro = ({}) => {
	return (
		<View style={[globalStyle.container, styles.intro]}>
			<View style={styles.introWrapper}>
				<Text style={styles.introTitle}>
					Сделай {'\n'}свою {'\n'}
					<Text style={styles.introTitleAсcent}>первую</Text> {'\n'}запись
				</Text>
				<Ionicons style={{ marginTop: 12 }} name="md-create-outline" size={68} color="#3e3e3e" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	intro: {
		paddingVertical: 12,
		flex: 1,
	},

	introWrapper: {
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	introTitle: {
		fontSize: 44,
		lineHeight: 62,
		textTransform: 'uppercase',
		fontFamily: 'gilroy-ExtraB',
		color: '#3e3e3e',
	},
	introTitleAсcent: {
		color: '#4fa9af',
		fontSize: 44,
	},
})
