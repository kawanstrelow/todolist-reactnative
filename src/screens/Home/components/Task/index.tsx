import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import * as Font from 'expo-font';

export interface tasksProps {
  id: string;
  isChecked: boolean;
  taskText: string;
  deleteTask: () => void;
  toggleCheckButton: () => void;
}

// const fetchFonts = async () =>
//       await Font.loadAsync({
//         'Inter-Regular': require('../../../../../assets/fonts/Inter-Regular.ttf'),
//         'Inter-Bold': require('../../../../../assets/fonts/Inter-Bold.ttf'),  
//       });

export function Task({
  id,
  isChecked,
  taskText,
  deleteTask,
  toggleCheckButton,
}: tasksProps) {

  // const [fontsLoaded] = Font.useFonts({
  //   'Inter-Regular': require('../../../../../assets/fonts/Inter-Regular.ttf'),
  //   'Inter-Bold': require('../../../../../assets/fonts/Inter-Bold.ttf'),  
  // });

  // useEffect(() => {
  //   fetchFonts()
  // }, [])

  return (   
    <View style={styles.container}>    

      {isChecked === false ? (
        <TouchableOpacity onPress={toggleCheckButton}>
          <Image source={require('../../../../../assets/check.png')} style={{height: 24, width: 24}}/>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleCheckButton}>
          <Image source={require('../../../../../assets/checked.png')} style={{height: 24, width: 24}}/>
        </TouchableOpacity>
      )}

      {isChecked === false ? (
        <Text style={styles.taskText}>{taskText}</Text>
      ) : (
        <Text style={styles.taskTextChecked}>{taskText}</Text>
      )}

      <TouchableOpacity onPress={deleteTask}>
        <Image source={require('../../../../../assets/trash.png')} style={{height: 32, width: 32}}/>
      </TouchableOpacity>
    
    </View>

  )
}