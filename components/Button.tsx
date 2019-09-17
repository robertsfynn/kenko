import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <LinearGradient
          colors={['#23253A', '#5063EE']}
          style={{ paddingHorizontal: 50, paddingVertical: 25 }}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0.0, 0.79]}
        >
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 2,
  },
});
export default Button;
