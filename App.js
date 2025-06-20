import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SplashScreen" component={SplashScreen}/>
					<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true, title: 'Minhas tarefas', 
						headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: '#333' } }}/>
					<Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{ headerShown: true, title: 'Nova Tarefa' }}/>
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}