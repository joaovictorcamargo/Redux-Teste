import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import UserList from "../../UserList";
import store from "../../store";

export function ScreenB() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <UserList />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
}
