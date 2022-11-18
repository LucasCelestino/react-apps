import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Switch,TextInput,Button,FlatList } from 'react-native';
import Constants from 'expo-constants';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

// You can import from local files

export default function App() {

  const [tarefa, setTarefa]=useState(null);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const adicionarTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          alert(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.id} - {item.nome}</Text>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Tarefas
      </Text>
      <View style={styles.switch_container}>
        <View style={styles.inputs}>
        <TextInput
        style={styles.input}
        onChangeText={setTarefa}
        value={tarefa}
        />
        <Button
        title="+"
        onPress={() => adicionarTarefa()}
        />
      </View>
      </View>
      <View style={styles.content_container}>
        <View style={styles.text_content}>
        <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 15,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth:1
  },
  inputs:{
    flex:1,
    flexDirection:"row",

  },
  input:{
    flex:1,
    flexDirection:"row",
    borderWidth:1,
    width:30
  },
  switch_container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:10
  },
  content_container:{
    borderWidth:1,
    paddingVertical:15,
    paddingHorizontal:10,
  },
  text_content:{
    flex:1,
  },
});
