import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

import api from "../services/api";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinA: props.coinA,
      coinB: props.coinB,
      coinA_value: 0,
      convertedValue: 0,
    };

    this.converter = this.converter.bind(this);
  }

  async converter() {
    let from_to = this.state.coinA + "_" + this.state.coinB;

    const response = await api.get(
      `convert?q=${from_to}&compact=ultra&apiKey=d8148018a3851e72d0e5`
    );

    let price = response.data[from_to];

    let result = price * parseFloat(this.state.coinA_value);

    this.setState({ convertedValue: result.toFixed(2) });
    Keyboard.dismiss();
  }

  render() {
    const { coinA, coinB } = this.props;

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          {coinA} para {coinB}
        </Text>

        <TextInput
          placeholder="Valor a ser convertido"
          placeholderTextColor="#f9a23c"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(coinA_value) => this.setState({ coinA_value })}
        />

        <TouchableOpacity style={styles.btn} onPress={this.converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.convertedValue}>
          {this.state.convertedValue === 0 ? "" : this.state.convertedValue}
        </Text>
      </View>
    );
  }
}