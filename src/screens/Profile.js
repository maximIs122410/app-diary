import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { globalStyle } from '../common/globalStyles'

export const Profile = ({ navigation }) => {
	const postCollection = useSelector((state) => state.post.postCollection)
	const favoritesPosts = useSelector((state) => state.post.favoritesPosts)

	const onBackPress = () => navigation.goBack()
	const [isVisibleShadow, setVisibilityShadow] = useState(false)

	const scrollHandler = (event) => {
		const scrollValue = event.nativeEvent.contentOffset.y
		scrollValue > 52 ? setVisibilityShadow(true) : setVisibilityShadow(false)
	}

	return (
		<View style={[globalStyle.mainIndent, styles.sectionWrapp]}>
			<View style={[styles.profileSectionHead, isVisibleShadow ? styles.profileSectionHead__shadowUP : null]}>
				<TouchableOpacity style={styles.onBackButton} onPress={() => onBackPress()} activeOpacity={0.5}>
					<View>
						<Ionicons name="ios-arrow-back" size={24} color="#3e3e3e" />
					</View>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={0.5} style={styles.photoProfile}>
					<View>
						<Ionicons name="ios-camera-outline" size={42} color="#fff" />
					</View>
				</TouchableOpacity>

				<View style={styles.statisticsProfile}>
					<View style={styles.statisticsProfileItem}>
						<Text style={styles.statisticsProfileText}>{postCollection.length}</Text>
						<Text style={styles.statisticsProfileSubText}>записей</Text>
					</View>
					<View style={styles.statisticsProfileItem}>
						<Text style={styles.statisticsProfileText}>{favoritesPosts.length}</Text>
						<Text style={styles.statisticsProfileSubText}>в избранном</Text>
					</View>
				</View>
			</View>

			<View style={styles.sideInfo}>
				<ScrollView onScroll={scrollHandler} scrollEventThrottle={16} contentContainerStyle={[globalStyle.container, { paddingTop: 42 }]}>
					<View style={styles.infoProfile}>
						<View style={styles.infoProfileItem}>
							<Text style={styles.infoProfileTitleItem}>Основная информация</Text>

							<TouchableOpacity activeOpacity={0.5} style={styles.infoProfileInnerItem}>
								<View style={styles.infoProfileWrappItem}>
									<Text style={styles.infoProfileTitleInnerItem}>Имя</Text>
									<Text style={styles.infoProfileTextInnerItem}>Исаев Максим</Text>
								</View>
								<SimpleLineIcons name="arrow-right" size={18} color="#3e3e3e" />
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={0.5} style={styles.infoProfileInnerItem}>
								<View style={styles.infoProfileWrappItem}>
									<Text style={styles.infoProfileTitleInnerItem}>Ник</Text>
									<Text style={styles.infoProfileTextInnerItem}>isaevM1443</Text>
								</View>
								<SimpleLineIcons name="arrow-right" size={18} color="#3e3e3e" />
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={0.5} style={styles.infoProfileInnerItem}>
								<View style={styles.infoProfileWrappItem}>
									<Text style={styles.infoProfileTitleInnerItem}>Дата рождения</Text>
									<Text style={styles.infoProfileTextInnerItem}>01.02.1992</Text>
								</View>
								<SimpleLineIcons name="arrow-right" size={18} color="#3e3e3e" />
							</TouchableOpacity>
						</View>

						<View style={styles.infoProfileItem}>
							<Text style={styles.infoProfileTitleItem}>Контактная информация</Text>

							<TouchableOpacity activeOpacity={0.5} style={styles.infoProfileInnerItem}>
								<View style={styles.infoProfileWrappItem}>
									<Text style={styles.infoProfileTitleInnerItem}>E-mail</Text>
									<Text style={styles.infoProfileTextInnerItem}>maxIsaev@gmail.com</Text>
								</View>
								<SimpleLineIcons name="arrow-right" size={18} color="#3e3e3e" />
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
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

	profileSectionHead: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fff',
		zIndex: 1,
	},

	profileSectionHead__shadowUP: {
		shadowColor: 'rgba(0, 0, 0, 0.4)',
		shadowOffset: { height: 4, width: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 12,
		elevation: 5,
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

	photoProfile: {
		backgroundColor: '#4fa9af',
		zIndex: 1,
		borderRadius: 100,
		marginTop: 42,
		width: 120,
		height: 120,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},

	statisticsProfile: {
		flexDirection: 'row',
		marginTop: 20,
	},
	statisticsProfileItem: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	statisticsProfileText: {
		fontFamily: 'gilroy-ExtraB',
		fontSize: 32,
		color: '#4fa9af',
	},
	statisticsProfileSubText: {
		fontFamily: 'gilroy-R',
		fontSize: 12,
		color: '#3e3e3e',
		marginTop: -4,
	},

	sideInfo: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'column',
	},

	infoProfile: {
		flexDirection: 'column',
		height: '100%',
	},

	infoProfileItem: {
		marginBottom: 24,
	},
	infoProfileTitleItem: {
		fontFamily: 'gilroy-M',
		fontSize: 18,
		color: '#3e3e3e',
	},
	infoProfileInnerItem: {
		paddingVertical: 12,
		marginTop: 14,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: '#F0F0F0',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoProfileWrappItem: {
		flexDirection: 'column',
	},
	infoProfileTitleInnerItem: {
		fontFamily: 'gilroy-R',
		fontSize: 11,
		marginBottom: 4,
		color: '#B9B9B9',
	},
	infoProfileTextInnerItem: {
		fontFamily: 'gilroy-R',
		fontSize: 16,
		color: '#3e3e3e',
	},
})
