import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Route from "./routes";
// import { AuthProvider } from "./context/AuthContext";
LogBox.ignoreAllLogs();

const App = () => {
  return (
    // <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </Provider>
    // </AuthProvider>
  );
};
export default App;
const styles = StyleSheet.create({});
