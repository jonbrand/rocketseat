import React from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform,
  TouchableOpacity 
} from 'react-native';

export function Home() {
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, Jonatas</Text>

        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#999"
        />

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginTop: 20 }]}>
          My Skills
        </Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: 'bold',
  }
})