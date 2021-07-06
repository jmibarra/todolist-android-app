import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/*Tareas diarias*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Mis tareas de hoy</Text>

        <View style={styles.item}>
          {/*Aca va a ir las tareas*/}
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
      fontSize:24,
      fontWeight:'bold'
  },
  items:{

  }
});
