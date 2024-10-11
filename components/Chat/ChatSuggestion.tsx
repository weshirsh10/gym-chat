import { View, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

interface ChatSuggestionProps {
  suggestions: string[];
}

const ChatSugggestion = ({ suggestions }: ChatSuggestionProps) => {
  return (
    <View style={styles.container}>
      {suggestions.map((suggestion, index) => (
        <Chip
          key={index}
          style={styles.chip}
          onPress={() => console.log(suggestion)}
        >
          {suggestion}
        </Chip>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  chip: {
    margin: 2,
    flex: 1,
  },
});

export default ChatSugggestion;
