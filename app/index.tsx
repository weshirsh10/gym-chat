import ChatBubble from "@/components/Chat/ChatBubble";
import ChatInput from "@/components/Chat/ChatInput";
import { sendChat } from "@/services/sendChat";
import { useState } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";

const introMessages: ChatMessage[] = [
  {
    message: "Hello, what are we working on today?",
    isUser: false,
    timestamp: Date.now(),
  },
  {
    message: "Good to see you again, where should we start?",
    isUser: false,
    timestamp: Date.now(),
  },
];

const Chat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    introMessages[Math.floor(Math.random() * introMessages.length)],
  ]);

  const chat = async (message: string) => {
    const incomingChat = {
      message,
      isUser: true,
      timestamp: Date.now(),
    };
    setChatMessages((prevMessage) => [...prevMessage, incomingChat]);
    const responseText = (await sendChat(message)).fulfillmentText;
    const responseChat = {
      message: responseText,
      isUser: false,
      timestamp: Date.now(),
    };
    setChatMessages((prevMessage) => [...prevMessage, responseChat]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {chatMessages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message.message}
            isUser={message.isUser}
          />
        ))}
      </ScrollView>
      <ChatInput onSend={chat} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
