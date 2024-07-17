"use client";

import React, { createContext, useContext } from "react";
import {
  CCPairBasicInfo,
  DocumentSet,
  Tag,
  User,
  ValidSources,
} from "@/lib/types";
import { ChatSession } from "@/components/chatPageComponents/interfaces";
import { Persona } from "@/interfaces/persona";
import { LLMProviderDescriptor } from "@/interfaces/admin/llm/interfaces";
import { Folder } from "@/components/chatPageComponents/folders/interfaces";

interface ChatContextProps {
  user: User | null;
  chatSessions: ChatSession[];
  availableSources: ValidSources[];
  availableDocumentSets: DocumentSet[];
  availablePersonas: Persona[];
  availableTags: Tag[];
  llmProviders: LLMProviderDescriptor[];
  folders: Folder[];
  openedFolders: Record<string, boolean>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{
  value: ChatContextProps;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = (): ChatContextProps => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
