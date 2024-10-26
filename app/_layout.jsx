import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants"
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
          navigationBarColor: COLORS.background,
        }}
      >
        <Stack.Screen name="(tabs)" options={{}} />
        <Stack.Screen name="quiz/Quizes" options={{}} />
      </Stack>
    </Provider>
  );
}
