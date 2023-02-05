import React, { useState, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

function CalculatorScreen( { navigation }) {
  const [vala, setVala] = useState('');
  const [valb, setValb] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const initialFocus = useRef(null);

  const addHistory = (a, b, c, d) => {
    setHistory( [...history, { vala: a, valb: b, oper: c, res: d}] ); // Lisätään loppuun
    //setHistory( [ { vala: a, valb: b, oper: c, res: d}], ...history ); // Lisätään alkuun
  };

  const buttonPlusPressed = () => {
    const calculate = vala + valb;
    const operator = '+';
    setResult( calculate );
    addHistory(vala, valb, operator, calculate);
    initialFocus.current.focus();
    setVala('');
    setValb('');
  };

  const buttonMinusPressed = () => {
    const calculate = vala - valb;
    const operator = '-';
    setResult( calculate );
    addHistory(vala, valb, operator, calculate);
    initialFocus.current.focus();
    setVala('');
    setValb('');
  };

  const buttonHistoryPressed = () => navigation.navigate('History', { history: history } );

  return (
    <View style={ styles.container }>
      
      <View style={ styles.container }>
        <Text>Result: { result }</Text>
        <TextInput ref={ initialFocus } style={ styles.input } keyboardType='number-pad' 
          onChangeText={ vala => setVala( Number(vala) ) } value={ vala } />
        <TextInput style={ styles.input } keyboardType='number-pad' 
          onChangeText={ valb => setValb( Number(valb) ) } value={ valb } />
        <Text></Text>
      </View>

      <View style={ styleButtons.container }>
        <Button onPress={ buttonPlusPressed } title='+' />
        <Text>  </Text>
        <Button onPress={ buttonMinusPressed } title='-' />
        <Text>  </Text>
        <Button onPress={ buttonHistoryPressed } title='History' />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 2,
  },
});

const styleButtons = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});



export default CalculatorScreen;