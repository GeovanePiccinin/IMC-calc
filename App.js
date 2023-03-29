import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const calculate = (weight, height) => {
  const result = (
    (parseFloat(weight) * 10000) /
    (parseFloat(height) * parseFloat(height))
  ).toFixed(2);
  return result;
};

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [output, setOutput] = useState("");
  const [category, setCategory] = useState("");

  return (
    <View style={styles.container}>
      {console.log("app renderizou")}
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Altura em m"
        onChangeText={setHeight}
        style={styles.input}
      />
      <TextInput
        placeholder="Peso em Kg"
        onChangeText={setWeight}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          const tempOutput = calculate(weight, height);
          setOutput(tempOutput);
          if (tempOutput < 18.5) {
            setCategory("Magro");
          } else if (tempOutput > 18.5 && tempOutput < 25) {
            setCategory("Normal");
          } else if (tempOutput > 25 && tempOutput < 30) {
            setCategory("Sobrepeso");
          } else if (tempOutput >= 30) {
            setCategory("Obeso");
          } else {
            setCategory("Indefinido");
          }
        }}
        style={styles.button}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.output}>{output}</Text>
      <Text style={styles.resultText}>{category}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 15,
  },
  button: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 15,
    height: 40,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue",
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue",
  },
});
