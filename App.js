import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [number1, setNumber1] = react.useState(0);
  const addNumber = () => {
    let newNumber = number1 + 1;
    setNumber1(newNumber);
  };
  const subNumber = () => {
    let newNumber = number1 - 1;
    setNumber1(newNumber);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>Application React</Text>
      <Text style={styles.txt1}>Native</Text>
      <Text style={styles.txt2}>The number is : {number1}</Text>
      <TouchableOpacity style={styles.button1} onPress={() => addNumber()}>
        <Text style={styles.txt3}>ADD NUM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => subNumber()}>
        <Text style={styles.txt3}>SUB NUM</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CACFD2",
    alignItems: "center",
    justifyContent: "center",
  },
  txt1: {
    fontSize: 40,
  },
  txt2: {
    fontSize: 20,
  },
  txt2: {
    fontSize: 20,
  },
  button1: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#3498DB",
    borderRadius: 10,
  },
  button2: {
    padding: 10,
    backgroundColor: "#CB4335",
    borderRadius: 10,
  },
});
