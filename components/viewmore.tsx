// II. Components and Styling: Implemented viewbutton component for reusable button functionality.
// III. Overview of basic components: Utilized TouchableOpacity for creating a touchable button component.
// IV. Event handling and creating a simple user interface: Enabled onPress event to handle button clicks, enhancing the user interface.

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface ViewButtonProps {
  title: String;
  onPress: () => void
}

const ViewButton: React.FC<ViewButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent', // Customize your button color
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: '#009FBD',
    fontSize: 18,
  },
});
export default ViewButton