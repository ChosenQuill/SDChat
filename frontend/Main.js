import React, {useState} from 'react';
import {StyleSheet, Text, View, Keyboard, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Appbar, BottomNavigation, TextInput} from "react-native-paper";

function Profile() {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Paragraph>Asdf</Paragraph>
            </Card.Content>
        </Card>
    );
}

function Messages() {
    let [text, setText] = useState('');
    const ws = new WebSocket('ws://10.33.1.192:3000/');
    ws.onerror = (err) => {
        console.warn(err);
    }

    const changeText = (newVal) => {
        setText(newVal);
        // if([WebSocket.CLOSED, WebSocket.CONNECTING].includes(ws.readyState)){
        //     console.warn("Socket is not connected " + WebSocket.CLOSED)
        // }
        ws.send(JSON.stringify({ type: 'change', data: newVal }));
    }

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <TextInput label='Message' value={text} onChangeText={(t)=>changeText(t)} mode='outlined' multiline/>
                </Card.Content>
            </Card>
        </ScrollView>

    );
}

export default function Main() {
    let [cNav, setNav] = useState({
        index: 0,
        routes: [
            {key: 'messages', title: 'Messages', icon: 'message-text'},
            {key: 'profile', title: 'Profile', icon: "account"},
        ]
    });
    const indexChange = i => setNav({...cNav, index: i});
    const renderScene = BottomNavigation.SceneMap({
        profile: Profile,
        messages: Messages
    });

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <BottomNavigation navigationState={cNav} onIndexChange={indexChange} renderScene={renderScene}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        margin: 10,
        width: 'auto',
        height: 'auto',
        flex: 1,
    }
});