import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>HillSafe App</Text>
      <Button title="Send SOS" onPress={() => alert("SOS Sent")} />
    </View>
  );
}
