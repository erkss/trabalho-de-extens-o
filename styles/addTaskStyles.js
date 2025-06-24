import { StyleSheet } from 'react-native';

export const addTaskStyles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#F9F9F9',
		padding: 12,
		justifyContent: 'top',
	},

	label: {
		fontSize: 18,
		marginBottom: 10,
		color: '#333',
	},

	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 10,
		padding: 15,
		fontSize: 13,
		marginBottom: 10,
	},

	button: {
		backgroundColor: '#4CAF50',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},

	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},

});