import theme from "@/constants/theme";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

// Define the interface for the props
interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble = ({ message, isUser }: ChatBubbleProps) => {
  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.otherContainer,
      ]}
    >
      <Card
        style={[styles.bubble, isUser ? styles.userBubble : styles.otherBubble]}
      >
        <Card.Content>
          <Text style={isUser ? styles.userText : styles.otherText}>
            {message}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ChatBubble;

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  userContainer: {
    justifyContent: "flex-end",
  },
  otherContainer: {
    justifyContent: "flex-start",
  },
  bubble: {
    borderRadius: 10,
  },
  userBubble: {
    backgroundColor: theme.colors.primary, // Color for the user's bubble
  },
  otherBubble: {
    backgroundColor: theme.colors.secondaryContainer, // Color for the other user's bubble
  },
  userText: {
    color: "white",
  },
  otherText: {
    color: "black",
  },
});
