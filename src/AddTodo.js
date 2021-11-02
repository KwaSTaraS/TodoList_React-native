import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert, Pressable, Text} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert("Name task can't be empty")
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter name task..."
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Pressable style={styles.buttonField} onPress={pressHandler}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        width: `80%`,
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#027dbe",
        backgroundColor: "#fff"

    },
    buttonField: {
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#027dbe",

    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})