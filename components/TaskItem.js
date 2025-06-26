import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import { homeStyles as styles } from '../styles/homeStyles';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const renderRightActions = () => (
    <TouchableOpacity
      onPress={() => onDelete(task.id)}
      style={{
        backgroundColor: '#ec2121',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Ionicons name="trash-outline" size={20} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      friction={3}
      overshootRight={false}
      enableTrackpadTwoFingerGesture
      shouldCancelWhenOutside={true}
    >
      <View style={styles.taskItem}>
        <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
          <Ionicons
            name={task.completed ? 'checkmark-circle-outline' : 'checkmark-circle-outline'}
            size={24}
            color={task.completed ? '#4CAF50' : '#aaa'}
            style={{ marginRight: 6 }}
          />
        </TouchableOpacity>
        <Text style={task.completed ? styles.taskTextCompleted : styles.taskText}>
          {task.text}
        </Text>
      </View>
    </Swipeable>
  );
};

export default TaskItem;