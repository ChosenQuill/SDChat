import React, {useState, Component} from "react";
import {ScrollView, Text, View, Keyboard, Animated, Platform} from "react-native";
import {Button, Card, TextInput} from "react-native-paper";

import {GLOBAL} from '../Styles';


class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ws: new WebSocket('ws://10.33.1.192:3000/')
        }
        this.state.ws.onerror = (err) => {
            console.warn(err);
        }

        this.send = this.send.bind(this);
        this.keyboardWillHide = this.keyboardWillHide.bind(this);
        this.keyboardWillShow = this.keyboardWillShow.bind(this);

        this.chatHeight = new Animated.Value(0);
    }

    componentDidMount () {
        this.keyboardWillShowSub = Keyboard.addListener((Platform.OS === 'android') ? 'keyboardDidShow' : 'keyboardWillShow' , this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener((Platform.OS === 'android') ? 'keyboardDidHide' : 'keyboardWillHide' , this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    send() {
        this.state.ws.send(JSON.stringify({uid: '28360b3e-f61d-42c1-a07e-809cf1fb6ce8', type: 'message', data: this.state.text}));
        this.setState({...this.state, text: ''})
    }

    keyboardWillShow(event) {
        console.log("Keyboard shown")
        Animated.parallel([
            Animated.timing(this.chatHeight, {
                duration: event.duration,
                toValue: event.endCoordinates.height,
            }),
        ]).start();
    }

    keyboardWillHide(event) {
        Animated.parallel([
            Animated.timing(this.chatHeight, {
                duration: event.duration,
                toValue: 0,
            }),
        ]).start();
    }

    render() {
        return (

            <ScrollView contentContainerStyle={GLOBAL.container}
                        keyboardShouldPersistTaps="handled">
                <Animated.View style={[GLOBAL.container, {marginBottom: this.chatHeight}]}>
                    <Card style={GLOBAL.card}>
                        <Card.Content style={{flex: 1, justifyContent: 'flex-end'}}>
                            <Text style={{fontSize: 18}}>Some text here</Text>

                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                                <TextInput dense label='Message' value={this.state.text}
                                           onChangeText={(text) => this.setState({...this.state, text})} mode='outlined'
                                           multiline style={{flex: 3, marginRight: 10}}/>
                                <Button icon='send' mode='contained' style={{padding: 2, marginTop: 5}}
                                        onPress={this.send}>Send</Button>
                            </View>
                        </Card.Content>
                    </Card>
                </Animated.View>
            </ScrollView>

        );
    }
}

export default Messages;