// II. Components and Styling: Implemented the ProfileScreen component demonstrating basic component creation.
// III. Overview of basic components: Utilized View and Text components for layout and display.
// IV. Event handling and creating a simple user interface: Basic UI layout established for user credentials display.
// V. State Management and Context API: Potential to integrate state management (not shown here).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Creator Credentials</Text>
            <Text>Name: Farid Rahimzada Student ID: 37858</Text>
            <Text>Simple Weather App where you can see weather info</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
