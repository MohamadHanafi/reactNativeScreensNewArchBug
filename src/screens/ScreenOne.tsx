import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const ScreenOne = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen One</Text>
    </SafeAreaView>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
