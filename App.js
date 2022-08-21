import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { UserService } from "./services/user.service";
export default function App() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [date, setDate] = useState("");

  const createUser = async () => {
    const user = await new UserService().addUser(name, surname, date);
    alert("User added successfully");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New User</Text>
      <View>
        <Text>Name of user</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
      </View>
      <View>
        <Text>Surname of user</Text>
        <TextInput
          value={surname}
          onChangeText={(text) => setSurname(text)}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
      </View>
      <View>
        <Text>Date of birthday</Text>
        <TextInput
          value={date}
          onChangeText={(text) => setDate(text)}
          placeholder="DD-MM-YYYY"
          style={styles.input}
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.marginTop}>
        <Button
          title="Create new user"
          onPress={() => {
            createUser();
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: "5px",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  marginTop: {
    marginBottom: "10px",
  },
});
