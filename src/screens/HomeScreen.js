import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>SupBra</Text>
      <Button
      onPress={() => navigation.navigate('Components')} 
      title="Check out this Component Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to List Images"
        onPress={() => navigation.navigate('Image')}
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
