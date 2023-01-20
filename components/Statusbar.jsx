import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";

export default (props) => {
  const { backgroundColor = '#fff' } = props;
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle="dark-content"
          {...props}
        />
      </SafeAreaView>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
