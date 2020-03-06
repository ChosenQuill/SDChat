import React from "react"
import {Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./Main"

export default function Index() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Main/>
            </PaperProvider>
        </NavigationContainer>
    )
}