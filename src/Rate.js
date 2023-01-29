import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [61.75, 61.75, 65.29, 100, 100],
    },
  ],
};

const Rate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prayer Rating per Semester</Text>
      <LineChart
        data={data}
        width={400}
        height={220}
        yAxisLabel="PrayRate"
        chartConfig={{
          backgroundColor: '#e24a00',
          backgroundGradientFrom: '#fb3c00',
          backgroundGradientTo: '#ffa426',
          decimalPlaces: 2, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={styles.chart}
        bezier
        fromZero={true}
        yLabelsOffset={-20}
        yAxisInterval={1}
      />
    <View>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
    </View>
      <Text style={
        {
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 16,
            marginRight: 240,
        }
        
    }>Rating Estimate</Text>

    <View style={{
         backgroundColor: 'white',
         padding: 20,
         borderRadius: 10,
         width: '80%',
         marginBottom: 30
    }}>
        <Text style={{
            fontSize: 16,
        }}>Overall Prayer Rating Value:     77.76%</Text>
    </View>

    
   
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default Rate;
