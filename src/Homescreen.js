import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import * as Adhan from 'adhan';
import image from '../assets/mosque.png';


const HomeScreen = ({navigation}) => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [athanData, setAthanData] = useState({});

  useEffect(() => {
    let coordinates = new Adhan.Coordinates(30.61198, -96.34224);
    let params = new Adhan.CalculationMethod.NorthAmerica();
    let date = new Date();
    let prayerTimes = new Adhan.PrayerTimes(coordinates, date, params);
    setPrayerTimes(prayerTimes);
    let times = {
      "Fajr": prayerTimes.fajr,
      "Sunrise": prayerTimes.sunrise,
      "Dhuhr": prayerTimes.dhuhr,
      "Asr": prayerTimes.asr,
      "Maghrib": prayerTimes.maghrib,
      "Isha": prayerTimes.isha
    };
    setAthanData(times);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
      <View style={styles.cardContainer}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          
        }}>{new Date().toDateString()}</Text>
      </View>
      {Object.keys(athanData).map(prayer => (
        <View key={prayer} style={styles.row}>
          <Text style={styles.prayer}>{prayer}</Text>
          <Text style={styles.time}>
            {athanData[prayer].toLocaleTimeString()}
          </Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("Schedule")} >
        <Text style={styles.buttonText}>Import Schedule</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10
  },
  prayer: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    width: '40%',
    textAlign: 'left',
  },
  time: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'black',
    width: '40%',
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginHorizontal: 30,


  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '90%',
    resizeMode: "cover",
  },
  
 

});

export default HomeScreen;
