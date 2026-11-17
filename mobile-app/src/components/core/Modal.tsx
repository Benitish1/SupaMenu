import React from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  size?: "sm" | "md" | "lg";
}

const Modal = ({
  onClose,
  children,
  title,
  size,
}: ModalProps) => {
  const maxWidth =
    size === "sm" ? 320 : size === "md" ? 420 : size === "lg" ? 520 : 320;

  return (
    <View className=" z-40 absolute w-full p-2 top-0 flex-1 items-center justify-center h-full bottom-0 bg-black/20">
      <View
        style={{ maxWidth: maxWidth }}
        className=" z-50 bg-white dark:bg-card-dark items-center w-full max-w-[320px] flex-col p-5 pt-3 rounded-lg"
      >
        <View className=" flex-row w-full justify-between pb-4 items-center">
          <ThemedText className=" text-lg font-bold">{title}</ThemedText>
          <Pressable
            className=" h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark shadow-sm"
            onPress={onClose}
          >
            <ThemedText>X</ThemedText>
          </Pressable>
        </View>
        {children}
      </View>
    </View>
  );
};

export default Modal;