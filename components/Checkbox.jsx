import React, { useState } from 'react';
import { View, Text, CheckBox } from 'react-native-elements';

const LocalCheckBox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <CheckBox
        title="Label do CheckBox"
        checked={checked}
        onPress={() => setChecked(!checked)}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        textStyle={{ color: 'red' }} // Personalize a cor do texto
        checkedColor="green" // Personalize a cor quando estiver marcado
        uncheckedColor="gray" // Personalize a cor quando estiver desmarcado
      />
    </View>
  );
};

export default LocalCheckBox;
