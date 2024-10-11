import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import theme from "@/constants/theme";
import Header from "@/components/Header/HeaderTitle";
import HeaderButtonRight from "@/components/Header/HeaderButtonRight";

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerRight: () => (
              <HeaderButtonRight iconName={"clipboard-text-clock-outline"} />
            ),
            title: "Chat",
          }}
        />
        <Stack.Screen
          name="history"
          options={{
            headerTitle: (props) => <Header {...props} />,
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
