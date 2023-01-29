import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Adhan from 'adhan';

function timeDifference(startTime, endTime) {
  let start = new Date("01/01/2000 " + startTime);
  let end = new Date("01/01/2000 " + endTime);
  let diff = end - start;
  return diff / (1000 * 60);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  classList: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  classText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  classDetail: {
    fontSize: 16,
    marginTop: 5,
  },
});

const Homescreen = ({navigation}) => {
    const [color,setColor] = useState('white');
    const [period, setPeriod] = useState();
    const classes = [
        {
          Class: "CSE 3318 Algorithms and Data Structures",
          Section: 1,
          day: "T,TH",
          start: "9:30 AM",
          end: "10:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "GACB 103",
          Instructor: "Alexandra Stefan"
        },
        {
          Class: "CSE 3318 Algorithms and Data Structures",
          Section: 3,
          day: "M,W",
          start: "4:00 PM",
          end: "5:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "PKH 111",
          Instructor: "Bob Weems"
        },
        {
          Class: "CSE 3318 Algorithms and Data Structures",
          Section: 2,
          day: "T,TH",
          start: "11:00 AM",
          end: "12:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "GACB 103",
          Instructor: "Alexandra Stefan"
        },
        {
          Class: "CSE 1325 OBJECT-ORIENTED PROGRAMMING ",
          Section: 1,
          day: "T,TH",
          start: "11:00 AM",
          end: "12:30",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 202",
          Instructor: "George Fowler Rice"
        },
        {
          Class: "CSE 1325 OBJECT-ORIENTED PROGRAMMING ",
          Section: 2,
          day: "T,TH",
          start: "8:00 AM",
          end: "9:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 202",
          Instructor: "George Fowler Rice"
        },
        {
          Class: "CSE 1325 OBJECT-ORIENTED PROGRAMMING ",
          Section: 3,
          day: "T,TH",
          start: "9:30 AM",
          end: "10:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 202",
          Instructor: "George Fowler Rice"
        },
        {
          Class: "CSE 2312 Computer Organization & Assembly Language Programming",
          Section: 1,
          day: "T,TH",
          start: "8:00 AM",
          end: "9:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "ERB 129",
          Instructor: "Jason Losh"
        },
        {
          Class: "CSE 2312 Computer Organization & Assembly Language Programming",
          Section: 2,
          day: "T,TH",
          start: "5:30 PM",
          end: "6:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 202",
          Instructor: "Dianqi Han"
        },
        {
          Class: "CSE 2312 Computer Organization & Assembly Language Programming",
          Section: 3,
          day: "M,W",
          start: "2:30 PM",
          end: "3:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 112",
          Instructor: "Todd Rosenkrantz"
        },
        {
          Class: "CSE 2312 Computer Organization & Assembly Language Programming",
          Section: 4,
          day: "M,W",
          start: "1:00 PM",
          end: "2:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 112",
          Instructor: "Todd Rosenkrantz"
        },
        {
          Class: "CSE 3380 Linear Algebra For CSE",
          Section: 1,
          day: "M,W,F",
          start: "11:00 AM",
          end: "11:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 311",
          Instructor: "Alex Jon Dilhoff"
        },
        {
          Class: "CSE 3380 Linear Algebra For CSE",
          Section: 2,
          day: "M,W",
          start: "1:00 PM",
          end: "2:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "NH 111",
          Instructor: "Alex Jon Dilhoff"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 1,
          day: "M,W",
          start: "1:00 PM",
          end: "2:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 221",
          Instructor: "Aera Leboulluec"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 2,
          day: "M,W",
          start: "2:30 PM",
          end: "3:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 221",
          Instructor: "Aera Leboulluec"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 3,
          day: "T,TH",
          start: "12:30 PM",
          end: "1:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 208",
          Instructor: "Rosie Kallie"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 4,
          day: "M,W",
          start: "5:30 PM",
          end: "6:50",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 210",
          Instructor: "Ukesh Chawal"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 5,
          day: "M,W",
          start: "4:00 PM",
          end: "5:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 210",
          Instructor: "Xin Liu"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 6,
          day: "T,TH",
          start: "11:00 AM",
          end: "12:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 208",
          Instructor: "Emma Yang"
        },
        {
          Class: "IE 3301 ENGINEERING PROBABLITY",
          Section: 8,
          day: "T,TH",
          start: "2:00 PM",
          end: "3:20",
          Meetingdates: "01/17/23-05/02/2023",
          Room: "WH 208",
          Instructor: "Rosie Kallie"
        }
      ]

  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        renderItem={({ item }) => (
          <TouchableOpacity
          // style={{ backgroundColor: item === period ? 'white' : 'red'}}
          onPress={ () => {
            setColor(item === period ? 'red' : 'white')
            setPeriod(item)
            //console.log(item)
            console.log(period)
            console.log(color)
          } }
          >
          <View style= {item === period ? {backgroundColor: 'white'} : {backgroundColor: 'red'} }
          onPress={ () => setPeriod(item)}
          >
            <Text style={styles.classText}>{item.Class} - Section {item.Section}</Text>
            <Text style={styles.classDetail}>{item.day}, {item.start} - {item.end}</Text>
            <Text style={styles.classDetail}>{item.Meetingdates}, {item.Room}, {item.Instructor}</  Text>
          </View>
          </TouchableOpacity>
          

          
        )}
        keyExtractor={item => item.Class + item.Section}
      />

      <View>
        <Button
        title= 'Create Schedule'
        onPress={() => navigation.navigate("ScheduleManager")}
        />
      </View>
    </View>
  );
}

export default Homescreen;
