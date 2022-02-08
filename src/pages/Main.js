import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Main = () => {
  const data = [
    {
      id: "1",
      title: "A Guerra da Arte",
      anotations: "Muito conteúdo bom",
      read: true,
      photo: null,
    },
    {
      id: "2",
      title: "O Pior Ano Da Minha Vida",
      anotations: "Muito conteúdo denso",
      read: false,
      photo: null,
    },
    {
      id: "3",
      title: "The Mystery Method",
      anotations: "Muito conteúdo bom de sedução",
      read: true,
      photo: null,
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity style={styles.toolboxButton}>
          <Icon name="add" size={14} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
      data={data}
      keyExtrator={item => item.id} 
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemText}>{item.title}</Text>  
        </TouchableOpacity>
      )} 
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 5,
  },
  toolbox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#3498db",
  },
  toolboxButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16,
  },
})

export default Main;