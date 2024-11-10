import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";
import { FirebaseError } from "firebase/app";

export interface ChatResponse {
  fulfillmentText: string;
}

const chat = httpsCallable(functions, "chat");
export const sendChat = async (message: string): Promise<ChatResponse> => {
  try {
    // Call the chat function
    const response = await chat({ sessionId: "1234567", query: message });

    // Access the response correctly
    return response?.data as ChatResponse;
  } catch (error) {
    // Error handling
    if (error instanceof FirebaseError) {
      console.error("CHAT ERROR", error.message, error.code, error.name);
      throw new Error("Failed to send chat");
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
};
