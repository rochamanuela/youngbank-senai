import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LocalButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#EEA243', '#C77DFF', '#FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          padding: 15,
          alignItems: 'center',
          borderRadius: 7,
        }}
      >
        <Text style={{ color: '#000', fontSize: 15, fontFamily: 'bold' }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LocalButton;

