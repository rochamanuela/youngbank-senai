// CustomInput.js
import React, { useState } from 'react';
import { TextInput } from 'react-native';

const CustomInput = ({ placeholderText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = {
    width: '100%',
    height: 50,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: isFocused ? '#C77DFF' : '#2E2E2E',
    paddingLeft: 15,
    fontWeight: '400',
    color: '#fff',
    backgroundColor: '#2E2E2E',
    fontSize: 16,
    fontFamily: 'medium',
    marginBottom: 15,
    underlineColorAndroid: 'transparent',
  };

  return (
    <TextInput
      style={inputStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholderText}
      placeholderTextColor="#777"
    />
  );
};

export default CustomInput;
