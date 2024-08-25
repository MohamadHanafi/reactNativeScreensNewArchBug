import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const ScreenTwo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen Two</Text>
    </SafeAreaView>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
