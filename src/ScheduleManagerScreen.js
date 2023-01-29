import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';

const ScheduleManager = () => {
  const [input, setInput] = React.useState('');
  const [schedule, setSchedule] = React.useState([]);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="class"
      />
      <View>
        <Button
        title= 'Create Schedule'
        onPress={() => setSchedule([...schedule, input])}
        />
      </View>
      <View>
        {schedule.map((item, i) => {
          return <Text key={i}> {item} </Text>
        } )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ScheduleManager;