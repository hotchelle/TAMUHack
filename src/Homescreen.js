import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Adhan from 'adhan';

const Homescreen = ({ navigation } ) => {
  const [athanData, setAthanData] = useState([]);
  useEffect(() => {
    // Adhan library uses coordinates to calculate times
    let coordinates = new Adhan.Coordinates(37.788022, -122.399797);
    let date = new Date();
    let params = new Adhan.CalculationMethod.MuslimWorldLeague();
    let prayerTimes = new Adhan.PrayerTimes(coordinates, date, params);
    let times = {
        "Fajr": prayerTimes.fajr,
        "Sunrise": prayerTimes.sunrise,
        "Dhuhr": prayerTimes.dhuhr,
        "Asr": prayerTimes.asr,
        "Maghrib": prayerTimes.maghrib,
        "Isha": prayerTimes.isha
    }
    setAthanData(times);
  }, []);

  return (
    <View>
      <Text>Prayer Times</Text>
    <FlatList
      data={Object.entries(athanData)}
      keyExtractor={(item) => item[0]}
      renderItem={({ item }) => (
        <Text>{item[0]} - {item[1].toString()}</Text>
      )}
      />

    </View>
    
   

  );
};

export default Homescreen;
