import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function History() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>History</Text>
      <Button
        mode="contained"
        onPress={() => {
          router.back();
        }}
      >
        button
      </Button>
    </View>
  );
}
