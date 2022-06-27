import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Assets from '../../../utilities/Assets';
import {colors, screens} from '../../../utilities/Constants';
import {styles} from './Stylesheet';

const Splash = props => {
  return (
    <ImageBackground source={Assets.splash} style={styles.bgImg}>
      <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <View style={styles.sidePrompt}>
          <View style={styles.capsuleWrapper}>
            <View style={styles.capsule()} />
            <View style={styles.capsule(colors.yellow, 32)} />
            <View style={styles.capsule()} />
          </View>

          <Text style={styles.sidePromptHeading}>Weather Updates?</Text>
          <Text style={styles.sidePromptParagraph}>
            You have nothing to be scared about, we got you covered
          </Text>

          <TouchableOpacity
            style={styles.sidePromptButton}
            onPress={() => {
              props.navigation.navigate(screens.MainScreen);
            }}>
            <Text style={styles.sidePromptButtonLabel}>Start</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Splash;
