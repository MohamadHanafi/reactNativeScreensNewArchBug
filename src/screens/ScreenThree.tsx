import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const ScreenThree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen Three</Text>
    </SafeAreaView>
  );
};

export default ScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
