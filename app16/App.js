import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Switch,TextInput,Button,FlatList } from 'react-native';
import Constants from 'expo-constants';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

// You can import from local files

import { Card } from 'react-native-paper';

export default function App() {

  const [produto, setProduto]=useState(null);
  const [quantidade, setQuantidade]=useState(null);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), quantidade INTEGER)`,
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

  const adicionarProduto = () => {
    if (!produto || !quantidade) {
      alert("Informe um produto e/ou quantidade");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (nome,quantidade) VALUES (?,?)`,
        [produto,quantidade],
        (sqlTxn, res) => {
          alert(`Produto ${produto} adicionando com sucesso!`);
          getProdutos();
          setProduto("");
        },
        error => {
          console.log("Erro ao inserir um Produto " + error.message);
        },
      );
    });
  };

  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, quantidade: item.quantidade });
            }
 
            setProduto(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };

  const renderProdutos = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome} ({item.quantidade})</Text>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Lista de Compras
      </Text>
      <View style={styles.switch_container}>
        <View style={styles.inputs}>
        <TextInput
        style={styles.input2}
        />
        <TextInput
        style={styles.input}
        />
        <Button
        title="+"
        onPress={() => adicionarProduto()}
        />
      </View>
      </View>
      <View style={styles.content_container}>
        <View style={styles.text_content}>
        <FlatList
        data={produto}
        renderItem={renderProdutos}
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
    width:'200px'
  },
  input2:{
    flex:1,
    flexDirection:"row",
    borderWidth:1,
    width:'5px'
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
