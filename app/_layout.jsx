import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import { Provider } from "react-redux";
// import store from "./store/store";
import { Colors } from "@/constants/Colors";
export default function RootLayout() {
  return (
    // <Provider store={store}>
    <Stack
      screenOptions={{
        headerShown: false,
        navigationBarColor: Colors.light.background,
      }}
    >
      <Stack.Screen name="(tabs)" options={{}} />
      {/* <Stack.Screen name="updateDetails/[id]" options={{}} /> */}
    </Stack>
    // </Provider>
  );
}
