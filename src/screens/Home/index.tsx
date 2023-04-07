import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ClipboardText } from "phosphor-react-native";

export function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={require('../../../assets/logo.png')} style={{height: 32, width: 110}}/>
            <View style={styles.taskInputView}>
                <TextInput 
                    style={styles.taskInput}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    // onChangeText={setParticipantName}
                    // value={participantName}
                />
                <TouchableOpacity style={styles.taskButton}>
                    <Text style={styles.taskButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

     <View style={styles.bodyContainer}>
        <View style={styles.bodyContainerHeader}>
            <View style={styles.countView}><Text style={{fontSize: 14, fontWeight: 'bold', color: '#4EA8DE'}}>Criadas</Text><Text style={styles.countNumber}>0</Text></View>
            <View style={styles.countView}><Text style={{fontSize: 14, fontWeight: 'bold', color: '#8284FA'}}>Concluídas</Text><Text style={styles.countNumber}>0</Text></View>
        </View>
        <View style={styles.noTasksContainer}>
            <ClipboardText color='#808080' size={56}/>
            <Text style={{color: '#808080', fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={{color: '#808080'}}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
     </View>
    </View>
  )
}