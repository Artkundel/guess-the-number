import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton'

import Colors from '../constants/colors';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}> 
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image fadeDuration={1000}
                    source={require('../assets/success.png')}  
                // source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}} 
                style={styles.image}
                resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the 
                    number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 20
    },
    resultContainer: {
        width: '80%',
        marginVertical: 10,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18    
    }
})

export default GameOverScreen;