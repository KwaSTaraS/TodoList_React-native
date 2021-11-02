import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#027dbe',
        paddingBottom: 5
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingTop: 30

    }
})