import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#F9F9F9',
		paddingHorizontal: 2,
		paddingTop: 0,
	},

	title: {
		fontSize: 25,
		color: '#000000',
		fontWeight: 'bold',
		marginBottom: 10,
		marginLeft: 16,
		letterSpacing: 1,
	},

	emptyText: {
		color: '#000000',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 50,
	},

	taskItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		marginVertical: 5,
		marginHorizontal: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
	},

	taskText: {
		fontSize: 16,
		color: '#333',
		flexShrink: 1, 
		flexWrap: 'wrap',
		textAlign: 'justify',
	},

	taskTextCompleted: {
		flex: 1,
		flexWrap: 'wrap',
		fontSize: 14,
		color: '#aaa',
		textAlign: 'justify',
		textDecorationLine: 'line-through',
		flexShrink: 1, 
	},

	addButton: {
		backgroundColor: '#4CAF50',
		width: 60,
		height: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 20,
		right: 20,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},

	addButtonText: {
		color: '#fff',
		fontSize: 35,
		lineHeight: 35,
	},
	
});