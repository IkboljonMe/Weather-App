// II. Components and Styling: Implemented the searchinput component demonstrating reusable component creation.
// III. Overview of basic components: Utilized View and TextInput components for user input.
// IV. Event handling and creating a simple user interface: Handled text input and submission using onChangeText and onSubmitEditing.
// V. State Management and Context API: Managed local state using useState to handle input text.
// VII. Access to Native APIs and App Deployment: Clear button functionality integrated with clearButtonMode.

import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
interface SearchInputProps {
  placeholder?: string;
  onSubmit: (text: string) => void; // Define the onSubmit type as a function
}


const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
  };

  const handleSubmitEditing = () => {
    if (!text) return;
    onSubmit(text);
    setText(''); // Clear the input after submission
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={true}
        placeholder={placeholder}
        placeholderTextColor="lightgray"
        underlineColorAndroid="transparent"
        selectionColor="white"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        style={styles.textInput}
        clearButtonMode="always"
        value={text}
      />
    </View>
  );

};
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};



const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 20,
  },

});
export default SearchInput