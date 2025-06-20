import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { addTaskStyles as styles } from '../styles/addTaskStyles';

const AddTaskScreen = () => {
	const [task, setTask] = useState('');
	const navigation = useNavigation();

	const handleAddTask = async () => {
		if (task.trim() === '') {
			Alert.alert('Aviso', 'Por favor, digite uma tarefa.');
			return;
		}

		try {
			const storedTasks = await AsyncStorage.getItem('tasks');
			const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];

			const newTask = {
				id: Date.now(),
				text: task.trim(),
				completed: false,
			};

			const updatedTasks = [...currentTasks, newTask];
			await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

			navigation.navigate('HomeScreen');
		} catch (error) {
			console.log('Erro ao salvar tarefa:', error);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Digite sua nova tarefa:</Text>
			<TextInput
				style={styles.input}
				placeholder="Ex: Estudar React Native"
				value={task}
				onChangeText={setTask}
			/>
			<TouchableOpacity style={styles.button} onPress={handleAddTask}>
				<Text style={styles.buttonText}>Salvar</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddTaskScreen;