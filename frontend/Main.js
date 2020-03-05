import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph, Appbar, BottomNavigation} from "react-native-paper";

function Profile() {
    return (
        <Card>
            <Card.Content>
                <Paragraph>Asdf</Paragraph>
            </Card.Content>
        </Card>
    );
}

function Messages() {
    return (
        <Card>
            <Card.Content>
                <Paragraph>Asdf2</Paragraph>
            </Card.Content>
        </Card>
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
});