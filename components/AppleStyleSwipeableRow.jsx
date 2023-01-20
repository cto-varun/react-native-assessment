import React, { Component, PropsWithChildren } from "react";
import {
  Animated,
  StyleSheet,
  View,
  I18nManager,
  ActivityIndicator,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ConditionalRendering from "./ConditionalRendering";

export default class AppleStyleSwipeableRow extends Component {
  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      if (!this.props?.loading) {
        if (text === "delete") {
          this.props.delete();
        }
        if (text === "phone") {
          this.props.phone();
        }
        this.close();
      }
    };

    return (
      <Animated.View style={[{ flex: 1, transform: [{ translateX: trans }] }]}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <ConditionalRendering
            condition={this.props.loading}
            positive={<ActivityIndicator color={"#fff"} />}
            negative={
              <MaterialCommunityIcons name={text} color={"#fff"} size={20} />
            }
          />
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 150,
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
      }}
    >
      {this.renderRightAction("phone", "green", 70, progress)}
      {this.renderRightAction("delete", "red", 70, progress)}
    </View>
  );

  swipeableRow;

  updateRef = (ref) => {
    this.swipeableRow = ref;
  };
  close = () => {
    this.swipeableRow?.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        // renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
        containerStyle={styles.container}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#497AFC",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    borderRadius: 20,
  },
  container: {
    marginBottom: 12,
  },
  deleteContainer: {},
});
