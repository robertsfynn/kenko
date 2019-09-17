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
          <Text style={{ color: 'white', textTransform: 'uppercase' }}>
            {text}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
