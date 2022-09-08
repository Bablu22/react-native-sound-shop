import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import useFonts from "./hooks/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./components/Navigation/Navigation";
import { Provider } from "react-redux"
import store from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist"

const persisote = persistStore(store)
export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startup = async () => {
    try {
      await useFonts();
    } catch (e) {
      console.warn(e);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    startup();
  }, []);

  if (!isReady) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persisote}>
            <Navigation />
            <StatusBar style="auto" />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
