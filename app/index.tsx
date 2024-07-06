import { Groups } from "@/src/screens/Groups";
import { Text, View, StatusBar } from "react-native";
import {ThemeProvider} from "styled-components"
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from "@/src/theme";


export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"



/>


      <Groups />
    </ThemeProvider>

  );
}
