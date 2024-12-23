// II. Components and Styling: Implemented a ProfileButton component demonstrating basic component creation.
// III. Overview of basic components: Utilized View and Text components, along with an icon from FontAwesome.
// IV. Event handling and creating a simple user interface: Button could be extended for event handling (not shown here).


import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ProfileButton = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="user" size={24} color="white" />
        </View>
    );
};

export default ProfileButton;
