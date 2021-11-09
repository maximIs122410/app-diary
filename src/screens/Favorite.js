import React from 'react'
import { useSelector } from 'react-redux'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { globalStyle } from '../common/globalStyles'

import { PostCollection } from '../components/PostCollection'

import { Ionicons } from '@expo/vector-icons'

export const Favorite = ({ navigation }) => {
	const onBackPress = () => navigation.goBack()

	const favoritesPosts = useSelector((state) => state.post.favoritesPosts)

	return (
		<View style={[globalStyle.mainIndent, styles.sectionWrapp]}>
			<View style={styles.innerWrapper}>
				<TouchableOpacity style={styles.onBackButton} onPress={() => onBackPress()} activeOpacity={0.5}>
					<View>
						<Ionicons name="ios-arrow-back" size={24} color="#3e3e3e" />
					</View>
				</TouchableOpacity>

				{favoritesPosts.length === 0 ? (
					<View style={[globalStyle.container, styles.introWrapper]}>
						<Text style={styles.introText}>Избранных записей нет {':('}</Text>
					</View>
				) : (
					<PostCollection topIndent={86} isVisible={true} listData={favoritesPosts} />
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionWrapp: {
		backgroundColor: '#fff',
		height: '100%',
		flexDirection: 'column',
	},

	innerWrapper: {
		height: '100%',
	},

	onBackButton: {
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundColor: '#fff',
		borderRadius: 6,
		width: 42,
		height: 42,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		marginLeft: 20,
		zIndex: 1,

		shadowColor: 'rgba(0, 0, 0, 0.4)',
		shadowOffset: { height: 2, width: 2 },
		shadowOpacity: 0.2,
		elevation: 5,
	},

	introWrapper: {
		paddingTop: 86,
	},
	introText: {
		fontSize: 24,
		fontFamily: 'gilroy-M',
	},
})
