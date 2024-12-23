import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the props type for the CustomButton component
interface CustomButtonProps {
  title: string; // The text to display on the button
  onPress: () => void; // The function to call when the button is pressed
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent', // Customize your button color
    borderRadius: 5,
    position: 'relative',
    bottom: -10,
    right: -120,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
