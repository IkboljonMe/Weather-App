// II. Components and Styling: Implemented the searchLocation class component demonstrating reusable component creation.
// III. Overview of basic components: Utilized View and TextInput components for user input.
// IV. Event handling and creating a simple user interface: Handled text input and submission using onChangeText and onSubmitEditing.
// V. State Management and Context API: Managed local state using this.state to handle the location input.
// VIII. Access to Native APIs and App Deployment: Integrated the placeholder prop for user guidance in input.

import React from "react";
import { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import props from "prop-types";

handleChangeText = (newLocation) => {
  this.props.location = newLocation;
};
handleSubmitEditing = () => {
  const { onSubmit } = this.props;
  const { text } = this.state;
  if (!text) return;
  onSubmit(text);
  this.setState({ text: "" });
};

export default class searchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "San Francisco",
    };
  }
  handleUpdateLocation = (city) => {
    this.setState({
      location: city,
    });
  };

  handleChangeText = (newLocation) => {
    // We need to do something with newLocation
    this.props.placeholder = newLocation;
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={props.placeholder}
          placeholderTextColor="lightgray"
          underlineColorAndroid="transparent"
          selectionColor={"white"}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "transparent",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  textInput: {
    flex: 1,
    color: "white",
    fontSize: 20,
  },
});
