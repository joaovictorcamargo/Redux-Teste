import React from "react";
import { Button, View } from "react-native";

export function ScreenA({ navigation }) {
  function openScreen() {
    navigation.navigate("screenB");
  }
  return (
    <View>
      <Button title="Go To B" onPress={openScreen} />
    </View>
  );
}
