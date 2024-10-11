// components/ChatInput.tsx
import theme from "@/constants/theme";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import ChatSuggestion from "./ChatSuggestion";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <View style={styles.container}>
      <ChatSuggestion
        suggestions={["Start a new workout!", "Show my last workout."]}
      />
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          right={
            <TextInput.Icon
              icon="send"
              onPress={handleSend}
              color={theme.colors.primary}
            />
          }
        />
      </View>
    </View>
  );
};

export default ChatInput;

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderColor: theme.colors.primary,
  },
});
