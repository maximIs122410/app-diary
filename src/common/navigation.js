import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Main } from '../screens/Main'
import { Profile } from '../screens/Profile'
import { Favorite } from '../screens/Favorite'
import { LogIn } from '../screens/LogIn'
import { Auth } from '../screens/Auth'

const Stack = createStackNavigator()

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="LogIn"
					component={LogIn}
					options={{
						title: 'Авторизация',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{
						title: 'Регистрация',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Main"
					component={Main}
					options={{
						title: 'Дневник',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={{
						title: 'Профиль',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Favorite"
					component={Favorite}
					options={{
						title: 'Избранное',
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
