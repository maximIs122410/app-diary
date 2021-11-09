import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/Actions/postAction'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import { globalStyle } from '../common/globalStyles'

import { AntDesign } from '@expo/vector-icons'

export const Post = ({ dataItem }) => {
	const dispatch = useDispatch()

	const toggleHandlerFavorite = useCallback(() => {
		dispatch(toggleFavorite(dataItem.id))
	}, [dispatch, dataItem.id])

	return (
		<View style={styles.itemList}>
			<View style={styles.itemHead}>
				<Text style={styles.itemListDate}>{dataItem.date}</Text>
				<View style={styles.itemIconGropu}>
					<TouchableOpacity onPress={toggleHandlerFavorite}>
						<AntDesign name={dataItem.favorite ? 'star' : 'staro'} size={20} color="#FFC300" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.itemBody}>
				<Text style={styles.itemListTitle}>{dataItem.title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	itemList: {
		marginBottom: 12,
		paddingVertical: 22,
		paddingHorizontal: 22,
		backgroundColor: '#f7f8fd',
		borderRadius: 8,

		shadowColor: '#6495ED',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.12,
		shadowRadius: 4.65,

		elevation: 6,
	},
	itemHead: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
	},

	itemIconGropu: {
		flexDirection: 'row',
	},

	itemBody: {},

	itemListTitle: {
		fontSize: 14,
		lineHeight: 20,
		fontFamily: 'gilroy-R',
		color: '#3e3e3e',
	},
	itemListDate: {
		fontSize: 11,
		color: '#A1A1A1',
		fontFamily: 'gilroy-L',
	},
})
