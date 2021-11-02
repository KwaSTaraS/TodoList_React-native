import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, FlatList} from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Work "Empty field msg Alert"'},
        {id: 2, title: 'Work "ScrollView(false)"'},
        {id: 3, title: 'Work "FlatList(true)"'},
        {id: 4, title: 'Work "Pressable"'},
        {id: 5, title: 'Work "TouchableOpacity"'},
        {id: 6, title: 'Long tap = remove task'},
        {id: 7, title: 'test'},
        // {id: 8, title: 'test'},
        // {id: 9, title: 'test'},
        // {id: 10, title: 'test'},
    ])
    const addTodo = (title) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title: title,
            }
        ])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <ImageBackground
            source={require('../DoneWithIt/img/backgroundForApp.jpg')}
            style={styles.backgroundImage}>
            <View>
                <Navbar title='Todo App'/>
                <View style={styles.line}/>
                <View style={styles.container}>
                    <AddTodo onSubmit={addTodo}/>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={todos}
                        renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
                        />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    line: {
        height: 3,
        marginTop: 3,
        backgroundColor: '#027dbe'
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'

    },
});
