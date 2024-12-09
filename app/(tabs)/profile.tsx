// app/(tabs)/Profile.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from 'expo-router'; // Ensure you have this import for navigation
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    const navigation = useNavigation();
    const fadeAnim = new Animated.Value(0); // Initial opacity of 0

    // Animate opacity on component mount
    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000, // Duration for fade-in effect
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>About the Creator</Text>
            <Text style={styles.info}>Name: Ikboljon Abdurasulov</Text>
            <Text style={styles.info}>Student ID: 12345678</Text>
            <Text style={styles.description}>
                This project is an application for recognizing people in video files using the YOLO library. It aims to provide real-time object detection and labeling capabilities for educational purposes.
            </Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Light background color
        padding: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6200ee', // Main color for button
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    backButtonText: {
        color: 'white',
        marginLeft: 8,
        fontSize: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 18,
        marginVertical: 5,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        color: '#555',
    },
});

export default Profile;
