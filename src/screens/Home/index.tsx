import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Task } from "./components/Task";
import uuid from 'react-native-uuid';
import * as Font from 'expo-font';

async function fetchFonts() {
    await Font.loadAsync({
      'interRegular': require('../../../assets/fonts/Inter-Regular.ttf'),
      'interBold': require('../../../assets/fonts/Inter-Bold.ttf'),  
    });
}

export function Home() {

    useEffect(() => {
      fetchFonts()
    }, [])

    const tasksLists = [
        {
            id: uuid.v4().toString(),
            isChecked: false,
            taskText: 'Fazer academia 08h30',
        },
        {
            id: uuid.v4().toString(),
            isChecked: false,
            taskText: 'Terminar o trabalho da faculdade',
        },
    ]

    const [tasks, setTasks] = useState(tasksLists)
    const [digitedTask, setDigitedTask] = useState('');


    function deleteTaskApp(id: string) {
        const objFinded = tasks.filter(a => a.id !== id);
        setTasks(objFinded);
    }
    
    function toggleCheckButtonApp(id: string) {
    
        const objFinded = tasks.filter(a => a.id === id);
    
        const newArray = tasks.map(a => {
          if (a === objFinded[0]) {
            a.isChecked = !a.isChecked;
            return a;
          } else {
            return a;
          }
        });
        
        setTasks(newArray);
      }
    
      function handleCreateNewTask() {
        setTasks([
          ...tasks,
          { id: uuid.v4().toString(), isChecked: false, taskText: digitedTask },
        ]);
      }
    
      function handleDigitingNewTask(text: any) {
        // event.target.setCustomValidity('');
        setDigitedTask(text);
      }
    
      const completedTasks = tasks.filter(a => a.isChecked === true);
      
      const contentToShowEmptyOrFilled =
        tasks.length === 0 ? (
          (
            <View style={styles.noTasksContainer}>
                <Image source={require('../../../assets/clipboard.png')} style={{height: 56, width: 56}}/>
                <Text style={{color: '#808080', fontWeight: 'bold', marginTop: 16}}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={{color: '#808080'}}>Crie tarefas e organize seus itens a fazer</Text>
             </View>
            )
        ) : (
            <View style={styles.tasksContainer}>
            {tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                taskText={task.taskText}
                isChecked={task.isChecked}
                deleteTask={() => deleteTaskApp(task.id)}
                toggleCheckButton={() => toggleCheckButtonApp(task.id)}
              />
            ))}
          </View>
        );

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={require('../../../assets/logo.png')} style={{height: 32, width: 110}}/>
            <View style={styles.taskInputView}>
                <TextInput 
                    style={styles.taskInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    // value={digitedTask}
                    // onChange={handleDigitingNewTask}
                    onChange={({nativeEvent: {eventCount, target, text}}) => handleDigitingNewTask(text)}
                />
                <TouchableOpacity style={styles.taskButton} onPress={handleCreateNewTask}>
                    <Text style={styles.taskButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

     <View style={styles.bodyContainer}>
        <View style={styles.bodyContainerHeader}>
            <View style={styles.countView}><Text style={{fontSize: 14, fontWeight: 'bold', fontFamily: 'interBold', color: '#4EA8DE'}}>Criadas</Text><Text style={styles.countNumber}>{tasks.length}</Text></View>
            <View style={styles.countView}><Text style={{fontSize: 14, fontWeight: 'bold', fontFamily: 'interBold', color: '#8284FA'}}>Concluídas</Text><Text style={styles.countNumber}>{`${completedTasks.length} de ${tasks.length} `}</Text></View>
        </View>
        {contentToShowEmptyOrFilled}
     </View>
    </View>
  )
}