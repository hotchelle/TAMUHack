import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Schedule = ({navigation}) => {
  const [schedule, setSchedule] = useState([
    { day: 'Monday/Wednesday', time: '1:00 PM - 1:50 PM', className: 'Linear Algebra' },
    { day: 'Monday/Wednesday', time: '3:30 PM - 4:50 PM', className: 'Calculus III' },
    { day: 'Tuesday/Thursday', time: '2:00 PM - 3:20 PM', className: 'Software Engineering' },
    { day: 'Tuesday/Thursday', time: '5:30 PM - 6:50 AM', className: 'Computer Graphics' }
  ]);

  const randomizeClasses = () => {
    // code to randomize the classes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Schedule</Text>
      {schedule.map(item => (
        <View key={item.className} style={styles.scheduleItem}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.className}>{item.className}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Rating")}>
        <Text style={styles.buttonText}>Prayer Rating</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
    
  },
  scheduleItem: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5
  },
  day: {
    fontWeight: 'bold',
    width: '30%'
  },
  time: {
    width: '30%'
  },
  className: {
    width: '30%',
    textAlign: 'right'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    width: '80%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingTop: 5,
    

  }
});

export default Schedule; // Path: src/App.js
