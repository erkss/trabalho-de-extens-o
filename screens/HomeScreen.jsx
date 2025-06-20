import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { homeStyles as styles } from '../styles/homeStyles';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
	const navigation = useNavigation();
	const [tasks, setTasks] = useState([]);

	const loadTasks = async () => {
		try {
		  const storedTasks = await AsyncStorage.getItem('tasks');
			if (storedTasks) setTasks(JSON.parse(storedTasks));
		} catch (error) {
			console.log('Erro ao carregar tarefas:', error);
		}
	};

	const toggleTaskComplete = async (id) => {
		try {
			const updatedTasks = tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			);
			setTasks(updatedTasks);
			await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
		} catch (error) {
			console.log('Erro ao atualizar tarefa:', error);
		}
	};

	const handleDeleteTask = async (taskId) => {
		try {
			const updatedTasks = tasks.filter(task => task.id !== taskId);
			setTasks(updatedTasks);
			await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
		} catch (error) {
			console.log('Erro ao excluir tarefa:', error);
		}
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', loadTasks);
		return unsubscribe;
	}, [navigation]);

	const renderTask = ({ item }) => (
		<TaskItem
			task={item}
			onToggleComplete={toggleTaskComplete}
			onDelete={handleDeleteTask}
		/>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={tasks}
				keyExtractor={item => item.id.toString()}
				renderItem={renderTask}
				ListEmptyComponent={
					<Text style={styles.emptyText}>Nenhuma tarefa ainda.</Text>
				}
				contentContainerStyle={
					tasks.length === 0
						? { flex: 1, justifyContent: 'center', alignItems: 'center' }
						: { paddingBottom: 90 }
				}
			/>

			<TouchableOpacity
				style={styles.addButton}
				onPress={() => navigation.navigate('AddTaskScreen')}
			>
				<Text style={styles.addButtonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;