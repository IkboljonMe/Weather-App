import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const ProfileButton = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="user" size={24} color="white" />
        </View>
    );
};

export default ProfileButton;
