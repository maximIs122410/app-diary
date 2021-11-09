import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadPosts } from '../store/Actions/postAction'

import { StyleSheet, View } from 'react-native'
import { globalStyle } from '../common/globalStyles'

import { PostCollection } from '../components/PostCollection'
import { Navbar } from '../components/Navbar'

import { Intro } from '../components/Intro'
import { CreationForm } from '../components/CreationForm'

export const Main = ({ navigation }) => {
	const [isVisible, setVisibility] = useState(false)
	const [isVisibleForm, setVisibilityForm] = useState(false)

	const callbackVisibilityForm = useCallback((value) => {
		setVisibilityForm(value)
	}, [])

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(LoadPosts())
	}, [dispatch])

	const postCollection = useSelector((state) => state.post.postCollection)

	const favoritesPosts = useSelector((state) => state.post.favoritesPosts)

	return (
		<View style={[globalStyle.mainIndent, styles.wrapper]}>
			<View style={styles.mainContainer}>{postCollection.length === 0 ? <Intro /> : <PostCollection topIndent={0} isVisible={!isVisible} listData={postCollection} />}</View>

			<CreationForm isVisible={isVisibleForm} setVisibility={callbackVisibilityForm} />

			<Navbar favoritesPosts={favoritesPosts} navigation={navigation} setVisibilityForm={callbackVisibilityForm} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
	},
	mainContainer: {
		flexGrow: 1,
	},
})
