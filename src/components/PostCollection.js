import React, { useRef, useState } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import { globalStyle } from '../common/globalStyles'
import { Post } from './Post'

import { AntDesign } from '@expo/vector-icons'

export const PostCollection = ({ isVisible, listData, topIndent }) => {
	if (isVisible !== true) return null

	const listPost = useRef(null)
	const [IsVisibleBtnUp, setVisibilityBtnUp] = useState(false)

	const scrollUp = () => {
		listPost.current.scrollToOffset({ animated: true, offset: 0 })
	}

	const scrollHandler = (event) => {
		const scrollValue = event.nativeEvent.contentOffset.y
		scrollValue > 100 ? setVisibilityBtnUp(true) : setVisibilityBtnUp(false)
	}

	const renderItem = ({ item }) => <Post dataItem={item} />

	return (
		<View style={styles.wrapper}>
			<FlatList ref={listPost} onScroll={scrollHandler} style={[globalStyle.container]} contentContainerStyle={{ paddingTop: topIndent }} data={listData} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />

			{IsVisibleBtnUp ? (
				<TouchableOpacity style={styles.buttonScrollUp} activeOpacity={0.8} onPress={scrollUp}>
					<AntDesign name="upcircle" size={42} color="#4fa9af" />
				</TouchableOpacity>
			) : null}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},

	buttonScrollUp: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		marginRight: 12,
		marginBottom: 12,
	},
})
