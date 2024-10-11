import ChatBubble from "@/components/Chat/ChatBubble";
import ChatInput from "@/components/Chat/ChatInput";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";

const Chat = () => {
  const messages: ChatMessage[] = [
    {
      message: "Hello, how are you?",
      isUser: false,
      timestamp: Date.now(),
    },
    {
      message: "I'm good, thanks! How about you?",
      isUser: true,
      timestamp: Date.now(),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message.message}
            isUser={message.isUser}
          />
        ))}
      </ScrollView>
      <ChatInput onSend={console.log} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
