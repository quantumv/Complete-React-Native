import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// const HomeScreen = props => {
const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>SupBra</Text>
      <Button
      // onPress={() => props.navigation.navigate('Components')}
      onPress={() => navigation.navigate('Components')} 
      title="Check out this Component Demo"
      />
      <Button 
        title="Go to List Demo"
        // onPress={() => props.navigation.navigate('List')}
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
