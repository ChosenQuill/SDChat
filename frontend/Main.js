import React, {useState} from 'react';
import {StyleSheet, Text, View, Keyboard, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Appbar, BottomNavigation, TextInput, Button} from "react-native-paper";

import Messages from './pages/Messages';
import Profile from './pages/Profile';
import {GLOBAL} from './Styles';


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
        <View style={GLOBAL.container}>
            <Appbar.Header>
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <BottomNavigation navigationState={cNav} onIndexChange={indexChange} renderScene={renderScene}/>
        </View>
    );
}